import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Building2,
  CalendarCheck,
  CircleDollarSign,
  Download,
  Expand,
  Globe2,
  MapPin,
  Megaphone,
  Radio,
  ShieldCheck,
  Sparkles,
  TicketCheck,
  Users,
  WalletCards,
  X,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import heroImage from "@/assets/liivrr-network.jpg";
import logo from "@/assets/liivrr-logo.svg";

const TOTAL_SLIDES = 8;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Liivrr — Business Development, Marketing & Monetization Strategy" },
      {
        name: "description",
        content: "An executive strategy for scaling Liivrr into a global, AI-driven event economy.",
      },
      { property: "og:title", content: "Liivrr — Growth & Monetization Strategy" },
      {
        property: "og:description",
        content:
          "University-led growth, borderless payments, AI eventing, and capital-efficient execution.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Presentation,
});

type StatCardProps = {
  icon: ReactNode;
  label: string;
  title: string;
  copy: string;
  tone?: "primary" | "accent" | "live";
};

function StatCard({ icon, label, title, copy, tone = "primary" }: StatCardProps) {
  return (
    <article className={`strategy-card tone-${tone}`}>
      <div className="card-topline">
        <span className="card-icon">{icon}</span>
        <span className="slide-kicker">{label}</span>
      </div>
      <h3 className="slide-subtitle">{title}</h3>
      <p className="slide-body">{copy}</p>
    </article>
  );
}

function Frame({
  number,
  section,
  children,
  dark = false,
}: {
  number: number;
  section: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      className={`slide-content ${dark ? "slide-dark" : ""}`}
      aria-label={`Slide ${number}: ${section}`}
    >
      <header className="slide-header">
        <img src={logo} alt="LIIVRR" className="slide-logo" />
        <div className="slide-meta">
          <span className="live-dot" /> <span>{section}</span>
          <span className="slide-page">{String(number).padStart(2, "0")} / 08</span>
        </div>
      </header>
      {children}
      <footer className="slide-footer">
        <span>EXECUTIVE STRATEGY • CONFIDENTIAL</span>
        <span>THE CITY. LIVE.</span>
      </footer>
    </section>
  );
}

