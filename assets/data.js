/* =========================================================
   Navya Juneja · portfolio content, written for Blinkit Program Manager roles
   Every figure carries a provenance label:
   result = achieved · built = working product · modelled = my assumption
   target = success criterion · sourced = external, cited
   Sources for every figure: Navya_Juneja_Resume.pdf, her main portfolio
   (personalportfolio-lilac-tau.vercel.app) and earlier builds of this content.
   Blinkit facts: Blinkit's and Eternal's own public pages, fetched Nov 2026.
   ========================================================= */
window.NJ = {
  person: {
    name: "Navya Juneja",
    role: "Program Manager",
    location: "Gurgaon · open to relocating, Bengaluru included",
    email: "navyajuneja1000@gmail.com",
    phone: "+91 85568 17288",
    phoneHref: "tel:+918556817288",
    linkedin: "https://www.linkedin.com/in/junejanavya/",
    linkedinShort: "linkedin.com/in/junejanavya",
    resume: "Navya_Juneja_Resume.pdf",
    portfolio: "https://personalportfolio-lilac-tau.vercel.app/"
  },

  prov: {
    result:   { label: "Result",   tip: "Achieved" },
    built:    { label: "Built",    tip: "Working product you can open" },
    modelled: { label: "Modelled", tip: "My assumption, stated" },
    target:   { label: "Target",   tip: "Success criterion" },
    sourced:  { label: "Sourced",  tip: "External, cited" }
  },

  /* Aisles = domains. Each case sits in exactly one. */
  domains: [
    { id: "fintech",  name: "Fintech & payments ops",   short: "Fintech ops",      icon: "card",   tint: "#EAF4FF", where: "PhonePe" },
    { id: "edtech",   name: "US career-prep edtech",    short: "Edtech",           icon: "cap",    tint: "#F1ECFF", where: "H2H at Cogent" },
    { id: "d2c",      name: "D2C brand growth",         short: "D2C growth",       icon: "bottle", tint: "#E9F8EE", where: "Perfora" },
    { id: "fmcg",     name: "FMCG category launch",     short: "FMCG launch",      icon: "sachet", tint: "#FFF4D6", where: "WOW! World" },
    { id: "retail",   name: "Retail venture & fulfilment", short: "Retail & P&L",  icon: "bag",    tint: "#FFEDE3", where: "Found It" },
    { id: "research", name: "Consumer research & GTM",  short: "Research & GTM",   icon: "chat",   tint: "#FFEAF0", where: "Prolectro" },
    { id: "opstools", name: "Ops tooling",              short: "Ops tooling",      icon: "clock",  tint: "#E8F6F6", where: "MID Procurement" },
    { id: "revrec",   name: "Revenue recovery for D2C", short: "Revenue recovery", icon: "rupee",  tint: "#EEF3E2", where: "ReconOS" }
  ],

  /* Program skills, used as filters and tags */
  skills: [
    { id: "align",    name: "Stakeholder alignment" },
    { id: "process",  name: "Process redesign" },
    { id: "phased",   name: "Phased rollout" },
    { id: "gating",   name: "Launch gating" },
    { id: "metrics",  name: "Metrics & guardrails" },
    { id: "risk",     name: "Risk planning" },
    { id: "partner",  name: "Partner management" },
    { id: "unit",     name: "Unit economics" }
  ],

  /* ---------------- CASES ("products") ---------------- */
  products: [
    {
      id: "golive", domain: "fintech", skills: ["process", "align", "partner"], where: "PhonePe",
      name: "Merchant go-live: a 10-stage workflow, cut by half",
      short: "MID-to-live go-live",
      eta: "10 stages", status: "Delivered", sort: 1,
      price: { v: "53%", u: "faster go-live, Cards", off: "40% NetBanking", prov: "result" },
      problem: "Many parties, slow handoffs",
      hook: "A merchant could not take a payment until a chain of teams and banks had each done their part. Nobody owned the whole chain.",
      poster: { bg: "#FFF3C4", fg: "#3D2E00", accent: "#0C831F", big: "53%", small: "faster Cards go-live · 40% NetBanking" },
      phonepe: true,
      summary: {
        problem: "Getting a merchant from MID (the bank's merchant ID) to live meant handoffs across several stakeholder teams and acquiring banks. Each handoff added waiting time, and no one could see the whole path.",
        did: "Mapped MID-to-live onboarding as a 10-stage workflow, with every handoff written down, then removed the friction points stage by stage. Defined the requirements for a bulk configuration tool so go-lives no longer had to be done one merchant at a time.",
        landed: "Go-live turnaround cut by 53% for Cards and 40% for NetBanking. 360 merchant go-lives in one upload with the bulk tool."
      },
      pack: [
        ["Stakeholder teams", "Each owned one or more of the 10 stages"],
        ["Acquiring banks", "Issue the MID; their clock runs in parallel"],
        ["Merchants", "Supply the documents that start the chain"],
        ["Tool builders", "Built the bulk configuration tool to my requirements"]
      ],
      track: [
        ["Intake", "Took the complaint at face value: go-live is slow. Asked where the days went."],
        ["Mapped", "10 stages and every handoff between stakeholder teams, on one page."],
        ["Cut", "Removed the friction points stage by stage instead of pushing everyone to go faster."],
        ["Scaled", "Bulk configuration tool: requirements I defined, 360 go-lives in one upload."],
        ["Delivered", "53% faster for Cards, 40% for NetBanking."]
      ],
      metrics: [
        { v: "53%", l: "cut in go-live turnaround, Cards", p: "result" },
        { v: "40%", l: "cut in go-live turnaround, NetBanking", p: "result" },
        { v: "10", l: "stages mapped, MID to live", p: "result" },
        { v: "360", l: "merchant go-lives in one upload", p: "result" }
      ],
      blinkit: "A dark store going live, or a brand getting from Seller Hub sign-up to its first shipment, is the same shape of problem: a fixed sequence of stages, each owned by a different party, with waiting time hiding in the handoffs. The first thing I would do on any launch program is the thing that worked here: draw every stage and handoff on one page before asking anyone to go faster.",
      details: [["Role", "Operations Analyst, Payments · PhonePe"], ["When", "Jun 2023 – Jun 2024 · Bengaluru"], ["Figures", "As stated on my CV. No PhonePe internal data is shown."]],
      sections: []
    },

    {
      id: "migration", domain: "fintech", skills: ["phased", "metrics", "risk"], where: "PhonePe",
      name: "Moving 95% of payment traffic in 3 months, in phases",
      short: "Traffic migration",
      eta: "3 months", status: "Delivered", sort: 4,
      price: { v: "95%", u: "traffic migrated", off: "in 3 months", prov: "result" },
      problem: "A big switch with no room for a dip",
      hook: "Moving live payment traffic between acquiring banks, where every bad step shows up as failed payments for real merchants.",
      poster: { bg: "#E6F6EA", fg: "#0B3D17", accent: "#0C831F", big: "95%", small: "traffic moved in 3 months" },
      phonepe: true,
      summary: {
        problem: "Payment traffic had to move across acquiring-bank partners to make routing scalable. A single cut-over risks merchant success rates; a slow one never finishes.",
        did: "Ran the move as phased routing shifts with live monitoring: shift a tranche, watch success rates, then shift the next.",
        landed: "95% of payment traffic migrated across acquiring-bank partners in three months."
      },
      pack: [
        ["Acquiring-bank partners", "Receiving the traffic, tranche by tranche"],
        ["Merchants", "Whose success rates were the guardrail"],
        ["Monitoring", "Live success-rate checks after every shift"]
      ],
      track: [
        ["Planned", "Split the move into tranches instead of one cut-over date."],
        ["Shifted", "Moved a tranche of traffic to the new routing."],
        ["Watched", "Live monitoring of success rates before the next step."],
        ["Repeated", "Next tranche only once the last one held."],
        ["Delivered", "95% migrated in three months."]
      ],
      metrics: [
        { v: "95%", l: "of payment traffic migrated", p: "result" },
        { v: "3 months", l: "end to end", p: "result" }
      ],
      blinkit: "Most big changes in quick commerce are migrations in disguise: moving a cluster's orders to a new store, switching stores to a new warehouse, changing how riders are assigned. The method carries over unchanged: tranches, a guardrail you watch live, and a rule that the next tranche waits until the last one holds.",
      details: [["Role", "Senior Operations Analyst, Product & Payments · PhonePe"], ["When", "Jul 2024 – Jun 2025 · Bengaluru"], ["Figures", "As stated on my CV. No PhonePe internal data is shown."]],
      sections: []
    },

    {
      id: "launches", domain: "fintech", skills: ["partner", "gating", "align"], where: "PhonePe",
      name: "4 card-network launches and 5+ bank integrations",
      short: "Network launches",
      eta: "4 launches", status: "Delivered", sort: 8,
      price: { v: "4 + 5", u: "launches + integrations", off: "requirements to go-live", prov: "result" },
      problem: "Launches that depend on outside partners",
      hook: "CVV-less payments, PAR API, Visa Direct and MoneySend: each one needed card networks, banks and our own teams to be ready on the same day.",
      poster: { bg: "#EEF2FF", fg: "#1A2363", accent: "#0C831F", big: "4 + 5", small: "network launches · bank & PSP integrations" },
      phonepe: true,
      summary: {
        problem: "A new card capability is only live when the card network, the banks and our own build are all ready. The partner's timeline is not yours to set.",
        did: "Owned requirements, UAT and go-live with partners, and coordinated go-live with the card networks.",
        landed: "4 network launches (CVV-less payments, PAR API, Visa Direct, MoneySend) and 5+ bank and PSP integrations delivered."
      },
      pack: [
        ["Card networks", "Go-live coordinated with each"],
        ["Banks & PSPs", "Integration partners, 5+"],
        ["Testing", "UAT before any go-live"]
      ],
      track: [
        ["Requirements", "Wrote down what each partner needed from us and we needed from them."],
        ["Built", "Integration work against those requirements."],
        ["UAT", "Tested with the partner before anything touched live traffic."],
        ["Go-live", "Coordinated with the card network on the day."],
        ["Delivered", "4 launches, 5+ integrations."]
      ],
      metrics: [
        { v: "4", l: "card-network launches", p: "result" },
        { v: "5+", l: "bank and PSP integrations", p: "result" }
      ],
      blinkit: "Bringing a new brand, 3PL or payment partner onto a platform follows the same three gates: written requirements both sides sign, a UAT the partner takes part in, and a go-live you coordinate rather than announce.",
      details: [["Role", "Operations Analyst → Senior Operations Analyst · PhonePe"], ["When", "Jun 2023 – Jun 2025 · Bengaluru"], ["Launches", "CVV-less payments, PAR API, Visa Direct, MoneySend"], ["Figures", "As stated on my CV. No PhonePe internal data is shown."]],
      sections: []
    },

    {
      id: "leaks", domain: "fintech", skills: ["metrics", "align", "process"], where: "PhonePe",
      name: "Hidden leaks: ₹8 Cr routing saving, ₹15+ Cr recovered",
      short: "Routing & recon",
      eta: "Weekly loop", status: "Delivered", sort: 11,
      price: { v: "₹8 Cr", u: "saved a year", off: "+ ₹15 Cr recovered", prov: "result" },
      problem: "Money that drifts instead of disappearing",
      hook: "No error message fires when the wrong bank gets the traffic or a settlement comes in short. Someone has to go looking.",
      poster: { bg: "#FDE8E8", fg: "#5C0B0B", accent: "#0C831F", big: "₹8 Cr + ₹15 Cr", small: "saved a year · recovered" },
      phonepe: true,
      summary: {
        problem: "For ₹500+ Cr TPV travel merchants (including ixigo and MakeMyTrip), the wrong acquiring-bank allocation cost money and conversions every day, and reconciliation mismatches between what was transacted and what settled went unnoticed.",
        did: "Optimised acquiring-bank allocation and routing across Cards and NetBanking, A/B testing routes with Growth, Engineering, Success and Testing. Informed weekly routing decisions with SQL dashboards of success rates, bank traffic and error codes. Traced reconciliation mismatches and coordinated settlement fixes with Finance.",
        landed: "₹8 Cr saved a year, +4 pp travel payment success, ₹15+ Cr recovered."
      },
      pack: [
        ["Growth", "Route A/B tests"],
        ["Engineering", "Routing changes"],
        ["Success", "Merchant side of every change"],
        ["Testing", "Before routes went live"],
        ["Finance", "Settlement fixes on the recon side"]
      ],
      track: [
        ["Looked", "SQL dashboards: success rates, bank traffic, error codes."],
        ["Tested", "A/B tested routes with Growth, Engineering, Success and Testing."],
        ["Decided", "Weekly routing decisions from the data, not from habit."],
        ["Traced", "Reconciliation mismatches, one by one, with Finance."],
        ["Delivered", "₹8 Cr a year saved, +4 pp success, ₹15+ Cr recovered."]
      ],
      metrics: [
        { v: "₹8 Cr", l: "saved a year from routing", p: "result" },
        { v: "+4 pp", l: "travel payment success", p: "result" },
        { v: "₹15+ Cr", l: "recovered from reconciliation", p: "result" },
        { v: "₹500+ Cr", l: "TPV of the travel merchants I owned", p: "result" }
      ],
      blinkit: "Quick commerce has its own quiet leaks: stock that is on the system but not on the shelf, payouts that do not match orders, an SLA miss that never becomes a complaint. A weekly review against a small set of numbers, with the owners in the room, is how they get found before they become a quarter's loss.",
      details: [["Role", "Senior Operations Analyst, Product & Payments · PhonePe"], ["When", "Jul 2024 – Jun 2025 · Bengaluru"], ["Figures", "As stated on my CV. No PhonePe internal data is shown."]],
      sections: []
    },

    {
      id: "h2h", domain: "edtech", skills: ["align", "metrics", "unit"], where: "Cogent Infotech",
      name: "H2H: 4 teams aligned on one MVP, sign-ups ~65 → ~300",
      short: "H2H at Cogent",
      eta: "2 months", status: "Launched", sort: 3,
      price: { v: "~300", u: "sign-ups in 2 months", strike: "~65", off: "4 teams aligned", prov: "result" },
      problem: "A pivot with four teams pulling four ways",
      hook: "A long-cycle ISA product had to become a different, expert-led program. Marketing, Sales, Delivery and Tech each had a different idea of what that meant.",
      poster: { bg: "#F1ECFF", fg: "#2B1466", accent: "#0C831F", big: "65 → 300", small: "sign-ups in two months" },
      summary: {
        problem: "US job seekers were buying point solutions (CV writers, LinkedIn optimisers, interview coaching) and still not getting callbacks. Cogent's long-cycle ISA product was not the answer, and the pivot needed four teams to agree on what to build first.",
        did: "Drove the pivot to H2H (Human to Human), an expert-led US career-prep program. Ran 60+ customer interviews and benchmarked 15+ competitors to find the unmet need. Defined MVP scope, requirements and customer journeys, and aligned Marketing, Sales, Delivery and Tech on them. Owned GTM planning, success metrics and funnel tracking. Built 3-tier pricing tied to SLAs.",
        landed: "Sign-ups grew from ~65 to ~300 in two months through funnel-led CTAs on websites, campaigns and brochures, including a free résumé audit added to the website flow with Engineering."
      },
      pack: [
        ["Marketing", "Campaigns, CTAs, brochures"],
        ["Sales", "Pricing tiers and the pitch"],
        ["Delivery", "What experts commit to, per SLA"],
        ["Tech / Engineering", "Website flows, the free résumé audit"]
      ],
      track: [
        ["Discovery", "60+ customer interviews, 15+ competitors benchmarked."],
        ["Scope", "MVP scope, requirements and journeys written down."],
        ["Aligned", "Marketing, Sales, Delivery and Tech agreed on one MVP."],
        ["Launched", "Funnel-led CTAs and a free résumé audit in the site flow."],
        ["Tracked", "~65 → ~300 sign-ups in two months."]
      ],
      metrics: [
        { v: "~65 → ~300", l: "sign-ups in two months", p: "result" },
        { v: "60+", l: "customer interviews", p: "result" },
        { v: "15+", l: "competitors benchmarked", p: "result" },
        { v: "4 teams", l: "aligned on MVP scope and launch", p: "result" },
        { v: "$499 / $899 / $1,300", l: "3 tiers, scope tied to SLAs", p: "result" },
        { v: "~$349K", l: "launch target the tiers were built for", p: "target" }
      ],
      blinkit: "Every new program at a company Blinkit's size lands on teams that already have full roadmaps. What got H2H moving was not a bigger plan; it was one written MVP scope that all four teams had signed, and one set of success metrics everyone tracked. That is the first artefact I would produce for any cross-team program.",
      details: [["Role", "Assistant Project Manager, Product Development · Cogent Infotech"], ["When", "Aug 2025 – Jun 2026 · Remote"], ["Domain", "US career-prep, edtech"]],
      sections: [
        { h: "Priced on where the buyer is stuck",
          tiers: [["Interview Accelerator", "$499", "Stuck before the interview"], ["Offer Builder", "$899", "Stuck at conversion"], ["Offer Accelerator", "$1,300", "Stuck at the offer"]],
          p: "Each tier ties service scope to SLAs, so Delivery knew exactly what Sales was promising." }
      ]
    },

    {
      id: "perfora", domain: "d2c", skills: ["gating", "metrics", "unit", "risk"], where: "Masters' Union × Perfora",
      name: "Perfora: a gated plan from ₹3 Cr to ₹6 Cr a month",
      short: "Perfora growth plan",
      eta: "6 months", status: "Pitched to CEO", sort: 7,
      price: { v: "₹6 Cr", u: "monthly revenue target", strike: "₹3 Cr", off: "70% from fixing leaks", prov: "target" },
      problem: "More spend, same revenue",
      hook: "Perfora nearly doubled ad spend and revenue stayed at ~₹3 Cr a month. The plan had to say what to fix, in what order, and what has to be true before the next phase gets money.",
      poster: { bg: "#E9F8EE", fg: "#0B3D17", accent: "#0C831F", big: "₹3 → ₹6 Cr", small: "a month · fix, prove, grow" },
      media: [
        { type: "img", src: "assets/work/perfora-slide-1.jpg", alt: "Slide 1: diagnosis, funnel leaks, ad payback and four root causes" },
        { type: "img", src: "assets/work/perfora-slide-2.jpg", alt: "Slide 2: growth bridge from ₹3 Cr to ₹6 Cr, lever by lever" },
        { type: "img", src: "assets/work/perfora-slide-3.jpg", alt: "Slide 3: six-month roadmap, KPI scorecard and two beta tests" }
      ],
      deck: { u: "assets/decks/Perfora-Growth-Plan-Navya-Juneja.pdf", t: "Perfora growth plan", pages: 3, size: "0.3 MB" },
      summary: {
        problem: "Website revenue stuck at ~₹3 Cr a month while performance spend nearly doubled; conversion at 1.9–2.4% and RTO rising from ~10% to 18%. The brief: one data-backed plan to reach ₹6 Cr in six months while improving profitability.",
        did: "Diagnosed the funnel from the case workbook, built a driver tree to bridge ₹3 Cr to ₹6 Cr lever by lever, designed two randomised beta tests, and laid out a six-month roadmap in three gated phases, each with an owner, leading KPIs and a gate. Pitched it to Perfora's CEO.",
        landed: "A plan where ₹2.1 Cr of the extra ₹3 Cr comes from fixing delivery, checkout, basket size and repeat buying, with ad spend up only 15%. A proposal, pitched to the CEO; not something I executed."
      },
      pack: [
        ["RTO & COD", "COD confirmation, partial COD, pincode gating"],
        ["Checkout", "Mobile checkout completion"],
        ["Basket", "Routine kits and a free-shipping bar"],
        ["Repeat / CRM", "Refill nudges, subscribe-and-save"],
        ["Acquisition", "New spend released in tranches"]
      ],
      track: [
        ["Diagnosed", "The leaks, not the traffic: checkout, doorstep, repeat."],
        ["Fix · months 1–2", "RTO, checkout, two beta tests. Gate: ₹3.5 Cr."],
        ["Prove · months 3–4", "Kits, refill CRM, channel mix. Gate: ₹4.8 Cr."],
        ["Grow · months 5–6", "Gated new spend. Target: ₹6.0 Cr."],
        ["Pitched", "To Perfora's CEO."]
      ],
      metrics: [
        { v: "₹2.1 Cr", l: "of the extra ₹3 Cr from fixing leaks, not new traffic", p: "modelled" },
        { v: "+15%", l: "ad spend needed, vs the ~+100% that bought no growth", p: "target" },
        { v: "3 gates", l: "₹3.5 Cr → ₹4.8 Cr → ₹6.0 Cr, each phase with an owner", p: "target" },
        { v: "₹4.3 Cr", l: "still reached if every lever delivers half its uplift", p: "modelled" }
      ],
      blinkit: "A brand growing on Blinkit, or a new city ramping up, has the same temptation: push more demand into a system that is leaking. The roadmap structure here (fix, prove, grow, with a revenue gate before each phase gets money) is the structure I would use for any growth program where spending early is easy and spending wrong is expensive.",
      details: [["Role", "Built and pitched the plan: diagnosis, driver tree, beta tests, roadmap"], ["Pitched to", "Perfora's CEO · Masters' Union × Perfora challenge"], ["Data", "MU × Perfora case workbook and brief (Sourced); uplifts are my judgement (Modelled)"], ["When", "2026"]],
      sections: [
        { h: "Two beta tests before spending more",
          compare: [["Test 1 · COD confirmation → RTO", "Tier 2/3 shoppers randomised 50/50 at checkout. Roll out if COD RTO ≤ 24% and checkout completion drops < 1 pt; stop if CVR falls > 5%."], ["Test 2 · Past-buyer holdout", "Hold out 50% of past buyers from Meta for four weeks. Keep the spend only if the extra repeat orders beat its cost."]] }
      ]
    },

    {
      id: "wowworld", domain: "fmcg", skills: ["gating", "unit", "risk", "phased"], where: "Masters' Union × WOW! Momo",
      name: "WOW! World: a new FMCG category, piloted in dark stores behind 5 gates",
      short: "WOW! World",
      eta: "6-month pilot", status: "Placed 3rd", sort: 2,
      price: { v: "300", u: "dark stores in the pilot", off: "5 gates to scale", prov: "modelled" },
      problem: "Launching a category without betting the year",
      hook: "WOW! Momo wanted its next packaged-food category. We sized the launch from the bottom up, in quick-commerce dark stores, and wrote down the five numbers that decide whether it scales.",
      cardImg: "assets/work/wow-packshot.jpg",
      poster: { bg: "#FFF4D6", fg: "#3D2E00", accent: "#E31B23", big: "5 gates", small: "300 dark stores · 9 clusters" },
      media: [
        { type: "img", src: "assets/work/wow-pilot.jpg", alt: "Pilot plan slide: ₹31 L in 6 months, ₹5.2 Cr a year at scale" },
        { type: "img", src: "assets/work/wow-unit-economics.jpg", alt: "Unit economics slide: contribution per pack and margin by SKU" },
        { type: "img", src: "assets/work/wow-pricing.jpg", alt: "Pricing slide: a cheap way to try, a better deal to keep cooking" },
        { type: "img", src: "assets/work/wow-market.jpg", alt: "Market size slide: TAM to SAM to SOM" },
        { type: "img", src: "assets/work/wow-shelf.jpg", alt: "Shelf gap slide: the shelf barely goes past Schezwan" },
        { type: "img", src: "assets/work/wow-range.jpg", alt: "Launch range slide: three flavours, six SKUs" }
      ],
      deck: { u: "assets/decks/WOW-World-Pitch-Deck.pdf", t: "WOW! World pitch deck", pages: 19, size: "2.4 MB" },
      summary: {
        problem: "WOW! Momo's packaged-foods business needed its next category, with proof of market gap, brand fit, size, SKUs, pricing and commercial viability.",
        did: "With a five-person Masters' Union team, found the gap through customer interviews and a Reddit test. I owned pricing, unit economics and SOM: the price ladder against the shelf, contribution for every SKU, and a market size built from the pilot up rather than as a share of India.",
        landed: "WOW! World: three global-inspired masalas across six SKUs from ₹10 to ₹99, a ₹54 L gated pilot in nine quick-commerce clusters. Placed 3rd, pitching to WOW! Momo's CEO. A pitch, not a launch."
      },
      pack: [
        ["Team of five", "Research, range, brand, pricing, pilot"],
        ["My part", "Pricing, unit economics, SOM"],
        ["Dark stores", "300 in the pilot, the unit of the launch"],
        ["WOW! outlets", "40 in the pilot, alongside dark stores"]
      ],
      track: [
        ["Gap found", "The shelf barely goes past Schezwan."],
        ["Priced", "₹10 to ₹99, a ladder from trying to keeping."],
        ["Sized", "300 dark stores × 0.8 packs a day × 182 days."],
        ["Gated", "Velocity, taste, trial, repeat, viability decide the ₹29 L scale-up."],
        ["Pitched", "To WOW! Momo's CEO. Placed 3rd."]
      ],
      metrics: [
        { v: "₹31 L", l: "pilot sales in 6 months across 9 clusters", p: "modelled" },
        { v: "300", l: "dark stores at 0.8 packs a day in the pilot", p: "modelled" },
        { v: "5 gates", l: "decide the ₹29 L scale-up", p: "target" },
        { v: "₹54 L", l: "pilot budget, worst case ₹51 L out of pocket", p: "modelled" },
        { v: "42%", l: "contribution on the ₹99 shaker", p: "modelled" },
        { v: "₹5.2 Cr", l: "SOM a year in 3 pilot cities", p: "modelled" }
      ],
      blinkit: "This is the closest case to a Blinkit category launch. The pilot is sized in dark stores, the unit that actually sells, and scale-up money is locked behind five numbers written down before launch. A category program at Blinkit (beauty, toys, a new brand) needs the same thing: the per-store velocity that counts as success, agreed before the first store goes live.",
      details: [["My role", "Pricing, unit economics and SOM"], ["Team", "Saanvi Jindal, Yash Dhariwal, Tarushi Tyagi, Anjali Lodha & Navya Juneja"], ["Pitched to", "WOW! Momo's CEO · placed 3rd"], ["Note", "Pack designs are concept mock-ups made by the team"]],
      sections: [
        { h: "The five gates",
          list: ["Velocity: 0.8 packs per dark store a day", "Taste: 4/5 or better", "Trial: 8% of tasters buy within 7 days", "Repeat: 25% buy again within 60 days", "Viability: 20%+ contribution"] },
        { h: "SOM built from the pilot, not as a share of India",
          steps: [["Pilot · ₹31 L in 6 months", "300 dark stores × 0.8 packs a day × 182 days × ₹66, plus 40 WOW! outlets × 1 pack a day."], ["Year 1 · ₹1.59 Cr", "Pilot plus scale-up in Delhi NCR, Bengaluru and Mumbai."], ["SOM · ₹5.2 Cr a year", "1,500 dark stores × 1.2 a day + 115 outlets × 1.5 + 500 modern-trade stores × 0.4."]] }
      ]
    },

    {
      id: "foundit", domain: "retail", skills: ["metrics", "partner", "unit", "process"], where: "Masters' Union venture",
      name: "Found It: a retail venture run on a weekly P&L",
      short: "Found It",
      eta: "3 months", status: "Real revenue", sort: 6,
      price: { v: "₹6.94 L", u: "revenue in 3 months", off: "10.1% EBT", prov: "result" },
      problem: "Stock, packing, shipping and cash, all at once",
      hook: "Source from Jaipur workshops, sell at Gurugram stalls and to corporate buyers, ship through Shiprocket, and know every week whether it was making money.",
      poster: { bg: "#FFEDE3", fg: "#4A1A00", accent: "#0C831F", big: "₹6.94 L", small: "revenue · 3 months · 10.1% EBT" },
      summary: {
        problem: "Build an ethnic and lifestyle retail venture from nothing with a Masters' Union team and make it pay inside three months.",
        did: "Led sourcing, sales and people management. Ran operations end to end: stock tracking, order packing, Shiprocket fulfilment, cash tracking and a weekly P&L. Opened a B2B corporate gifting channel through cold outreach and sales catalogues.",
        landed: "₹6.94 L revenue in three months at 13.1% gross margin and 10.1% EBT, from real customers. The B2B gifting channel brought in 62% of it."
      },
      pack: [
        ["Jaipur workshops", "Suppliers"],
        ["Masters' Union team", "Co-founders of the venture"],
        ["Shiprocket", "Fulfilment partner"],
        ["Corporate buyers", "B2B gifting, 62% of revenue"],
        ["Stall customers", "B2C in Gurugram"]
      ],
      track: [
        ["Sourced", "Products from Jaipur workshops, landed cost tracked."],
        ["Stocked", "Stock tracking by product."],
        ["Packed & shipped", "Order packing, Shiprocket fulfilment."],
        ["Reviewed", "Weekly P&L and cash tracking."],
        ["Delivered", "₹6.94 L revenue, 10.1% EBT."]
      ],
      metrics: [
        { v: "₹6.94 L", l: "revenue, three months", p: "result" },
        { v: "62%", l: "of revenue from B2B gifting", p: "result" },
        { v: "13.1%", l: "gross margin", p: "result" },
        { v: "10.1%", l: "EBT", p: "result" }
      ],
      blinkit: "A dark store is a small retail business with a P&L: inventory in, orders picked and packed, handed to a rider, losses to watch. Running Found It week to week (what is in stock, what sold, what it cost to ship, what we kept) is the floor-level version of the store and supply programs Blinkit runs at scale.",
      details: [["My role", "Led sourcing, sales and people management"], ["Team", "Co-launched with a Masters' Union team"], ["When & where", "Jul – Sep 2026 · Gurugram"], ["Source of truth", "The weekly P&L workbook"]],
      sections: [
        { h: "Operations I ran",
          list: ["Stock tracking", "Order packing", "Shiprocket fulfilment", "Weekly P&L", "Cash tracking"] },
        { h: "Trade-offs that came up every week",
          compare: [["Variety vs depth", "Many designs spread the risk of a flop; fewer designs in depth earn better workshop rates."], ["Bulk rates vs unsold stock", "A lower unit cost only helps if the stock sells inside three months."]] },
        { h: "What I would build next",
          p: "A product-level P&L that restocks by sales velocity. Ours was weekly and manual: it showed the venture's profit but not which products made it." }
      ]
    },

    {
      id: "prolectro", domain: "research", skills: ["gating", "risk", "unit"], where: "Masters' Union",
      name: "Prolectro: from a 101-person survey to a gated GTM",
      short: "Prolectro",
      eta: "Proposed", status: "Not launched", sort: 10,
      price: { v: "₹129", u: "per sachet", strike: "₹166", off: "vs nearest rival", prov: "target" },
      problem: "Deciding what to launch before building it",
      hook: "41 of 74 people who had tried protein powder had stopped. We designed for them, and wrote the launch gates before any money would be spent.",
      poster: { bg: "#FFEAF0", fg: "#5C0B24", accent: "#0C831F", big: "41 of 74", small: "who tried protein powder had stopped" },
      media: [
        { type: "img", src: "assets/work/prolectro-pack.jpg", alt: "Prolectro Refresh sachet pack" },
        { type: "img", src: "assets/work/prolectro-keyvisual.jpg", alt: "Prolectro campaign key visual" },
        { type: "img", src: "assets/work/prolectro-flavours.jpg", alt: "Six proposed flavours in two families" },
        { type: "video", src: "assets/work/prolectro-teaser.mp4", poster: "assets/work/prolectro-teaser-poster.jpg", alt: "Prolectro campaign teaser" }
      ],
      links: [{ t: "Open the waitlist page", u: "https://partner-project-glow.lovable.app" }],
      summary: {
        problem: "Could a product win back the people who bought protein once and quit?",
        did: "Created the brand; owned positioning, product definition and pricing; ran the 101-person survey the strategy argues from. Team of five.",
        landed: "A go-to-market plan with launch gates and campaign assets. Proposed, never commercially launched."
      },
      pack: [
        ["Team of five", "Masters' Union"],
        ["101 respondents", "Urban survey, 12 questions"],
        ["My part", "Brand, positioning, product, pricing, research"]
      ],
      track: [
        ["Surveyed", "101 urban respondents, September 2026."],
        ["Segmented", "Lapsed Intenders: 23%, highest willingness to pay."],
        ["Defined", "One 36 g clear sachet, ₹129."],
        ["Gated", "Launch gates and a small pilot before anything else is built."],
        ["Status", "Proposed. Not launched."]
      ],
      metrics: [
        { v: "41 of 74", l: "who tried protein powder had stopped", p: "sourced" },
        { v: "23%", l: "are Lapsed Intenders, the chosen customer", p: "sourced" },
        { v: "₹125", l: "their mean willingness to pay, highest of four segments", p: "sourced" },
        { v: "₹129", l: "single-serve price vs ₹166–176 for the nearest rival", p: "target" }
      ],
      blinkit: "Plenty of programs should stop at the plan. 101 respondents is directional, not proof, so the honest next step was a small pilot testing price, retention and channel. Knowing when a program has earned the next rupee, and saying so in writing, matters as much as running the launch.",
      details: [["My role", "Brand, positioning, product definition, pricing, primary research"], ["Team", "Five people · Masters' Union"], ["Research", "101 urban respondents, Sep 2026 (Sourced = survey data)"], ["Status", "Proposed, never commercially launched"]],
      sections: []
    },

    {
      id: "mid", domain: "opstools", skills: ["process", "metrics", "align", "partner"], where: "Independent build",
      name: "MID Procurement: per-party clocks for a four-party process",
      short: "MID Procurement",
      eta: "Live build", status: "Built", sort: 5,
      price: { v: "99.0%", u: "bank replies auto-applied", off: "at 100% precision", prov: "built" },
      problem: "Nobody could say whose time it was",
      hook: "Four parties and six acquirers touch every request. The old tracker could say a request was late, never whose time it had been.",
      poster: { bg: "#E8F6F6", fg: "#0A3B3B", accent: "#0C831F", big: "4 clocks", small: "BD · onboarding · ops · acquirer" },
      media: [
        { type: "img", src: "assets/work/mid-timeline.png", alt: "Per-request timeline with overlapping party clocks" },
        { type: "img", src: "assets/work/mid-scorecard.png", alt: "Acquirer scorecard from the MID procurement dashboard" }
      ],
      links: [
        { t: "Open the live build", u: "https://workflowmidprocurement.vercel.app/" },
        { t: "Read the PRD", u: "https://github.com/navyajuneja1000-droid/MID-Procurement-Workflow/blob/HEAD/PRD.md" }
      ],
      summary: {
        problem: "Every MID application passes between four parties: BD (the merchant relationship and documents), onboarding (the ticket), operations (raises and chases it) and the acquirer (decides). About 1,000 requests a month, three people, one hand-updated spreadsheet, and 30–40% of requests bouncing back for missing data.",
        did: "Built an event-sourced web app that runs a separate clock for each party, reads bank replies out of the inbox, checks intake data before it costs a bank cycle, and reports turnaround per stakeholder team on acquirer SLA dashboards and per-request timelines. Written up as a full PRD.",
        landed: "99.0% of bank replies applied automatically at 100% precision across 1,250 records from 626 bank emails, on a seeded synthetic dataset, not live traffic."
      },
      pack: [
        ["BD", "Owns the merchant and the documents"],
        ["Onboarding", "Owns the ticket"],
        ["Operations", "Raises and chases the request"],
        ["6 acquirers", "Decide, each on its own clock"]
      ],
      track: [
        ["Intake", "Per-acquirer readiness check catches a bounce before it costs a cycle."],
        ["Raised", "Request goes to the bank; the acquirer's clock starts."],
        ["Parsed", "Bank replies read from the inbox and turned into events."],
        ["Timed", "Each party's clock runs separately; overlaps are shown, not summed."],
        ["Reported", "Acquirer SLA dashboards and per-request timelines."]
      ],
      metrics: [
        { v: "99.0%", l: "bank replies applied automatically, at 100% precision", p: "built" },
        { v: "1,250", l: "records from 626 bank emails (synthetic data)", p: "built" },
        { v: "6", l: "acquirers automated", p: "built" },
        { v: "30–40%", l: "of requests bounce for missing data in the process it models", p: "modelled" }
      ],
      blinkit: "Store launches and brand onboarding are four-party processes too: partner, Blinkit teams, landlord or brand, and the systems that make it visible. When a launch slips, the useful question is whose clock it was on. Per-party clocks answer that without a weekly meeting to reconstruct it, and they make an SLA fair because each party is judged on its own time.",
      details: [["My role", "Built end to end: data model, turnaround rules, reply parser, intake checks, dashboard"], ["When", "Sep 2026 – present"], ["Data", "Seeded synthetic dataset: 360 merchants, 1,376 requests, 626 bank emails · acquirer names invented"]],
      sections: [
        { h: "Why there is no share-of-delay pie chart",
          p: "Clocks overlap: ops runs alongside the acquirer, onboarding alongside BD. Per-party days add up to more than elapsed time, so a pie chart would be wrong. The honest picture is a timeline per request." },
        { h: "Judging the bank fairly",
          compare: [["Rejected", "SLA on total time: bills the bank for days the request sat with us."], ["Chosen", "SLA on the slowest single response round: each round is the bank's own time."]] }
      ]
    },

    {
      id: "reconos", domain: "revrec", skills: ["metrics", "process", "unit"], where: "Independent build",
      name: "ReconOS: auditing every courier and gateway charge for D2C brands",
      short: "ReconOS",
      eta: "Live MVP", status: "Built", sort: 9,
      price: { v: "15+", u: "leakage checks", off: "6 gateways · 9 couriers", prov: "built" },
      problem: "Charges nobody checks against the rate card",
      hook: "D2C brands pay a gateway and a courier on every order. Both deduct their own fees and nobody checks either against what was agreed.",
      poster: { bg: "#EEF3E2", fg: "#26330B", accent: "#0C831F", big: "6 + 9", small: "gateways and couriers audited" },
      media: [
        { type: "video", src: "assets/work/reconos-teaser.mp4", poster: "assets/work/reconos-teaser-poster.jpg", alt: "ReconOS, 30-second product teaser" }
      ],
      links: [{ t: "Open reconos.in", u: "https://www.reconos.in" }],
      summary: {
        problem: "A ₹14 overcharge on one shipment is invisible. Across a month of orders it adds up, and the brand's own exports hold the proof if someone reads them against the rate card.",
        did: "Built ReconOS for Indian Shopify D2C brands: drop in last month's exports and rate cards, and every order is traced from sale to partner to bank, with chargeback claim drafts per partner. Designed a freemium model: one free audit, then ₹999 a month.",
        landed: "Live at reconos.in in early access. No customers or recovered amounts yet."
      },
      pack: [
        ["Shopify", "Order source"],
        ["6 payment gateways", "Fees audited against rate cards"],
        ["9 couriers", "Shipping, COD and returns audited"],
        ["The founder", "The buyer: one free audit, then ₹999/month"]
      ],
      track: [
        ["Scoped", "Narrowed the buyer to the D2C founder on Shopify."],
        ["Built", "15+ leakage checks across 6 gateways and 9 couriers."],
        ["Claims", "A claim draft per partner, with the evidence attached."],
        ["Priced", "One free audit, then ₹999 a month."],
        ["Live", "Early access. No customers yet."]
      ],
      metrics: [
        { v: "15+", l: "automated leakage checks", p: "built" },
        { v: "6 + 9", l: "gateways and couriers supported", p: "built" },
        { v: "₹999", l: "a month after one free audit", p: "target" }
      ],
      blinkit: "Seller payouts, 3PL invoices and rider payouts all have the same risk: many small charges, an agreed rate, and nobody reading one against the other. ReconOS is a working example of how I would make that check routine instead of a quarterly clean-up.",
      details: [["My role", "Problem definition, scope, the checks, pricing, the build"], ["When", "Oct 2026 – present"], ["Status", "Live MVP, early access"]],
      sections: []
    }
  ],

  /* ---------------- PLAYBOOK: intake → plan → phase → monitor → close ---------------- */
  playbook: [
    { id: "intake", t: "Intake", q: "What is actually being asked, and what is missing before work starts?",
      did: [
        ["mid", "Per-acquirer intake checks catch a request that would bounce before it costs a bank cycle."],
        ["h2h", "60+ customer interviews and 15+ competitors benchmarked before any scope was written."]
      ] },
    { id: "plan", t: "Plan", q: "Every stage, every owner, every handoff, on one page.",
      did: [
        ["golive", "MID-to-live mapped as a 10-stage workflow with handoffs across stakeholder teams."],
        ["h2h", "One written MVP scope that Marketing, Sales, Delivery and Tech signed."],
        ["wowworld", "Pilot sized bottom-up in dark stores, with five gates written before launch."]
      ] },
    { id: "phase", t: "Phase", q: "Ship in tranches; the next one waits until the last one holds.",
      did: [
        ["migration", "95% of traffic moved in three months through phased routing shifts."],
        ["perfora", "Fix, prove, grow: a revenue gate before each phase gets money."],
        ["launches", "Requirements, UAT, then a coordinated go-live with each card network."]
      ] },
    { id: "monitor", t: "Monitor", q: "A few numbers, a fixed rhythm, owners in the room.",
      did: [
        ["leaks", "Weekly routing decisions from SQL dashboards of success rates, bank traffic and error codes."],
        ["foundit", "Weekly P&L, stock and cash tracking across three months."],
        ["mid", "Per-party clocks and acquirer SLA dashboards instead of one late/not-late flag."]
      ] },
    { id: "close", t: "Close", q: "Make the last step repeatable, and say plainly how it ended.",
      did: [
        ["golive", "The bulk configuration tool turned go-live into one upload for 360 merchants."],
        ["prolectro", "Closed as 'proposed, not launched', with the pilot that should come next."]
      ] }
  ],

  habits: [
    ["The expensive failures are quiet", "I go after problems with no error message: money that drifts, a handoff where a request waits, a launch that slips a day at a time."],
    ["Metrics you can argue with", "I keep rejecting the flattering number for the one that survives scrutiny, like timing each party separately instead of reporting one total."],
    ["Quantify before committing", "Market, funnel, unit economics and the gates get written down before anything is built or launched."],
    ["Deciding what not to build", "Non-goals, phasing and a manual first version. Scope discipline is a deliverable."]
  ],

  /* ---------------- FIRST 90 DAYS (hypotheses from Blinkit's public info) ---------------- */
  facts: [
    { v: "2,700+", l: "stores across 400+ cities", src: "Eternal · Blinkit business page", u: "https://www.eternal.com/our-businesses/blinkit" },
    { v: "37M+", l: "customers use the app monthly", src: "Eternal · Blinkit business page", u: "https://www.eternal.com/our-businesses/blinkit" },
    { v: "600,000+", l: "delivery partners", src: "Eternal · Blinkit business page", u: "https://www.eternal.com/our-businesses/blinkit" },
    { v: "5 steps", l: "partner store program: scouting, setup, readiness, launch, tracking", src: "Blinkit Partners", u: "https://partners.blinkit.com/" },
    { v: "30K+", l: "sellers; first order in as little as 7 days", src: "Blinkit Seller Hub", u: "https://seller.blinkit.com/how-to-sell" },
    { v: "6", l: "newer categories named: beauty, books, electronics, fashion, sports, toys", src: "Eternal · Blinkit business page", u: "https://www.eternal.com/our-businesses/blinkit" }
  ],

  ninety: [
    { phase: "Days 1–30", t: "Learn the launch path before changing it",
      body: "Shadow live store launches and seller onboardings. Draw each one stage by stage with its owner, the way I drew MID-to-live at PhonePe. No proposals yet." },
    { phase: "Days 31–60", t: "One program, one pilot",
      body: "Pick the hypothesis below with the clearest owner and data, run it on a small cohort with a control, and agree the guardrail before it starts." },
    { phase: "Days 61–90", t: "Scale, change or stop, in writing",
      body: "Report against the metric agreed on day 31. If it proved the hypothesis wrong, say so and close it." }
  ],

  pilot: [
    { t: "Store launches slip in the handoffs, not in the work",
      w: "Blinkit's partner program runs a store through five steps (location and scouting, store setup, operational readiness, store launch, performance tracking), with the partner and Blinkit owning different steps (Sourced). At 2,700+ stores (Sourced), a per-party clock on each launch, like the one I built for MID procurement, should show most of the slip sitting between owners rather than inside a step.",
      m: "Share of launch days spent waiting between owners, across a sample of recent launches",
      wrong: "If waiting between owners is a small share of elapsed days, the fix is inside the steps and this hypothesis is wrong.",
      cases: ["mid", "golive"] },
    { t: "Seller onboarding bounces are an intake problem",
      w: "Seller Hub asks for FSSAI, GST, brand details, a UPC per product, images and tax details, and says a seller can ship a first order in as little as 7 days (Sourced). My guess: the sellers who miss that window mostly bounced on a missing field, which an intake check catches up front.",
      m: "Days from sign-up to first shipment · share of listings sent back for missing information",
      wrong: "If few listings are sent back and slow sellers are slow for other reasons (stock, pricing), intake checks will not move the number.",
      cases: ["mid", "launches"] },
    { t: "New categories should earn stores, not get them",
      w: "Blinkit has added beauty, books, electronics, fashion, sports and toys (Sourced). The WOW! World logic: launch a category in a set of stores with per-store velocity, repeat and contribution gates written down first, and release more stores only when the gates hold.",
      m: "Units per store per day and repeat rate in pilot stores vs the gate set before launch",
      wrong: "If early-store velocity does not predict velocity in later stores, gating on pilot stores picks the wrong categories.",
      cases: ["wowworld", "perfora"] },
    { t: "Changes that touch riders go out in tranches",
      w: "600,000+ delivery partners (Sourced) means any change to assignment, payouts or rules lands on a lot of people at once. The PhonePe migration method: shift a tranche, watch a guardrail live, move on only when it holds.",
      m: "Guardrail metric (delivery time, rider complaints or earnings) in each tranche vs a control group",
      wrong: "If tranche results match a single cut-over pilot every time, phasing adds delay without reducing risk.",
      cases: ["migration", "leaks"] }
  ],

  /* ---------------- PLANNER (illustrative, all Modelled) ---------------- */
  planner: {
    note: "Illustrative workstreams and durations I made up to show how I plan. Not Blinkit data. The stage names follow the partner-program steps on partners.blinkit.com.",
    tasks: [
      { id: "site",   n: "Site signed",                  owner: "Partner",           d: 10, deps: [],                       min: 3, max: 30 },
      { id: "fitout", n: "Store fit-out & infrastructure", owner: "Projects",        d: 14, deps: ["site"],                 min: 5, max: 30 },
      { id: "hire",   n: "Staff hired & trained",        owner: "Partner",           d: 12, deps: ["site"],                 min: 4, max: 30 },
      { id: "riders", n: "Rider fleet onboarded",        owner: "Last mile",         d: 8,  deps: ["site"],                 min: 2, max: 25 },
      { id: "stock",  n: "Assortment & first inward",    owner: "Category & supply", d: 6,  deps: ["fitout"],               min: 2, max: 20 },
      { id: "tech",   n: "Systems & app visibility",     owner: "Tech",              d: 4,  deps: ["fitout"],               min: 1, max: 15 },
      { id: "dry",    n: "Dry run: mock orders",         owner: "Store ops",         d: 3,  deps: ["stock", "tech", "hire", "riders"], min: 1, max: 10 }
    ],
    gates: [
      "Stock fill at or above the agreed share of the launch assortment",
      "Every shift staffed, trained on pick and pack",
      "Riders mapped to the store's delivery zone",
      "Dry-run orders picked, packed and handed over inside the target time",
      "Store visible on the app only for its delivery zone"
    ]
  },

  /* ---------------- DELIVERIES = experience ---------------- */
  orders: [
    {
      id: "mu", type: "edu", org: "Masters' Union", logo: "assets/logos/masters-union.svg",
      title: "PGP in Technology & Business Management", when: "2026 – Present", where: "Gurgaon",
      status: "ongoing", statusText: "On the way",
      body: "Co-launched 2 revenue-generating ventures (₹7.3 L combined) and a live AI product.",
      pack: ["Venture teams", "Perfora", "WOW! Momo", "Corporate buyers"],
      track: [["Joined", "2026"], ["Ventures", "Found It and a second venture"], ["Pitches", "Perfora, WOW! Momo"], ["In progress", "Now"]],
      related: ["foundit", "wowworld", "perfora", "prolectro"]
    },
    {
      id: "cogent", type: "work", org: "Cogent Infotech", logo: "assets/logos/cogent.svg",
      title: "Assistant Project Manager, Product Development", when: "Aug 2025 – Jun 2026", where: "Remote",
      status: "delivered", statusText: "Delivered · Jun 2026",
      body: "Drove the pivot from a long-cycle ISA product to H2H, an expert-led US career-prep program. Owned discovery, requirements, pricing and the launch plan.",
      pack: ["Marketing", "Sales", "Delivery", "Tech"],
      bullets: [
        ["~65 → ~300", "sign-ups in two months through funnel-led CTAs"],
        ["4 teams", "Marketing, Sales, Delivery and Tech aligned on MVP scope"],
        ["60+", "customer interviews; 15+ competitors benchmarked"],
        ["3 tiers", "$499 / $899 / $1,300, scope tied to SLAs"]
      ],
      track: [["Joined", "Aug 2025"], ["Discovery", "60+ interviews"], ["Scope aligned", "4 teams"], ["Delivered", "Jun 2026"]],
      related: ["h2h"]
    },
    {
      id: "phonepe-sr", type: "work", org: "PhonePe", logo: "assets/logos/phonepe.svg",
      title: "Senior Operations Analyst, Product & Payments", when: "Jul 2024 – Jun 2025", where: "Bengaluru",
      status: "delivered", statusText: "Delivered · Jun 2025",
      body: "Owned integrations, routing and onboarding for ₹500+ Cr TPV travel merchants, including ixigo and MakeMyTrip.",
      pack: ["Growth", "Engineering", "Success", "Testing", "Finance", "Card networks", "Acquiring banks"],
      bullets: [
        ["95%", "of payment traffic migrated across acquiring banks in 3 months, in phases"],
        ["4 launches", "CVV-less payments, PAR API, Visa Direct and MoneySend"],
        ["₹8 Cr", "saved a year by optimising bank allocation and routing"],
        ["+4 pp", "travel payment success from A/B tested routes"],
        ["₹15+ Cr", "recovered by tracing reconciliation mismatches with Finance"]
      ],
      track: [["Promoted", "Jul 2024"], ["Routing & recon", "₹8 Cr + ₹15+ Cr"], ["Migration", "95% in 3 months"], ["Delivered", "Jun 2025"]],
      related: ["migration", "launches", "leaks"]
    },
    {
      id: "phonepe", type: "work", org: "PhonePe", logo: "assets/logos/phonepe.svg",
      title: "Operations Analyst, Payments", when: "Jun 2023 – Jun 2024", where: "Bengaluru",
      status: "delivered", statusText: "Delivered · Jun 2024",
      body: "Merchant onboarding, bank integrations and the go-live process.",
      pack: ["Onboarding stakeholder teams", "Acquiring banks", "Banks & PSPs"],
      bullets: [
        ["53% / 40%", "cut in go-live turnaround for Cards / NetBanking"],
        ["10 stages", "MID-to-live workflow and handoffs mapped"],
        ["360", "merchant go-lives in one upload via a bulk configuration tool"],
        ["5+", "bank and PSP integrations: requirements, UAT, go-live"]
      ],
      track: [["Joined", "Jun 2023"], ["Mapped", "10 stages"], ["Bulk tool", "360 in one upload"], ["Promoted", "Jul 2024"]],
      related: ["golive", "launches"]
    },
    {
      id: "christ", type: "edu", org: "Christ University", logo: "assets/logos/christ.svg",
      title: "BBA (Hons), Finance · GPA 9.07/10", when: "2020 – 2023", where: "Bengaluru",
      status: "delivered", statusText: "Delivered · 2023",
      body: "Head, Live Illusion Productions (theatre club). Dissertation as sole researcher: UPI adoption in India, 211 users across 7 behavioural constructs; trust and usability came out as the key drivers.",
      pack: ["Theatre club, 30+ members", "Student Council", "HR Club"]
    },
    {
      id: "school", type: "edu", org: "Saint Kabir Public School", logo: "assets/logos/school.svg",
      title: "CBSE Class XII (Commerce) · 94.8%", when: "2018", where: "Chandigarh",
      status: "delivered", statusText: "Delivered · 2018",
      body: "Outclass Team President."
    }
  ],

  offclock: [
    ["30", "interns selected and managed across colleges during an HR internship at Infelearn"],
    ["30+", "member team led as Mime Head, Live Illusion Productions; Operations Head, Pravah (HR Club)"],
    ["15+", "college events coordinated as Student Coordinator"],
    ["1st", "at the Masters' Union Startup Weekend, a D2C pet-care venture against 20+ teams"]
  ],

  certs: [
    ["Project Management", "Google · project scoping, stakeholder alignment, risk planning, Agile delivery"],
    ["Financial Modelling & Valuation", "Udemy · three-statement modelling, DCF, unit economics"]
  ],

  faq: [
    ["Why Program Manager, and why Blinkit?",
     "Every case on this page has the same core: many parties, a date, and a process nobody owned end to end. At PhonePe that was merchant go-live and bank migrations; at Cogent, four teams and one MVP; in my own builds, per-party clocks for a four-party process. Blinkit runs that kind of program constantly: stores going live, sellers onboarding, categories launching, rider programs changing. I want to run those."],
    ["Isn't this mostly payments experience?",
     "Payments was the setting for two years, not the skill. The same work shows up in edtech (H2H), D2C growth (Perfora), an FMCG category launch built on dark stores (WOW! World), a retail venture with a weekly P&L (Found It), consumer research (Prolectro) and ops tooling (MID Procurement, ReconOS)."],
    ["What do the Result / Built / Modelled labels mean?",
     "Every number says where it came from. Result: achieved. Built: a working product you can open. Modelled: my own assumption, stated. Target: a success criterion. Sourced: external data with a link. If a project did not launch, the page says so."],
    ["Is any Blinkit data used here?",
     "No internal data. Blinkit facts (stores, cities, customers, delivery partners, the partner and seller onboarding steps) come from Blinkit's and Eternal's public pages and are labelled Sourced with a link. Everything about what I would do there is a hypothesis to test. The planner's numbers are made up and labelled Modelled."],
    ["Is any PhonePe data reproduced here?",
     "No. Figures are as stated on my CV. Transaction data and internal documents are PhonePe's and are not shown."],
    ["Where are you based?",
     "Gurgaon. Open to relocating, Bengaluru included."]
  ]
};
