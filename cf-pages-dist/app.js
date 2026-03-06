const toolkitItem = (id, label, summary, data) => ({
  id,
  label,
  summary,
  ...data
});

const frameworkSteps = [
  {
    id: "clarify",
    step: "01",
    title: "Clarify & Scope",
    status: "strong",
    duration: "2-3 min",
    cumulative: "3 min",
    accent: "#2d5ff6",
    memory: "Goal first. Surface or scope second. Strategic hypothesis third.",
    focus:
      "Turn an open prompt into a bounded problem without drifting into feature mode.",
    mechanics: [
      "Audit the ambiguity silently first: goal, surface, and scope.",
      "Ask exactly 2-3 questions. Start with the goal, then narrow the surface or scope, then test one strategic hypothesis if useful.",
      "Treat “up to you” as permission to choose the strongest framing, not as a lack of direction.",
      "Move straight into your framing. Do not ask the interviewer for permission to continue."
    ],
    toolkit: [
      toolkitItem("goal-question", "Goal question", "Start by locking the outcome variable.", {
        ask: 'Ask: "What is our primary goal here — engagement, retention, or monetization?"',
        insight:
          "This should usually be your first spoken question. It tells you what success actually means and prevents the rest of the answer from optimizing for the wrong thing.",
        examples: [
          "Engagement pushes you toward participation, signal quality, and repeat interaction.",
          "Retention pushes you toward habit loops and reasons to come back.",
          "Monetization pushes you toward high-intent behavior and a clearer revenue bridge."
        ],
        frame:
          '"Before I dive in, what is our primary goal here — engagement, retention, or monetization?"'
      }),
      toolkitItem("surface-scope", "Surface or scope question", "Narrow the solution space before you ideate.", {
        ask:
          'Ask: "Are we focused on a specific surface or the full Family of Apps, and are there scope constraints I should assume?"',
        insight:
          "This is the second clarifier. It stops you from drifting across Facebook, Instagram, WhatsApp, and Threads without making a choice.",
        examples: [
          "Instagram Stories only vs all of Instagram",
          "Marketplace only vs broader Facebook behavior",
          "US-only vs global rollout"
        ],
        frame:
          '"Are we focused on a specific surface or the broader ecosystem, and should I assume a particular scope like one region or audience?"'
      }),
      toolkitItem("constraint-check", "Constraint check", "Use the last clarifier to find a real constraint, not a build instruction.", {
        ask: 'Ask: "Any constraints or strategic boundaries I should know about?"',
        insight:
          "This question is for real limits or a high-value hypothesis check. It is not an invitation to ask the interviewer how to solve the problem.",
        examples: [
          "A geography, age band, or policy constraint",
          "Whether the problem is mostly supply-side or demand-side",
          "A time horizon or launch limitation"
        ],
        frame:
          '"Any constraints, strategic boundaries, or assumptions you want me to hold constant as I work through it?"'
      }),
      toolkitItem("own-framing", "Own the framing", "Once the clarifiers land, stop asking permission and transition.", {
        ask: 'Ask yourself: "Given those answers, what tension generator does this point to?"',
        insight:
          "Use the clarifiers to pick the strategic frame, then move. The artifact explicitly warned against ending the clarifying section with hesitation.",
        examples: [
          '"Great — given that, here is how I would frame the problem."',
          '"Based on that scope, the core tension is..."',
          "For improvement prompts, state your product pick first, then reframe."
        ],
        frame:
          '"Great — given that scope, here is how I would frame this problem."'
      })
    ],
    say:
      "Before diving in, ask for the primary goal, the relevant surface, and any real constraints.",
    avoid: [
      "Asking how to build it or which features to include.",
      "Ending with “does that make sense?” or “should I continue?”"
    ],
    watch:
      "Improvement questions are the one variant: state the area you would improve first, then clarify goals and constraints.",
    transition: "Given that scope, here is how I would frame the strategic problem."
  },
  {
    id: "reframe",
    step: "02",
    title: "Strategic Reframe",
    status: "strong",
    duration: "1 min",
    cumulative: "4 min",
    accent: "#6b5ef5",
    memory: "Tension + Meta edge + stake.",
    focus:
      "Convert the prompt into a real strategic tension that only Meta is positioned to solve.",
    mechanics: [
      "A reframe is not a risk and not an asset list. It is two forces in conflict.",
      "Use one of five reliable generators: unstructured behavior, investment imbalance, attention without intent capture, passive to active participation, or an underused Meta asset.",
      "Run a 15-second scan: does the behavior already happen, is one surface neglected, is intent being missed, and if none fit, fall back to Meta’s unique asset.",
      "Pressure-test the framing: if the same reframe works for Google, it is not Meta-specific enough."
    ],
    toolkit: [
      toolkitItem(
        "behavior-already-exists",
        "Behavior already exists",
        "Messy social behavior already exists; structure captures value but can also kill the behavior.",
        {
          ask: 'Ask: "Are people already doing this on Meta, but messily?"',
          insight:
            'If yes, the tension is NOT whether to structure it. That part is obvious. The tension is that structuring captures transaction value, but risks destroying the organic social behavior that generates the demand in the first place. Friends stop replying because "the system handles it." Meta becomes liable for quality. Community-driven becomes platform-driven.',
          examples: [
            "Pet adoption → people post in Groups asking for pets, but Petfinder captures the structured transaction",
            "Home repair → people ask for contractor recs in Groups, but Thumbtack captures the booking",
            "Job search → people network on Facebook, but LinkedIn captures the hiring workflow"
          ],
          frame:
            '"[Activity] happens organically on Meta through [social mechanism — Groups, friend posts, DMs]. Structuring it would capture [transaction/data value], but risks killing the [social dynamic] that makes it work. The tension is: Meta can own the transaction by adding structure, or protect the organic community behavior that generates the demand — but doing both simultaneously is the hard product problem."'
        }
      ),
      toolkitItem(
        "investment-imbalance",
        "Investment imbalance",
        "One surface gets the resources while an adjacent surface with real potential is neglected.",
        {
          ask: 'Ask: "Has Meta invested heavily in one surface but neglected an adjacent one?"',
          insight:
            "If yes, the tension is that continued investment in the current winner may be producing diminishing returns while a large adjacent surface is underperforming relative to its potential.",
          examples: [
            "Stories vs Reels → Reels gets the investment, Stories is stagnant despite massive reach",
            "Facebook Groups vs Instagram Communities → Groups have deep engagement, Instagram lacks an equivalent",
            "WhatsApp Status vs Instagram Stories → Status has huge daily reach but little monetization"
          ],
          frame:
            "\"Meta has invested heavily in [Surface A], but [Surface B] — which reaches [scale] — has seen limited product innovation. The tension is: keep compounding the current winner, or redirect attention to an underinvested surface with large untapped upside.\""
        }
      ),
      toolkitItem(
        "attention-without-intent",
        "Attention without intent",
        "Meta owns attention in a high-value context but does not capture the signal hidden inside that context.",
        {
          ask:
            'Ask: "Does Meta have the user\'s attention in this context but fail to capture the high-value intent?"',
          insight:
            "If yes, the tension is that Meta has the eyeballs and often the demand signal, but still treats this moment like generic scrolling instead of a context with unusually strong intent.",
          examples: [
            "Airport layover → users scroll aimlessly, but the captive context is high-intent and high-value",
            "Life events → moving, having a baby, or getting engaged creates commerce intent that Meta often leaves dormant",
            "Sports viewing → fans are on Instagram during games, but Meta does not fully capture the real-time intent"
          ],
          frame:
            "\"Meta already has users' attention during [context], but treats them like generic feed consumers when in reality they have [specific intent]. The tension is: Meta owns both the audience and the demand signal, but is not connecting them.\""
        }
      ),
      toolkitItem(
        "passive-to-active",
        "Passive to active",
        "Users are present, but their engagement is too shallow to create useful signal or durable value.",
        {
          ask: 'Ask: "Are most users passive on this surface when they could be active?"',
          insight:
            "If yes, the tension is that engagement exists, but it is shallow. Turning even a small share of passive users into active participants can materially change the economics of the system.",
          examples: [
            "Reels viewers who never interact → the algorithm gets less signal and recommendations degrade",
            "Group members who read but never post → the community looks alive, but creation is concentrated in a few people",
            "Marketplace browsers who never buy → there is high-intent traffic, but it never converts"
          ],
          frame:
            "\"[X] users engage with [surface] daily, but a large share are passive — they consume without generating signal. The tension is: the system needs participation to serve them well, but the current product gives them no low-friction way to contribute.\""
        }
      ),
      toolkitItem(
        "underused-meta-asset",
        "Underused Meta asset",
        "Meta has a unique asset that should matter here, but the product is not really using it.",
        {
          ask:
            'Ask: "What does Meta have that nobody else has — and is it being fully used for this problem?"',
          insight:
            "Meta’s unique assets include the social graph, the interest graph, cross-app identity, location signals, and enormous scale. The tension is that Meta should be structurally advantaged here, yet a more focused competitor may still win with weaker data.",
          examples: [
            "Friend recommendations → Meta knows your friends reviewed a place but does not surface that at the right moment",
            "Creator-audience relationship → Meta knows who you engage with most, but does not always turn that into better commerce or event experiences",
            "Cross-app context → WhatsApp, Instagram, and Facebook together can reveal intent that no single app can match"
          ],
          frame:
            "\"Meta has a unique [asset] that no competitor can replicate. But for [this problem], that asset is underutilized. The tension is: Meta should be able to deliver a meaningfully better product here, but its advantage is not actually showing up in the user experience.\""
        }
      )
    ],
    say:
      "This is fundamentally a tension between two forces, Meta has a unique edge because of its assets, and the stake is what happens if the company gets this right or wrong.",
    avoid: [
      "Generic filler like “this is an interesting problem.”",
      "Naming an asset or a liability without synthesizing them into a tension."
    ],
    watch:
      "The artifact’s main warning here was getting stuck at “risk plus asset” without forming a real trade-off.",
    transition: "Given that framing, the next question is which users I would focus on first."
  },
  {
    id: "segmentation",
    step: "03",
    title: "Segmentation",
    status: "strong",
    duration: "4-5 min",
    cumulative: "9 min",
    accent: "#8f4ef1",
    memory: "Pick the side first. Then segment within that side by behavior.",
    focus:
      "Name three behavioral segments, choose one, and justify the pick without using a scoring matrix.",
    mechanics: [
      "Let the reframe choose the lens: supply vs demand, frequency and depth, lifecycle, job to be done, or context of use.",
      "Identify the marketplace side first, then segment within that side. Do not confuse ecosystem sides with user segments.",
      "Define each segment by behavior, frequency, and motivation. Never use demographics here.",
      "Choose using leverage first, then urgency, addressability, and strategic alignment."
    ],
    toolkit: [
      toolkitItem("engagement-mode", "Engagement mode", "Split users by how they show up, not by who they are demographically.", {
        ask: 'Ask: "Are users engaging intentionally, habitually, or reactively?"',
        insight:
          "Use this lens when the key difference is the shape of engagement. It helps you define segments by behavior and intent instead of demographics.",
        examples: [
          "Intentional or goal-directed users who arrive to accomplish something specific",
          "Habitual or passive users who consume by default",
          "Reactive users who open the app because a notification or social cue pulled them in"
        ],
        frame:
          "\"I see three segments based on engagement mode: intentional users, habitual consumers, and reactive users. I'd focus on [pick] because solving for them changes the system most.\""
      }),
      toolkitItem("frequency-depth", "Frequency and depth", "Use intensity of usage when the problem changes with repetition.", {
        ask: 'Ask: "Who are the daily power users, weekly browsers, and low-depth or dormant users?"',
        insight:
          "This lens is useful when pain depends on how often someone shows up or how deeply they participate once they do.",
        examples: [
          "Daily power users with repeated behavior and strong habits",
          "Weekly browsers who sample the product but do not invest heavily",
          "Dormant or low-depth users who churn quietly or never commit"
        ],
        frame:
          "\"If I segment by frequency and depth, I see daily power users, weekly browsers, and low-depth users. I'd focus on [pick] because that segment has the biggest leverage or urgency.\""
      }),
      toolkitItem("lifecycle", "Lifecycle", "Break the problem apart by stage, not by age or identity.", {
        ask: 'Ask: "Is the problem different for new users, established users, and users who are drifting away?"',
        insight:
          "Lifecycle is strongest when the challenge changes meaningfully after onboarding, after habit formation, or during churn risk.",
        examples: [
          "New users who are still learning the product and have little context",
          "Established users with repeated patterns and clearer expectations",
          "Churning users whose engagement is thinning out"
        ],
        frame:
          "\"Looking at lifecycle, I see new users, established users, and churning users. I'd focus on [pick] because the product can change their trajectory most meaningfully.\""
      }),
      toolkitItem("job-to-be-done", "Job to be done", "Segment by the outcome the person is trying to achieve.", {
        ask: 'Ask: "What job is each user actually trying to get done in this moment?"',
        insight:
          "This lens works when the same surface serves multiple very different outcomes and the real distinction is intent, not identity.",
        examples: [
          "Trying to discover something",
          "Trying to transact or complete a workflow",
          "Trying to create, share, or get feedback"
        ],
        frame:
          "\"By job to be done, I see users trying to [job A], [job B], and [job C]. I'd focus on [pick] because that job sits closest to the strategic tension I framed earlier.\""
      }),
      toolkitItem("context-of-use", "Context of use", "Use the moment and environment when the same user behaves differently across contexts.", {
        ask: 'Ask: "Does the user behave differently depending on where and when they are using the product?"',
        insight:
          "This lens is useful when mobile commute behavior, desktop behavior, or lean-back evening behavior creates different needs.",
        examples: [
          "Mobile commute sessions with low attention and quick actions",
          "Desktop sessions with more task completion or creation depth",
          "Evening lean-back sessions oriented toward passive consumption"
        ],
        frame:
          "\"If I segment by context of use, I see [context A], [context B], and [context C]. I'd focus on [pick] because that context is where the tension shows up most sharply.\""
      })
    ],
    say:
      "I see three behavioral segments, and I would focus on the one where improving the experience creates the strongest downstream effect.",
    avoid: [
      "Demographic labels like age brackets or generic “millennials.”",
      "Explaining pain points before you have actually picked the segment."
    ],
    watch:
      "The artifact called out a recurring trap here: naming sides of the marketplace instead of segmenting within one chosen side.",
    transition: "I would focus on this segment because of its leverage. Their biggest friction shows up when..."
  },
  {
    id: "pain",
    step: "04",
    title: "Pain Points",
    status: "strong",
    duration: "3-4 min",
    cumulative: "13 min",
    accent: "#0ea5b7",
    memory: "They try to X, but Y happens, so Z consequence follows.",
    focus:
      "Surface 3-5 pain points for the chosen segment only, and make them feel like lived frustrations instead of feature requests.",
    mechanics: [
      "Walk the user journey chronologically: discovery, action, feedback, repeat.",
      "Use the full formula for every pain point: the user tries to do something, something concrete fails, and that creates an emotional or behavioral consequence.",
      "Run the solution-in-disguise test. If it sounds like a dashboard request, rewrite it as a frustration.",
      "Pick the top pain by frequency, severity, and segment-specificity, then connect it to business relevance."
    ],
    toolkit: [
      toolkitItem("abandonment", "Abandonment", "Look for the moment the user simply gives up.", {
        ask: 'Ask: "Where does this segment stop altogether?"',
        insight:
          "The strongest pain points often end with the person abandoning the action, draft, or workflow entirely. That consequence is memorable and strategically important.",
        examples: [
          "A creator abandons the draft and posts nothing",
          "A buyer leaves without completing the transaction",
          "A user stops checking back because the effort no longer feels worth it"
        ],
        frame:
          '"They try to [action], but [friction], so they abandon the flow entirely."'
      }),
      toolkitItem("workaround", "Workaround", "Find where the user patches the problem with another tool, channel, or process.", {
        ask: 'Ask: "Where are they forced to stitch together a workaround?"',
        insight:
          "A workaround is useful because it reveals real demand. The user still wants the outcome, but Meta is not meeting them cleanly inside the product.",
        examples: [
          "Switching to DMs, spreadsheets, or outside coordination",
          "Using Groups for discovery but another marketplace for the actual transaction",
          "Leaving for a specialist tool after early intent appears on Meta"
        ],
        frame:
          '"They try to solve this on Meta, but the workflow breaks, so they create a workaround or leave for another tool."'
      }),
      toolkitItem("emotional-cost", "Emotional cost", "Show the feeling the friction creates, not just the mechanical problem.", {
        ask: 'Ask: "What does this friction make them feel?"',
        insight:
          "The artifact pushed hard on consequence. Emotional cost is often the memorable part: feeling invisible, uncertain, embarrassed, or unsupported.",
        examples: [
          "They feel invisible because they cannot tell if anyone values what they posted",
          "They feel uncertain because they do not know what works",
          "They feel embarrassed because the workflow makes them look disorganized"
        ],
        frame:
          '"They try to [action], but [friction], so they feel [emotion] and their behavior changes."'
      }),
      toolkitItem("economic-cost", "Economic cost", "Use this when the friction directly costs the user money or value.", {
        ask: 'Ask: "Where does the friction create a financial or commercial penalty?"',
        insight:
          "Economic consequences are powerful because they connect naturally to business value and justify why the pain point matters beyond annoyance.",
        examples: [
          "A seller loses conversion",
          "A creator loses revenue opportunity",
          "A small business loses leads because the workflow is too weak"
        ],
        frame:
          '"They try to [action], but [friction], so they lose [revenue, demand, or conversion]."'
      }),
      toolkitItem("behavior-drop", "Behavior drop", "Measure the pain by the behavior it suppresses.", {
        ask: 'Ask: "What useful behavior falls off because this pain point exists?"',
        insight:
          "The behavioral consequence is often the most strategic lens because it translates the frustration into something the ecosystem actually loses.",
        examples: [
          "Posting frequency drops",
          "Response rate drops",
          "Repeat engagement declines"
        ],
        frame:
          '"They try to [action], but [friction], so their [posting, conversion, or engagement] drops over time."'
      })
    ],
    say:
      "The pain point is strongest when you can show the moment they give up, switch tools, or reduce engagement.",
    avoid: [
      "Feature asks like “they need analytics” or “they want a dashboard.”",
      "Pain points that apply to everyone instead of your chosen segment."
    ],
    watch:
      "The artifact emphasized that the consequence is what makes a pain point memorable and strategically useful.",
    transition: "This is the pain point I would solve first, and here are the solution directions I would consider."
  },
  {
    id: "solutions",
    step: "05",
    title: "Solutions",
    status: "watch",
    duration: "8-10 min",
    cumulative: "23 min",
    accent: "#33a46f",
    memory: "Three levers, one choice, deep V1, smarter V2, full ecosystem trace.",
    focus:
      "Generate three distinct options, choose one strategically, and go much deeper than feature headlines.",
    mechanics: [
      "Use the three levers: help users do it better, do it for them, or remove the job entirely.",
      "Dismiss the weaker options strategically with scale, behavior change, or cold-start logic.",
      "Say why now immediately after your pick using a technology, competitive, or market trigger with real recency.",
      "Narrate V1 like a product walkthrough: where the user lands, what they see, what they tap, what happens next.",
      "Make V2 a deeper version of the same idea based on what V1 teaches you.",
      "Trace the effects across direct user impact, supply behavior, advertiser impact, and the wider family of apps.",
      "Bridge to revenue through a full chain: feature, behavior shift, metric change, advertiser value, and rough sizing.",
      "End with the riskiest assumptions and how you would validate them."
    ],
    toolkit: [
      toolkitItem("three-levers", "3 levers", "Force three genuinely different solution directions before you pick.", {
        ask: 'Ask: "Do I have one option from each of the three levers?"',
        insight:
          "The artifact’s structure here is deliberate. Lever 1 helps the user do the job better. Lever 2 does the hard part for them. Lever 3 removes the job from the workflow entirely.",
        examples: [
          "Help them do it better → better tools, templates, analytics, or creation aids",
          "Do it for them → AI or automation handles the hard part while the workflow still exists",
          "Eliminate the problem → restructure the product so the painful task largely disappears"
        ],
        frame:
          '"I see three approaches. First, help users do it better. Second, do it for them. Third, remove the task from the workflow. I would choose [pick] because..."'
      }),
      toolkitItem("why-now", "Why now", "Make the timing argument immediately after you choose your direction.", {
        ask: 'Ask: "Why is now the right time for this solution, specifically?"',
        insight:
          "You need a recency-based trigger. The artifact pointed to three categories: technology, competition, and market or behavior change. Each should fail the test: would this have been equally true two years ago?",
        examples: [
          "Technology trigger → a capability like Meta AI has crossed a threshold that makes this feasible now",
          "Competitive trigger → a rival move creates strategic urgency",
          "Market or behavioral trigger → user behavior has shifted enough that the timing is different now"
        ],
        frame:
          '"I would go with [solution]. And the reason now is the right time is [technology, competitive, or market trigger with a real recency hook]."'
      }),
      toolkitItem("concrete-v1", "Concrete V1", "Narrate the first version like a product walkthrough, not a concept slide.", {
        ask: 'Ask: "Where does the user start, what do they see first, what do they tap, and what happens next?"',
        insight:
          "This is where the site was intentionally strict: you only get L6 solution signal if the UX feels real. Name the surface, the entry point, the UI, the action, and the response.",
        examples: [
          "Entry point → where in the app the user finds it",
          "First screen → what the user sees first",
          "Action and response → what they tap and what the system returns"
        ],
        frame:
          "\"For V1, the user opens [surface], sees [entry point], taps [action], and the product responds with [result].\""
      }),
      toolkitItem("v2-learning", "V2 from learning", "V2 should deepen the same idea using what V1 teaches you.", {
        ask: 'Ask: "What does V1 teach us that makes V2 possible?"',
        insight:
          "The artifact explicitly warned against lever-jumping. V2 is not a new idea. It is a smarter or deeper version of the same solution based on data or behavior learned from V1.",
        examples: [
          "V1 reveals which recommendations convert best",
          "V1 shows which creators adopt the flow and where they drop off",
          "V1 surfaces which suggestions actually improve quality"
        ],
        frame:
          '"V1 teaches us [specific learning]. V2 uses that learning to [deeper improvement]."'
      }),
      toolkitItem("ecosystem-trace", "4-level ecosystem trace", "Force the solution through all four levels of consequence.", {
        ask: 'Ask: "What happens directly, what changes for supply, what changes for advertisers, and what changes across the family of apps?"',
        insight:
          "The artifact’s exact warning was that many answers stop too early. You need the direct impact, the supply-side or creator behavior change, the advertiser implication, and then the family-of-apps effect.",
        examples: [
          "Level 1 → direct user impact",
          "Level 2 → creator or supply behavior changes",
          "Level 3 → advertiser categories value the new signal differently",
          "Level 4 → Facebook, Instagram, WhatsApp, or Threads benefit through a named mechanism"
        ],
        frame:
          "\"The direct impact is... This changes creator or supply behavior because... On the advertiser side, this means... Across the Family of Apps...\""
      }),
      toolkitItem("revenue-bridge", "Revenue bridge", "Do not stop at engagement. Walk all the way to advertiser value and rough sizing.", {
        ask: 'Ask: "What is the full chain from feature to revenue?"',
        insight:
          "The artifact wanted a five-link chain: feature, behavior change, engagement metric, advertiser or monetization impact, and rough size. The important move is explaining why value per minute or CPM should improve, not assuming it stays flat.",
        examples: [
          "Feature → behavior change",
          "Behavior change → stronger or higher-intent signal",
          "Signal quality → advertiser demand and pricing power"
        ],
        frame:
          "\"This feature drives [behavior change], which increases [metric]. Because that reveals [intent], [advertiser category] bids more aggressively, which lifts monetization on [surface].\""
      }),
      toolkitItem("assumption-audit", "Assumption audit", "End the solution with the few things that must be true.", {
        ask: 'Ask: "What are the riskiest assumptions behind this working?"',
        insight:
          "The artifact recommended 2-3 assumptions max. Think about adoption, whether the data exists to power the idea, and whether the market is big enough for the investment to matter.",
        examples: [
          "Behavior change assumption → users will actually adopt the flow",
          "Data assumption → Meta has the signal needed to power it well",
          "Scale assumption → the use case is large enough to justify the investment"
        ],
        frame:
          '"The riskiest assumption is [X]. I would validate it by [method]."'
      })
    ],
    say:
      "I see three approaches. I would choose this one because it scales best right now, and the timing works because the market or technology has shifted.",
    avoid: [
      "Thin solution depth with no real walkthrough.",
      "Jumping to a different lever when describing V2.",
      "Revenue language that stops at “same CPM” without explaining why pricing should improve."
    ],
    watch:
      "This was flagged as a major study zone in the artifact: say “why now” early and spend real time narrating the V1 flow.",
    transition: "Now I want to be explicit about the trade-offs I am accepting with that choice."
  },
  {
    id: "tradeoffs",
    step: "06",
    title: "Tradeoffs",
    status: "neutral",
    duration: "3-4 min",
    cumulative: "27 min",
    accent: "#ef6a5b",
    memory: "Name both sides. Choose one. Accept the cost out loud.",
    focus:
      "Show judgment by surfacing a genuine tension, taking a position, and naming what gets worse.",
    mechanics: [
      "Run four tradeoff types: user vs user, short vs long term, business vs user experience, and platform vs ecosystem.",
      "State the tension as X versus Y so the upside and downside are both explicit.",
      "Pick a side directly. If you cannot choose, you have not really articulated the tradeoff yet.",
      "If time remains, add a second strong tradeoff, but do not steal time from metrics."
    ],
    toolkit: [
      toolkitItem("user-vs-user", "User vs user", "Ask who wins and who loses among your users.", {
        ask: 'Ask: "If I do this, which users benefit and which users are disadvantaged?"',
        insight:
          "The artifact treated this as the most common blind spot. A solution often helps one segment while making things worse for another, and naming that clearly shows real product judgment.",
        examples: [
          "Power users gain depth while casual users see more complexity",
          "High-signal creators win while low-effort participants lose reach",
          "Buyers get better structure while community spontaneity gets squeezed"
        ],
        frame:
          '"The key tradeoff is that [user group A] benefits, while [user group B] loses something meaningful. I would still choose [A-side benefit] because..."'
      }),
      toolkitItem("short-vs-long-term", "Short vs long term", "Surface the near-term pain you accept for future value.", {
        ask: 'Ask: "What short-term cost am I taking on for a longer-term gain?"',
        insight:
          "This works well when the solution may create immediate friction, slower growth, or user discomfort in exchange for better long-term quality or defensibility.",
        examples: [
          "Near-term friction for stronger long-term signal quality",
          "Short-term slower adoption for better long-term retention",
          "Upfront ecosystem disruption for a stronger future marketplace"
        ],
        frame:
          '"The tradeoff is short-term [cost] versus long-term [gain]. I would accept the short-term hit because..."'
      }),
      toolkitItem("business-vs-ux", "Business vs UX", "Say where monetization and experience pull in opposite directions.", {
        ask: 'Ask: "Where does the business objective conflict with the cleanest user experience?"',
        insight:
          "This is valuable when a monetization move, ranking decision, or growth tactic would clearly improve business outcomes but make the user experience worse if pushed too hard.",
        examples: [
          "More monetization pressure versus a cleaner surface",
          "Higher ad load versus user trust",
          "Aggressive conversion design versus lower friction participation"
        ],
        frame:
          '"The tradeoff is business value versus user experience. I would accept [cost] because it best fits the strategic goal, but I would watch [guardrail]."'
      }),
      toolkitItem("platform-vs-ecosystem", "Platform vs ecosystem", "Notice when Meta wins by making partners or communities more dependent.", {
        ask: 'Ask: "Am I strengthening Meta by creating a new dependency or displacing a broader ecosystem?"',
        insight:
          "This lens is useful when Meta could pull value in-platform, but doing so changes the role of partners, communities, or external specialists.",
        examples: [
          "A platform-owned transaction layer versus community self-organization",
          "Meta capture of value versus third-party specialist tools",
          "More centralized control versus a looser external ecosystem"
        ],
        frame:
          '"The tradeoff is stronger platform capture versus a healthier broader ecosystem. I would choose [side] because..."'
      })
    ],
    say:
      "The key tradeoff is between two clear outcomes. I would choose one and accept the downside because it best fits the original strategic tension.",
    avoid: [
      "Saying there is no tradeoff or treating the answer like a win-win.",
      "Hiding behind “it depends” without taking a position."
    ],
    watch:
      "The artifact highlighted user-vs-user tradeoffs as the most common blind spot, with resource allocation as the emergency fallback.",
    transition: "So how would we know this is actually working?"
  },
  {
    id: "metrics",
    step: "07",
    title: "Metrics",
    status: "watch",
    duration: "2-3 min",
    cumulative: "30 min",
    accent: "#d29a2d",
    memory: "North star = proof the chosen pain point got better.",
    focus:
      "Land a clean metric stack fast: north star, leading indicators, guardrails, and one accepted counter-metric.",
    mechanics: [
      "Start from the pain point you chose. The north star should measure whether that problem is getting better, not whether the feature was used.",
      "Run the terrible-experience test: if the metric rises while the user still suffers, it is the wrong north star.",
      "Run the gaming test: if low-quality behavior can inflate it, keep looking.",
      "Name leading indicators that happen earlier in the flow, guardrails for what must not break, and one counter-metric you accept because success displaces something else."
    ],
    toolkit: [
      toolkitItem("pain-point-question", "Pain-point question", "Derive the north star from the pain point, not the feature.", {
        ask: 'Ask: "What pain point did I choose in Step 4, and what metric would prove it got better?"',
        insight:
          "The artifact was explicit: the north star should not measure feature adoption. It should measure whether the chosen pain point is actually being resolved for the chosen segment.",
        examples: [
          "Bad → number of AI-assisted Stories created",
          "Better → engagement rate per AI-assisted Story versus the creator's baseline",
          "Bad → number of pet listings created; better → adoption inquiry rate per listing"
        ],
        frame:
          '"My north star is [outcome metric] because it measures whether we actually solved [pain point]."'
      }),
      toolkitItem("terrible-experience-test", "Terrible-experience test", "Pressure-test the metric by asking if it can rise while the user still suffers.", {
        ask: 'Ask: "If this metric goes up but users are still having a terrible experience, would I catch it?"',
        insight:
          "If the answer is no, the metric is too shallow. Total usage, total views, and total volume often fail this test because they can rise without proving quality.",
        examples: [
          "Passes → conversion rate, completion rate, retention, engagement rate per item",
          "Fails → total users, total usage, impressions, raw volume"
        ],
        frame:
          '"If this metric could rise while the experience is still bad, it is not the right north star."'
      }),
      toolkitItem("gaming-test", "Gaming test", "Check whether low-quality behavior can make the metric look good.", {
        ask: 'Ask: "Could someone game this metric without creating real value?"',
        insight:
          "This catches vanity metrics. If a low-quality or spammy behavior can inflate the number, it is not a reliable indicator of user value.",
        examples: [
          "More low-quality listings can inflate listing count without improving outcomes",
          "More views can rise because reach is broad, not because resonance improved",
          "More minutes can grow through passive or background consumption"
        ],
        frame:
          '"I like this metric because it is hard to game without creating real value for the user."'
      }),
      toolkitItem("leading-metrics", "Leading metrics", "Choose earlier indicators that predict the north star is likely to move.", {
        ask: 'Ask: "What happens earlier in the journey that should move before the north star?"',
        insight:
          "Leading indicators should sit upstream. They tell you whether the mechanism is beginning to work before the final outcome has fully materialized.",
        examples: [
          "Tool opens or suggestion accepts before final engagement rate",
          "Completed setup before long-term retention",
          "Qualified inquiries before conversion"
        ],
        frame:
          '"The leading indicators are [metric A] and [metric B] because they happen earlier in the flow and predict the north star should move next."'
      }),
      toolkitItem("guardrails", "Guardrails", "Protect against the damage a successful feature could cause elsewhere.", {
        ask: 'Ask: "What could break if this feature succeeds?"',
        insight:
          "Guardrails are protection metrics. They are not just more engagement numbers. They tell you whether the product is winning in one place by quietly degrading something else.",
        examples: [
          "Organic posting frequency does not collapse",
          "Feed engagement or broader surface health stays stable",
          "Report rate or content quality does not degrade"
        ],
        frame:
          '"My guardrail is [metric], because I do not want success here to damage [surface or behavior]."'
      }),
      toolkitItem("counter-metric", "Counter-metric", "Name what gets worse if the solution works and accept it deliberately.", {
        ask: 'Ask: "What metric might decline because this feature actually succeeds?"',
        insight:
          "This is different from guardrails. A counter-metric is a loss you knowingly accept because the gain is strategically more important.",
        examples: [
          "Time spent on an older surface drops as users shift to the new one",
          "Broader breadth declines while depth improves in a high-value niche",
          "Some low-quality activity falls because the system becomes more selective"
        ],
        frame:
          '"[Metric] may decline because the solution succeeds. I accept that because [strategic reason]."'
      })
    ],
    say:
      "My north star is an outcome metric because it proves the chosen pain point is actually being resolved for this segment.",
    avoid: [
      "Activity metrics like feature usage, listings created, views, or impressions.",
      "Guardrails that are really just more engagement metrics in disguise."
    ],
    watch:
      "The artifact treated this as the highest-risk step: repeated north-star corrections waste time and signal shaky thinking.",
    transition: "To summarize my recommendation..."
  },
  {
    id: "summary",
    step: "08",
    title: "Summary & Closing",
    status: "neutral",
    duration: "5 min buffer",
    cumulative: "35 min",
    accent: "#98a7bc",
    memory: "Segment, pain, solution, V1, V2, tradeoff, metric, risk, question.",
    focus:
      "Deliver a sharp closing recap, name the biggest risk yourself, and finish with a thoughtful question.",
    mechanics: [
      "Use a seven-beat recap: chosen segment, core pain, chosen solution, V1, V2, key tradeoff, and north star.",
      "Keep it to a recap, not a second full pitch.",
      "Name the biggest risk unprompted and explain how you would validate it.",
      "Ask a strategic question about product direction, not a logistics question about the role."
    ],
    toolkit: [
      toolkitItem("seven-beat-recap", "7-beat recap", "Land the answer by replaying the spine, not the details.", {
        ask: 'Ask: "Can I restate the answer in seven beats without re-explaining it?"',
        insight:
          "The artifact’s recap structure is simple: segment, pain, chosen solution, V1, V2, key tradeoff, and north star. The point is clarity and compression, not a second pitch.",
        examples: [
          "Chosen segment and why",
          "Core pain point",
          "Solution, V1, V2, tradeoff, north star"
        ],
        frame:
          '"To pull it together: I focused on [segment] because [reason]. Their core pain point is [X]. I would build [solution]..."'
      }),
      toolkitItem("biggest-risk", "Biggest risk", "Name the hardest assumption yourself before the interviewer does.", {
        ask: 'Ask: "What is the single biggest thing that could make this recommendation fail?"',
        insight:
          "Saying this proactively shows rigor. It also lets you control the framing instead of waiting for the interviewer to find the weakest point for you.",
        examples: [
          "Users may not adopt the new workflow",
          "The signal may not be strong enough to power the experience",
          "The market may be too small for the investment to pay off"
        ],
        frame:
          '"The biggest risk is [assumption]."'
      }),
      toolkitItem("validation-plan", "Validation plan", "Pair the biggest risk with a concrete validation move.", {
        ask: 'Ask: "How would I test the biggest assumption quickly?"',
        insight:
          "The risk statement is much stronger when it comes with a believable validation plan: experiment, prototype, holdout, qualitative work, or a lightweight launch.",
        examples: [
          "Prototype or dogfood the flow",
          "Run a limited launch with a holdout",
          "Use qualitative research to test whether the behavior changes"
        ],
        frame:
          '"I would validate that by [method], because it would tell us whether [assumption] is actually true."'
      }),
      toolkitItem("strategic-question", "Strategic question", "Close with curiosity about product direction, not recruiting logistics.", {
        ask: 'Ask: "What question would show strategic curiosity about the team or product?"',
        insight:
          "The artifact’s examples were about AI strategy, vertical depth vs horizontal breadth, or how the team thinks about balancing competing product bets. The question should feel like an operator talking to another operator.",
        examples: [
          "How does the team think about AI fitting into this surface?",
          "How does the team balance vertical depth versus horizontal breadth here?",
          "What strategic tension does the team feel most strongly in this product area today?"
        ],
        frame:
          '"I would love to ask how the team currently thinks about [strategic product question]."'
      })
    ],
    say:
      "Pull the answer together in under a minute so the interviewer remembers the through-line, not just isolated details.",
    avoid: [
      "Re-explaining the entire solution.",
      "Ending with recruiting logistics instead of product curiosity."
    ],
    watch:
      "If you cannot summarize your own recommendation crisply, the earlier answer probably lacked structure.",
    transition: "Close cleanly and stop. Do not keep talking past the landing."
  }
];

