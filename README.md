# navya · Program Manager, delivered

Navya Juneja's job-application portfolio for **Program Manager roles at Blinkit**. It uses the colour language and interface patterns of a quick-commerce app (delivery-time header, category grid, product cards with ADD buttons, cart, order tracking), but its content is about programs: every case is a "product", its "pack" lists the teams involved, and experience is shown as "deliveries" tracked stage by stage.

Static site: `index.html` + `assets/app.css` + `assets/app.js` + `assets/data.js`. Vanilla JS, hash routing, no build step. Serve the folder (`python3 -m http.server`) or open `index.html`. All content lives in `assets/data.js`.

## Routes

| Route | What it is |
|---|---|
| `#/` | Home: hero, promo cards, **Shop by domain** (8 domains) and by program skill, a rail of cases, program evidence, how I run a program, planner and 90-day teasers, latest delivery |
| `#/aisles` | All cases, with a left rail of domains and skill filters |
| `#/aisles/<domain>` | One domain, e.g. `#/aisles/fmcg` |
| `#/aisles/skill/<skill>` | One program skill, e.g. `#/aisles/skill/gating` |
| `#/case/<id>` | A case page: key numbers as "units", why it matters at Blinkit, what's in the pack (teams), a stage-by-stage tracker, sections, media, decks and links |
| `#/deliveries` | Experience and education as orders, each with its pack and tracker; certifications |
| `#/playbook` | How I run a program: intake → plan → phase → monitor → close, each step linked to the case it came from, plus four habits |
| `#/planner` | Interactive dark store go-live planner: seven workstreams with owners and dependencies, critical path and slack, what-if delays, per-party clocks, go-live gates. All numbers are made up and labelled Modelled |
| `#/first-90` | First 90 days at Blinkit: sourced public facts with links, a 30/60/90 outline, four hypotheses, each with the metric that would prove it wrong |
| `#/cart` | Shortlist of cases plus a slot picker. "Place order" opens a pre-filled email; nothing is sent automatically |
| `#/placed` | Order-placed confirmation with fallbacks (email, phone, résumé) |
| `#/about` | Profile, contact, certifications, off the clock, FAQ |

Case ids: `golive`, `wowworld`, `h2h`, `migration`, `mid`, `foundit`, `perfora`, `launches`, `reconos`, `prolectro`, `leaks`.

## Provenance labels

Every figure carries one:

- **Result**: achieved
- **Built**: a working product you can open
- **Modelled**: my own assumption, stated
- **Target**: a success criterion
- **Sourced**: external data, cited (Blinkit facts link to the page they came from)

Figures come from the résumé, the main portfolio (personalportfolio-lilac-tau.vercel.app) and earlier builds of the same content. PhonePe figures are as stated on the CV; no PhonePe internal data is shown. Blinkit facts come from eternal.com/our-businesses/blinkit, partners.blinkit.com and seller.blinkit.com/how-to-sell (fetched November 2026). Anything about what I would do at Blinkit is a hypothesis.

Shortlist and form fields are kept in this browser's localStorage only.

## Disclaimer

Independent job-application portfolio. Not affiliated with or endorsed by Blinkit, Eternal, PhonePe, Cogent Infotech, Perfora, WOW! Momo or any company named. The logo mark is an original drawing; no brand logos, wordmarks or artwork are used.