const slides: Array<() => ReactNode> = [
  () => (
    <Frame number={1} section="THE VISION" dark>
      <img
        src={heroImage}
        width={1536}
        height={1024}
        alt="Connected nightlife venues across a live city map"
        className="hero-image"
      />
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="slide-kicker signal">STRATEGIC EXECUTIVE PROPOSAL</p>
        <h1 className="slide-title-lg">
          TURNING LIVE EVENTS INTO A <span>BORDERLESS ECONOMY</span>
        </h1>
        <p className="slide-body-lg">
          Scale Liivrr from real-time discovery into an AI-agentic, globally monetized event
          ecosystem — financed through non-dilutive infrastructure funding.
        </p>
        <div className="role-lockup">
          <span>EXECUTIVE CANDIDATE</span>
          <strong>COO & HEAD OF BUSINESS DEVELOPMENT</strong>
        </div>
      </div>
    </Frame>
  ),
  () => (
    <Frame number={2} section="MARKET OPPORTUNITY">
      <main className="slide-main">
        <div className="title-row">
          <div>
            <p className="slide-kicker">01 / WHY NOW</p>
            <h2 className="slide-title">THE EVENT STACK IS STILL FRAGMENTED</h2>
          </div>
          <div className="statement">
            One social layer.
            <br />
            <em>Every live moment.</em>
          </div>
        </div>
        <div className="three-grid">
          <StatCard
            icon={<X />}
            label="FRICTION"
            title="Legacy rails"
            copy="High processing costs, regional currency silos, chargebacks, and scalping erode value."
            tone="live"
          />
          <StatCard
            icon={<Radio />}
            label="PRODUCT"
            title="Live social layer"
            copy="Unify discovery, community, content, ticketing, and local commerce around real-time intent."
          />
          <StatCard
            icon={<ShieldCheck />}
            label="LEVERAGE"
            title="Capital efficient"
            copy="Use milestone-based ecosystem grants to validate infrastructure without diluting equity."
            tone="accent"
          />
        </div>
        <div className="flow-line">
          <span>DISCOVER</span>
          <i />
          <span>CONNECT</span>
          <i />
          <span>TRANSACT</span>
          <i />
          <span>RETURN</span>
        </div>
      </main>
    </Frame>
  ),
  () => (
    <Frame number={3} section="GO-TO-MARKET">
      <main className="slide-main split-slide">
        <div>
          <p className="slide-kicker">02 / UNIVERSITY NETWORK FLYWHEEL</p>
          <h2 className="slide-title">
            WIN THE CAMPUS.
            <br />
            <span>OWN THE CITY.</span>
          </h2>
          <p className="slide-body-lg intro-copy">
            Start with dense, trusted communities where event discovery already moves peer to peer.
          </p>
        </div>
        <div className="flywheel">
          <div className="orbit orbit-one">
            <span>
              <Users />
            </span>
            <b>AMBASSADORS</b>
            <small>Student chapters seed supply + trust</small>
          </div>
          <div className="orbit orbit-two">
            <span>
              <TicketCheck />
            </span>
            <b>EXCLUSIVITY</b>
            <small>Ticketing partnerships lock in demand</small>
          </div>
          <div className="orbit orbit-three">
            <span>
              <Megaphone />
            </span>
            <b>AMPLIFICATION</b>
            <small>Creator rewards turn moments into reach</small>
          </div>
          <div className="flywheel-core">
            <strong>DENSITY</strong>
            <small>creates retention</small>
          </div>
        </div>
        <div className="metric-strip">
          <div>
            <b>01</b>
            <span>Campus wedge</span>
          </div>
          <div>
            <b>02</b>
            <span>City cluster</span>
          </div>
          <div>
            <b>03</b>
            <span>Repeatable playbook</span>
          </div>
        </div>
      </main>
    </Frame>
  ),
  () => (
    <Frame number={4} section="PAYMENTS & REWARDS" dark>
      <main className="slide-main">
        <p className="slide-kicker signal">03 / THE GLOBAL SETTLEMENT LAYER</p>
        <h2 className="slide-title">
          ONE WALLET. ANY CITY.
          <br />
          <span>INSTANT VALUE.</span>
        </h2>
        <div className="rail-diagram">
          <div className="rail-node">
            <MapPin />
            <b>CHECK IN</b>
            <span>Verified event presence</span>
          </div>
          <ArrowRight className="rail-arrow" />
          <div className="rail-node featured">
            <CircleDollarSign />
            <b>SETTLE</b>
            <span>USDC-based commerce rails</span>
          </div>
          <ArrowRight className="rail-arrow" />
          <div className="rail-node">
            <Sparkles />
            <b>REWARD</b>
            <span>$LIIVRR utility earned</span>
          </div>
          <ArrowRight className="rail-arrow" />
          <div className="rail-node">
            <WalletCards />
            <b>REDEEM</b>
            <span>Access, perks, testing</span>
          </div>
        </div>
        <div className="two-grid compact">
          <div className="plain-panel">
            <p className="slide-kicker">BORDERLESS SETTLEMENT</p>
            <p className="slide-body-lg">
              A unified payment experience designed to reduce cross-border friction and improve
              merchant settlement.
            </p>
          </div>
          <div className="plain-panel">
            <p className="slide-kicker">PROGRAMMATIC UTILITY</p>
            <p className="slide-body-lg">
              Rewards become usable value across VIP access, local partners, and product
              participation.
            </p>
          </div>
        </div>
      </main>
    </Frame>
  ),
  () => (
    <Frame number={5} section="NON-DILUTIVE FUNDING">
      <main className="slide-main">
        <div className="title-row">
          <div>
            <p className="slide-kicker">04 / CAPITAL ARCHITECTURE</p>
            <h2 className="slide-title">
              FUND THE PROOF.
              <br />
              <span>PROTECT THE CAP TABLE.</span>
            </h2>
          </div>
          <p className="slide-body title-note">
            Stage applications against verifiable product milestones — not speculative promises.
          </p>
        </div>
        <div className="funding-grid">
          <div className="funding-card hero-fund">
            <span>01</span>
            <p className="slide-kicker">CIRCLE DEVELOPER GRANTS</p>
            <strong>
              UP TO
              <br />
              $100K USDC
            </strong>
            <small>Target: settlement layer + wallet architecture</small>
          </div>
          <div className="funding-card">
            <span>02</span>
            <p className="slide-kicker">ARC BUILDERS FUND</p>
            <strong>
              AGENTIC
              <br />
              COMMERCE
            </strong>
            <small>Target: autonomous transaction workflows</small>
          </div>
          <div className="funding-card">
            <span>03</span>
            <p className="slide-kicker">ARC MICROGRANTS</p>
            <strong>
              $500
              <br />
              USDC
            </strong>
            <small>Target: live mainnet proof-of-concept</small>
          </div>
          <div className="funding-card">
            <span>04</span>
            <p className="slide-kicker">CIRCLE CREDITS</p>
            <strong>
              UP TO
              <br />
              $1K
            </strong>
            <small>Target: programmable wallet infrastructure</small>
          </div>
        </div>
        <p className="source-note">
          Proposal targets based on the supplied brief; eligibility, availability, and award amounts
          require program validation.
        </p>
      </main>
    </Frame>
  ),
  () => (
    <Frame number={6} section="AI PRODUCT EVOLUTION" dark>
      <main className="slide-main ai-layout">
        <div>
          <p className="slide-kicker signal">05 / CONVERSATIONAL EVENTING</p>
          <h2 className="slide-title">
            FROM SEARCH BOX
            <br />
            TO <span>PERSONAL AGENT.</span>
          </h2>
          <p className="slide-body-lg intro-copy">
            Intent becomes itinerary, reservation, and payment — in one conversation.
          </p>
        </div>
        <div className="phone-shell">
          <div className="phone-top">
            <img src={logo} alt="LIIVRR" />
            <span>
              <span className="live-dot" /> NOVA ONLINE
            </span>
          </div>
          <div className="chat user">Book a squad table nearby. House music. Under $40 each.</div>
          <div className="chat agent">
            <Bot />
            <p>
              I found 3 live options within 1.2 miles. <strong>Signal Room</strong> fits your group
              and budget.
            </p>
          </div>
          <div className="booking">
            <div>
              <MapPin />
              <span>
                <b>SIGNAL ROOM</b>
                <small>0.8 mi • House • Live now</small>
              </span>
            </div>
            <strong>
              $36<span>/person</span>
            </strong>
          </div>
          <div className="confirm">
            <CalendarCheck /> HOLD TABLE
          </div>
        </div>
        <div className="ai-rail">
          <span>
            <Bot /> PERSONAL CONCIERGE
          </span>
          <span>
            <WalletCards /> CONVERSATIONAL COMMERCE
          </span>
          <span>
            <Building2 /> B2B PREDICTION
          </span>
        </div>
      </main>
    </Frame>
  ),
  () => (
    <Frame number={7} section="MONETIZATION">
      <main className="slide-main">
        <div className="title-row">
          <div>
            <p className="slide-kicker">06 / REVENUE DESIGN</p>
            <h2 className="slide-title">
              MONETIZE THE MOMENT.
              <br />
              <span>NOT THE ATTENTION.</span>
            </h2>
          </div>
          <div className="revenue-badge">
            <CircleDollarSign />
            <b>3</b>
            <span>
              COMPOUNDING
              <br />
              REVENUE LOOPS
            </span>
          </div>
        </div>
        <div className="revenue-stack">
          <div>
            <span className="number">01</span>
            <MapPin />
            <section>
              <p className="slide-kicker">HYPER-LOCAL CONTEXT</p>
              <h3 className="slide-subtitle">Native recommendations</h3>
              <p className="slide-body">
                Rides, restaurants, and offers surfaced only when they improve the night.
              </p>
            </section>
            <em>INTENT</em>
          </div>
          <div>
            <span className="number">02</span>
            <Megaphone />
            <section>
              <p className="slide-kicker">B2B SPONSORSHIP</p>
              <h3 className="slide-subtitle">Boosted discovery</h3>
              <p className="slide-body">
                Sponsored map pins and real-time visibility for venues and curators.
              </p>
            </section>
            <em>REACH</em>
          </div>
          <div>
            <span className="number">03</span>
            <TicketCheck />
            <section>
              <p className="slide-kicker">TRANSACTIONAL TICKETING</p>
              <h3 className="slide-subtitle">Protocol fees</h3>
              <p className="slide-body">
                Platform take-rate across primary distribution and safer secondary resale.
              </p>
            </section>
            <em>VOLUME</em>
          </div>
        </div>
      </main>
    </Frame>
  ),
  () => (
    <Frame number={8} section="45-DAY EXECUTION" dark>
      <main className="slide-main roadmap-slide">
        <p className="slide-kicker signal">07 / OPERATING PLAN</p>
        <h2 className="slide-title">
          PROVE. FUND. <span>SCALE.</span>
        </h2>
        <div className="timeline">
          <div className="phase active">
            <span>DAY 01</span>
            <strong>MAINNET MVP</strong>
            <p>
              Ship lightweight ticketing, validate the core flow, and capture developer feedback.
            </p>
            <b>01–30</b>
          </div>
          <div className="phase">
            <span>DAY 31</span>
            <strong>GRANT SUBMISSION</strong>
            <p>Package working proof with wallet, usage, and transaction milestones.</p>
            <b>31–45</b>
          </div>
          <div className="phase">
            <span>DAY 46+</span>
            <strong>LAUNCH FLYWHEEL</strong>
            <p>Deploy credits and funding into the first collegiate ambassador cluster.</p>
            <b>46+</b>
          </div>
        </div>
        <div className="close-callout">
          <Globe2 />
          <div>
            <p className="slide-kicker">THE OPERATING THESIS</p>
            <p className="slide-body-lg">
              Use infrastructure capital to prove commerce. Use campus density to prove growth. Use
              real-time intent to compound revenue.
            </p>
          </div>
        </div>
      </main>
    </Frame>
  ),
];