const state = {
  expanded: new Set(["clarify"]),
  toolkitExpanded: new Set(["clarify:goal-question"]),
  selectedId: "clarify",
  navMapOpen: window.matchMedia("(min-width: 1280px)").matches
};

const originalArtifactSectionId = "originalArtifact";
const diagramList = document.querySelector("#diagramList");
const diagramShell = document.querySelector(".diagram-shell");
const focusCard = document.querySelector("#focusCard");
const jumpStrip = document.querySelector("#jumpStrip");
const navigationMap = document.querySelector("#navigationMap");
const navigationMapPanel = document.querySelector("#navigationMapPanel");
const navigationMapToggle = document.querySelector("#navigationMapToggle");
const navigationMapCurrent = document.querySelector("#navigationMapCurrent");

const openAllButton = document.querySelector("#openAllButton");
const collapseAllButton = document.querySelector("#collapseAllButton");
const watchButton = document.querySelector("#watchButton");
const resetButton = document.querySelector("#resetButton");
const wideNavigationQuery = window.matchMedia("(min-width: 1280px)");

let scrollSpyPauseUntil = 0;
let scrollSyncFrame = null;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getStatusLabel(status) {
  if (status === "watch") return "Watch";
  if (status === "neutral") return "Neutral";
  return "Strong";
}

