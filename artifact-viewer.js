import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

const state = {
  sourceText: "",
  diagramSource: "",
  sourceVisible: false,
  zoom: 1,
};

const els = {
  render: document.querySelector("#artifactRender"),
  canvas: document.querySelector("#artifactCanvas"),
  sourcePanel: document.querySelector("#artifactSourcePanel"),
  sourcePre: document.querySelector("#artifactSourcePre"),
  toggleSourceButton: document.querySelector("#toggleArtifactSourceButton"),
  copySourceButton: document.querySelector("#copyArtifactSourceButton"),
  zoomRange: document.querySelector("#artifactZoomRange"),
  resetZoomButton: document.querySelector("#resetArtifactZoomButton"),
};

if (els.render) {
  init().catch((error) => {
    console.error(error);
    els.render.innerHTML =
      '<p class="artifact-error">The original artifact failed to render here. Use "Open in Claude" or view the source.</p>';
    state.sourceVisible = true;
    syncSourcePanel();
  });
}

async function init() {
  wireEvents();
  syncSourcePanel();
  await loadSource();
  await renderArtifact();
}

async function loadSource() {
  const response = await fetch("./artifact-source.txt");
  if (!response.ok) {
    throw new Error(`Failed to load artifact source: ${response.status}`);
  }

  state.sourceText = await response.text();
  state.diagramSource = state.sourceText.replace(/^---[\s\S]*?---\s*/, "").trim();
  els.sourcePre.textContent = state.sourceText;
}

async function renderArtifact() {
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    theme: "base",
    fontFamily: "Space Grotesk, sans-serif",
    flowchart: {
      useMaxWidth: false,
      htmlLabels: true,
      nodeSpacing: 44,
      rankSpacing: 76,
    },
    themeVariables: {
      background: "#fbf6ed",
      primaryColor: "#2459d6",
      primaryBorderColor: "#1540a9",
      primaryTextColor: "#ffffff",
      secondaryColor: "#f7f3eb",
      tertiaryColor: "#f7f0e5",
      lineColor: "#8c7e70",
      fontSize: "18px",
    },
  });

  const diagramId = `original-framework-${Date.now()}`;
  const { svg } = await mermaid.render(diagramId, state.diagramSource);
  els.render.innerHTML = svg;
  applyZoom();
}

function wireEvents() {
  els.toggleSourceButton?.addEventListener("click", () => {
    state.sourceVisible = !state.sourceVisible;
    syncSourcePanel();
  });

  els.copySourceButton?.addEventListener("click", async () => {
    if (!state.sourceText) return;

    try {
      await navigator.clipboard.writeText(state.sourceText);
      flashButtonLabel(els.copySourceButton, "Copied");
    } catch (error) {
      console.error(error);
      flashButtonLabel(els.copySourceButton, "Copy failed");
    }
  });

  els.zoomRange?.addEventListener("input", (event) => {
    state.zoom = Number(event.target.value) / 100;
    applyZoom();
  });

  els.resetZoomButton?.addEventListener("click", () => {
    state.zoom = 1;
    if (els.zoomRange) {
      els.zoomRange.value = "100";
    }
    applyZoom();
  });
}

function syncSourcePanel() {
  const label = state.sourceVisible ? "Hide source" : "Show source";

  els.sourcePanel?.classList.toggle("is-hidden", !state.sourceVisible);
  els.toggleSourceButton?.setAttribute("aria-expanded", String(state.sourceVisible));
  if (els.toggleSourceButton) {
    els.toggleSourceButton.textContent = label;
  }
}

function applyZoom() {
  if (!els.canvas) return;
  els.canvas.style.transform = `scale(${state.zoom})`;
}

function flashButtonLabel(button, label) {
  if (!button) return;

  const previousLabel = button.textContent;
  button.textContent = label;

  window.setTimeout(() => {
    button.textContent = previousLabel;
  }, 1200);
}