function Presentation() {
  const [slide, setSlide] = useState(0);
  const [gridOpen, setGridOpen] = useState(false);
  const [scale, setScale] = useState(0.5);
  const stageRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const go = useCallback((next: number) => {
    const value = Math.max(0, Math.min(TOTAL_SLIDES - 1, next));
    setSlide(value);
    const url = new URL(window.location.href);
    url.searchParams.set("slide", String(value + 1));
    window.history.replaceState({}, "", url);
  }, []);

  useEffect(() => {
    const value = Number(new URLSearchParams(window.location.search).get("slide"));
    if (Number.isFinite(value) && value >= 1 && value <= TOTAL_SLIDES) setSlide(value - 1);
  }, []);

  useEffect(() => {
    document.title = `${slide + 1}/${TOTAL_SLIDES} — Liivrr Strategy`;
    const onKey = (event: KeyboardEvent) => {
      if (["ArrowRight", " ", "PageDown"].includes(event.key)) go(slide + 1);
      if (["ArrowLeft", "PageUp"].includes(event.key)) go(slide - 1);
      if (event.key.toLowerCase() === "g") setGridOpen((value) => !value);
      if (event.key === "Escape") setGridOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, slide]);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const updateScale = () => {
      const { width, height } = stage.getBoundingClientRect();
      setScale(Math.max(0.01, Math.min((width - 24) / 1920, (height - 24) / 1080)));
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  const Slide = slides[slide] ?? slides[0];
  if (!Slide) return null;
  return (
    <div
      className="deck-shell"
      onTouchStart={(event) => {
        startX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (startX.current === null) return;
        const dx = (event.changedTouches[0]?.clientX ?? startX.current) - startX.current;
        if (Math.abs(dx) > 45) go(slide + (dx < 0 ? 1 : -1));
        startX.current = null;
      }}
    >
      <nav className="deck-toolbar" aria-label="Presentation controls">
        <button
          className="brand-button"
          onClick={() => setGridOpen(true)}
          aria-label="Open slide overview"
        >
          <img src={logo} alt="LIIVRR" />
        </button>
        <div className="toolbar-actions">
          <button
            className="icon-button"
            onClick={() => setGridOpen(true)}
            aria-label="Open slide overview"
            title="Slide overview (G)"
          >
            <span className="grid-icon">
              ••
              <br />
              ••
            </span>
          </button>
          <button
            className="icon-button"
            onClick={() => document.documentElement.requestFullscreen?.()}
            aria-label="Enter fullscreen"
            title="Enter fullscreen"
          >
            <Expand />
          </button>
          <a className="download-button" href="/liivrr-strategy-deck.pdf" download>
            <Download /> DOWNLOAD PDF
          </a>
        </div>
      </nav>
      <div className="stage" ref={stageRef}>
        <div
          className="slide-wrapper"
          style={{ "--slide-scale": scale } as CSSProperties}
        >
          <Slide />
        </div>
      </div>
      <div className="deck-nav">
        <button
          className="icon-button"
          onClick={() => go(slide - 1)}
          disabled={slide === 0}
          aria-label="Previous slide"
        >
          <ArrowLeft />
        </button>
        <div className="progress">
          <span style={{ width: `${((slide + 1) / TOTAL_SLIDES) * 100}%` }} />
        </div>
        <span className="counter">{String(slide + 1).padStart(2, "0")} / 08</span>
        <button
          className="icon-button"
          onClick={() => go(slide + 1)}
          disabled={slide === TOTAL_SLIDES - 1}
          aria-label="Next slide"
        >
          <ArrowRight />
        </button>
      </div>
      {gridOpen && (
        <div className="overview" role="dialog" aria-modal="true" aria-label="Slide overview">
          <div className="overview-head">
            <div>
              <p>LIIVRR STRATEGY</p>
              <h2>SLIDE OVERVIEW</h2>
            </div>
            <button
              className="icon-button"
              onClick={() => setGridOpen(false)}
              aria-label="Close overview"
            >
              <X />
            </button>
          </div>
          <div className="overview-grid">
            {slides.map((SlideItem, index) => (
              <button
                key={index}
                className={index === slide ? "selected" : ""}
                onClick={() => {
                  go(index);
                  setGridOpen(false);
                }}
              >
                <div className="thumb">
                  <div className="thumb-scale">
                    <SlideItem />
                  </div>
                </div>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