function getStatusClass(status) {
  if (status === "watch") return "status-pill--watch";
  if (status === "neutral") return "status-pill--neutral";
  return "status-pill--strong";
}

function getStep(stepId) {
  return frameworkSteps.find((step) => step.id === stepId);
}

function ensureToolkitOpen(stepId) {
  const step = getStep(stepId);
  if (!step || !step.toolkit.length) return;

  const hasOpenToolkit = step.toolkit.some((item) =>
    state.toolkitExpanded.has(`${step.id}:${item.id}`)
  );

  if (!hasOpenToolkit) {
    state.toolkitExpanded.add(`${step.id}:${step.toolkit[0].id}`);
  }
}

function renderJumpStrip() {
  const stepButtons = frameworkSteps
    .map((step) => {
      const isActive = step.id === state.selectedId;
      return `
        <button
          class="jump-button ${isActive ? "is-active" : ""}"
          type="button"
          data-jump-id="${step.id}"
        >
          ${step.step} ${escapeHtml(step.title)}
        </button>
      `;
    })
    .join("");

  jumpStrip.innerHTML = `${stepButtons}
    <button class="jump-button" type="button" data-jump-target="${originalArtifactSectionId}">
      Original artifact
    </button>
  `;
}

function renderNavigationMap() {
  const currentStep = getStep(state.selectedId) ?? frameworkSteps[0];
  const activeIndex = frameworkSteps.findIndex((step) => step.id === currentStep.id);

  navigationMap.dataset.open = String(state.navMapOpen);
  navigationMapToggle.setAttribute("aria-expanded", String(state.navMapOpen));
  navigationMapCurrent.textContent = `${currentStep.step} ${currentStep.title}`;

  navigationMapPanel.innerHTML = `
    <div class="navigation-map__card">
      <div class="navigation-map__header">
        <div>
          <p class="eyebrow">Navigation Map</p>
          <h2 class="navigation-map__title">Jump anywhere</h2>
          <p class="navigation-map__summary">
            ${activeIndex + 1} of ${frameworkSteps.length} · ${escapeHtml(currentStep.title)}
          </p>
        </div>

        <button class="navigation-map__action navigation-map__action--ghost" type="button" data-map-toggle>
          Hide
        </button>
      </div>

      <div class="navigation-map__list">
        ${frameworkSteps
          .map((step) => {
            const isActive = step.id === state.selectedId;
            return `
              <button
                class="navigation-map__step ${isActive ? "is-active" : ""}"
                type="button"
                data-map-id="${step.id}"
                style="--accent:${step.accent};"
                ${isActive ? 'aria-current="step"' : ""}
              >
                <span class="navigation-map__step-dot" aria-hidden="true"></span>
                <span class="navigation-map__step-copy">
                  <span class="navigation-map__step-meta">${escapeHtml(step.step)} · ${escapeHtml(step.cumulative)}</span>
                  <span class="navigation-map__step-title">${escapeHtml(step.title)}</span>
                </span>
                <span class="navigation-map__step-index" aria-hidden="true">${escapeHtml(step.step)}</span>
              </button>
            `;
          })
          .join("")}
      </div>

      <div class="navigation-map__footer">
        <button
          class="navigation-map__action navigation-map__action--ghost"
          type="button"
          data-map-target="${originalArtifactSectionId}"
        >
          Original artifact
        </button>
        <button class="navigation-map__action" type="button" data-map-top>Back to top</button>
      </div>
    </div>
  `;
}

function renderToolkitExplorer(step, location) {
  return `
    <div class="toolkit-explorer toolkit-explorer--${location}">
      ${step.toolkit
        .map((item) => {
          const toolkitKey = `${step.id}:${item.id}`;
          const isOpen = state.toolkitExpanded.has(toolkitKey);

          return `
            <article class="toolkit-item ${isOpen ? "is-open" : ""}">
              <button
                class="toolkit-item__button"
                type="button"
                data-toolkit-key="${toolkitKey}"
                aria-expanded="${isOpen}"
              >
                <span class="toolkit-item__copy">
                  <span class="toolkit-pill toolkit-pill--interactive">${escapeHtml(item.label)}</span>
                  <span class="toolkit-item__summary">${escapeHtml(item.summary)}</span>
                </span>
                <span class="toolkit-item__caret" aria-hidden="true">⌄</span>
              </button>

              <div class="toolkit-item__panel-shell">
                <div class="toolkit-item__panel">
                  <div class="toolkit-item__panel-inner">
                    <div class="toolkit-detail-grid">
                      <section class="toolkit-detail-card">
                        <h4>Ask</h4>
                        <p>${escapeHtml(item.ask)}</p>
                      </section>

                      <section class="toolkit-detail-card">
                        <h4>Read It As</h4>
                        <p>${escapeHtml(item.insight)}</p>
                      </section>

                      ${
                        item.examples?.length
                          ? `
                            <section class="toolkit-detail-card toolkit-detail-card--wide">
                              <h4>Examples</h4>
                              <ul class="toolkit-example-list">
                                ${item.examples.map((example) => `<li>${escapeHtml(example)}</li>`).join("")}
                              </ul>
                            </section>
                          `
                          : ""
                      }

                      ${
                        item.frame
                          ? `
                            <section class="toolkit-detail-card toolkit-detail-card--wide toolkit-detail-card--frame">
                              <h4>Reusable Frame</h4>
                              <p class="toolkit-frame">${escapeHtml(item.frame)}</p>
                            </section>
                          `
                          : ""
                      }
                    </div>
                  </div>
                </div>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderFocusCard() {
  const step = getStep(state.selectedId) ?? frameworkSteps[0];

  focusCard.innerHTML = `
    <p class="eyebrow">Current Focus</p>
    <div class="focus-step">
      <div>
        <p class="focus-memory">${escapeHtml(step.duration)} · cumulative ${escapeHtml(step.cumulative)}</p>
        <h2 class="focus-title">${escapeHtml(step.title)}</h2>
        <p class="focus-note">${escapeHtml(step.focus)}</p>
      </div>
      <div class="focus-number" style="background:${step.accent};">${escapeHtml(step.step)}</div>
    </div>

    <div class="focus-grid">
      <section class="focus-block">
        <h3>Memory Hook</h3>
        <p>${escapeHtml(step.memory)}</p>
      </section>
      <section class="focus-block">
        <h3>Status</h3>
        <p><span class="status-pill ${getStatusClass(step.status)}">${getStatusLabel(step.status)}</span></p>
      </section>
      <section class="focus-block focus-block--wide">
        <h3>Mechanics</h3>
        <ul>${step.mechanics.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    </div>

    <section class="focus-block focus-block--wide">
      <h3>Toolkit Drilldown</h3>
      ${renderToolkitExplorer(step, "focus")}
    </section>

    <div class="focus-footer">
      <p class="eyebrow">Hand-Off Line</p>
      <p>${escapeHtml(step.transition)}</p>
    </div>
  `;
}

function renderDiagram() {
  diagramList.innerHTML = frameworkSteps
    .map((step) => {
      const isOpen = state.expanded.has(step.id);
      const isSelected = state.selectedId === step.id;

      return `
        <section class="diagram-row" id="${step.id}">
          <div class="node-marker" aria-hidden="true">
            <span class="marker-dot" style="background:${step.accent};"></span>
            <span class="marker-time">${escapeHtml(step.cumulative)}</span>
          </div>
          <div class="node-slot">
            <article
              class="node-card ${isOpen ? "is-open" : ""} ${isSelected ? "is-selected" : ""}"
              style="--accent:${step.accent};"
            >
              <button
                class="node-toggle"
                type="button"
                data-step-id="${step.id}"
                aria-expanded="${isOpen}"
                aria-controls="panel-${step.id}"
              >
                <div class="node-index">${escapeHtml(step.step)}</div>
                <div>
                  <p class="node-meta">
                    <span>${escapeHtml(step.duration)}</span>
                    <span>cumulative ${escapeHtml(step.cumulative)}</span>
                    <span class="status-pill ${getStatusClass(step.status)}">${getStatusLabel(step.status)}</span>
                  </p>
                  <h2 class="node-title">${escapeHtml(step.title)}</h2>
                  <p class="node-memory">${escapeHtml(step.memory)}</p>
                </div>
                <span class="toggle-caret" aria-hidden="true">⌄</span>
              </button>

              <div class="node-body-shell" id="panel-${step.id}">
                <div class="node-body">
                  <div class="node-body-inner">
                    <div class="detail-grid">
                      <section class="detail-card">
                        <h3>Memory Hook</h3>
                        <p>${escapeHtml(step.memory)}</p>
                      </section>

                      <section class="detail-card">
                        <h3>Focus</h3>
                        <p>${escapeHtml(step.focus)}</p>
                      </section>

                      <section class="detail-card detail-card--wide">
                        <h3>Toolkit Drilldown</h3>
                        ${renderToolkitExplorer(step, "detail")}
                      </section>

                      <section class="detail-card detail-card--wide">
                        <h3>Mechanics</h3>
                        <ul>${step.mechanics.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                      </section>

                      <section class="detail-card detail-card--say">
                        <h3>Say It Like This</h3>
                        <p>${escapeHtml(step.say)}</p>
                      </section>

                      <section class="detail-card">
                        <h3>Avoid</h3>
                        <ul>${step.avoid.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
                      </section>

                      <section class="detail-card detail-card--watch detail-card--wide">
                        <h3>Study Watch</h3>
                        <p>${escapeHtml(step.watch)}</p>
                      </section>
                    </div>

                    <div class="handoff">
                      <span class="handoff-label">Hand-off</span>
                      <span>${escapeHtml(step.transition)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      `;
    })
    .join("");
}

function render() {
  renderJumpStrip();
  renderNavigationMap();
  renderFocusCard();
  renderDiagram();
}

function pauseScrollSpy(duration = 900) {
  scrollSpyPauseUntil = Date.now() + duration;
}

function closeNavigationMapOnCompactViewport() {
  if (!wideNavigationQuery.matches) {
    state.navMapOpen = false;
  }
}

function jumpToTarget(targetId, { block = "start", closeMap = true } = {}) {
  if (closeMap) {
    closeNavigationMapOnCompactViewport();
  }

  pauseScrollSpy();

  requestAnimationFrame(() => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block });
  });
}

function jumpToStep(stepId, { block = "center", closeMap = true } = {}) {
  state.selectedId = stepId;
  state.expanded.add(stepId);
  ensureToolkitOpen(stepId);

  if (closeMap) {
    closeNavigationMapOnCompactViewport();
  }

  render();
  pauseScrollSpy();

  requestAnimationFrame(() => {
    document.getElementById(stepId)?.scrollIntoView({ behavior: "smooth", block });
  });
}

function selectStep(stepId) {
  state.selectedId = stepId;
  ensureToolkitOpen(stepId);
  render();
}

function toggleStep(stepId) {
  if (state.expanded.has(stepId)) {
    state.expanded.delete(stepId);
  } else {
    state.expanded.add(stepId);
  }

  state.selectedId = stepId;
  ensureToolkitOpen(stepId);
  render();
}

function toggleToolkit(toolkitKey) {
  if (state.toolkitExpanded.has(toolkitKey)) {
    state.toolkitExpanded.delete(toolkitKey);
  } else {
    state.toolkitExpanded.add(toolkitKey);
  }

  const [stepId] = toolkitKey.split(":");
  state.selectedId = stepId;
  state.expanded.add(stepId);
  render();
}

function openAll() {
  state.expanded = new Set(frameworkSteps.map((step) => step.id));
  render();
}

function collapseAll() {
  state.expanded = new Set();
  render();
}

function reviewWatchPoints() {
  const watchIds = frameworkSteps
    .filter((step) => step.status === "watch")
    .map((step) => step.id);

  state.expanded = new Set(watchIds);
  state.selectedId = watchIds[0] ?? frameworkSteps[0].id;
  ensureToolkitOpen(state.selectedId);
  closeNavigationMapOnCompactViewport();
  render();
  pauseScrollSpy();
  requestAnimationFrame(() => {
    const firstWatch = document.getElementById(state.selectedId);
    firstWatch?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function resetFlow() {
  state.expanded = new Set(["clarify"]);
  state.selectedId = "clarify";
  ensureToolkitOpen("clarify");
  closeNavigationMapOnCompactViewport();
  render();
  pauseScrollSpy();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const mapToggleButton = event.target.closest("[data-map-toggle]");
  if (mapToggleButton) {
    state.navMapOpen = !state.navMapOpen;
    render();
    return;
  }

  const mapTopButton = event.target.closest("[data-map-top]");
  if (mapTopButton) {
    closeNavigationMapOnCompactViewport();
    render();
    pauseScrollSpy();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const mapButton = event.target.closest("[data-map-id]");
  if (mapButton) {
    jumpToStep(mapButton.dataset.mapId, { block: "start" });
    return;
  }

  const mapTargetButton = event.target.closest("[data-map-target]");
  if (mapTargetButton) {
    jumpToTarget(mapTargetButton.dataset.mapTarget);
    return;
  }

  const toolkitButton = event.target.closest("[data-toolkit-key]");
  if (toolkitButton) {
    toggleToolkit(toolkitButton.dataset.toolkitKey);
    return;
  }

  const toggleButton = event.target.closest("[data-step-id]");
  if (toggleButton) {
    toggleStep(toggleButton.dataset.stepId);
    return;
  }

  const jumpButton = event.target.closest("[data-jump-id]");
  if (jumpButton) {
    jumpToStep(jumpButton.dataset.jumpId);
    return;
  }

  const jumpTargetButton = event.target.closest("[data-jump-target]");
  if (jumpTargetButton) {
    jumpToTarget(jumpTargetButton.dataset.jumpTarget);
  }
});

openAllButton.addEventListener("click", openAll);
collapseAllButton.addEventListener("click", collapseAll);
watchButton.addEventListener("click", reviewWatchPoints);
resetButton.addEventListener("click", resetFlow);

document.addEventListener("keydown", (event) => {
  const activeIndex = frameworkSteps.findIndex((step) => step.id === state.selectedId);

  if (event.key === "ArrowDown") {
    event.preventDefault();
    const next = frameworkSteps[(activeIndex + 1) % frameworkSteps.length];
    jumpToStep(next.id);
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    const previous = frameworkSteps[(activeIndex - 1 + frameworkSteps.length) % frameworkSteps.length];
    jumpToStep(previous.id);
  }

  if (event.key === "Enter" || event.key === " ") {
    const tagName = document.activeElement?.tagName;
    if (tagName !== "BUTTON") {
      event.preventDefault();
      toggleStep(state.selectedId);
    }
  }

  if (event.key.toLowerCase() === "a") {
    openAll();
  }

  if (event.key.toLowerCase() === "c") {
    collapseAll();
  }

  if (event.key.toLowerCase() === "w") {
    reviewWatchPoints();
  }

  if (event.key === "Escape" && state.navMapOpen) {
    state.navMapOpen = false;
    render();
  }
});

function syncSelectedFromScroll() {
  if (Date.now() < scrollSpyPauseUntil || !diagramShell) return;

  const rows = [...document.querySelectorAll(".diagram-row")];
  if (!rows.length) return;

  let nextSelectedId = state.selectedId;

  if (window.scrollY < diagramShell.offsetTop - window.innerHeight * 0.4) {
    nextSelectedId = frameworkSteps[0].id;
  } else {
    const anchor = window.innerHeight * 0.3;
    let smallestDistance = Number.POSITIVE_INFINITY;

    rows.forEach((row) => {
      const rect = row.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;

      const distance = Math.abs(rect.top - anchor);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        nextSelectedId = row.id;
      }
    });

    if (smallestDistance === Number.POSITIVE_INFINITY) {
      const lastRow = rows.at(-1);
      if (lastRow?.getBoundingClientRect().top < anchor) {
        nextSelectedId = lastRow.id;
      } else {
        nextSelectedId = rows[0].id;
      }
    }
  }

  if (nextSelectedId !== state.selectedId) {
    state.selectedId = nextSelectedId;
    ensureToolkitOpen(nextSelectedId);
    render();
  }
}

function requestScrollSync() {
  if (scrollSyncFrame) return;

  scrollSyncFrame = requestAnimationFrame(() => {
    scrollSyncFrame = null;
    syncSelectedFromScroll();
  });
}

wideNavigationQuery.addEventListener("change", (event) => {
  state.navMapOpen = event.matches;
  render();
});

window.addEventListener("scroll", requestScrollSync, { passive: true });

ensureToolkitOpen(state.selectedId);
render();
