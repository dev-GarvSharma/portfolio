import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { projects } from "./data/projects";
import { capabilities, services, metrics } from "./data/content";

const email = "garvsharma.env@gmail.com";
const resumePath = "/projects/Gaurav_Resume_Full_stack.pdf";
const A = ({ href, children, className = "", ...props }) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);
function ThemeToggle({ dark, setDark }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => setDark(!dark)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span aria-hidden="true">{dark ? "☼" : "☾"}</span>
    </button>
  );
}
function Nav({ dark, setDark }) {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(scrollY > 32);
    f();
    addEventListener("scroll", f);
    return () => removeEventListener("scroll", f);
  }, []);
  const links = ["Work", "About", "Capabilities", "Stack", "Contact"];
  return (
    <>
      <header className={"nav " + (scrolled ? "nav-scrolled" : "")}>
        <A href="#top" className="brand">
          <b>GS</b>
          <span>GAURAV SHARMA</span>
        </A>
        <nav>
          {links.map((x) => (
            <A key={x} href={"#" + x.toLowerCase()}>
              {x}
            </A>
          ))}
        </nav>
        <ThemeToggle dark={dark} setDark={setDark} />
        <button
          className="menu"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              ×
            </button>
            <div>
              {links.map((x, i) => (
                <A
                  key={x}
                  onClick={() => setOpen(false)}
                  href={"#" + x.toLowerCase()}
                  style={{ "--i": i }}
                >
                  {x}
                </A>
              ))}
            </div>
            <p>
              <i /> OPEN TO THE RIGHT PROJECT
            </p>
            <A href={"mailto:" + email}>{email}</A>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">FULL-STACK DEVELOPER / DELHI NCR · NOIDA</p>
        <h1>
          Building digital products
          <br />
          with a <em>soft spot</em> for
          <br />
          hard problems.
        </h1>
        <p className="intro">
          I work across interfaces, APIs, databases and mobile experiences to
          turn complex product ideas into reliable things people can use. I’m
          available for web, mobile and software projects in Delhi
          NCR, Noida and remotely.
        </p>
        <div className="actions">
          <A className="button" href="#work">
            Explore selected work <b>↘</b>
          </A>
          <A className="text-link" href="#contact">
            Start a conversation <b>↗</b>
          </A>
        </div>
        <A href={resumePath} className="resume" target="_blank" rel="noreferrer">
          Download resume ↓
        </A>
      </div>
      <motion.div
        className="hero-system"
        animate={reduce ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="scribble">from idea → production</span>
        <div className="browser">
          <div className="chrome">
            <i />
            <i />
            <i />
            <span>Ecommerce / collection</span>
          </div>
          <div className="shop-ui">
            <aside>
              DISCOVER
              <br />
              <br />
              TEA
              <br />
              COFFEE
              <br />
              GIFTS
            </aside>
            <main>
              <small>THE DAILY RITUAL</small>
              <h3>
                Slow mornings,
                <br />
                good systems.
              </h3>
              <div className="product-row">
                <b>
                  01
                  <br />
                  <small>Roast No. 4</small>
                </b>
                <b>
                  02
                  <br />
                  <small>Jasmine green</small>
                </b>
              </div>
            </main>
          </div>
        </div>
        <div className="phone">
          <div className="notch" />
          <small>Wedding Asia</small>
          <h4>
            Find your
            <br />
            people.
          </h4>
          <div className="phone-card">
            Photography
            <br />
            <b>⌖ Delhi</b>
          </div>
          <div className="phone-card light">1,200+ vendors</div>
        </div>
        <div className="system-note">
          <small>CURRENT MODE</small>
          <p>
            Frontend <b>React</b>
            <br />
            Backend <b>Node.js</b>
            <br />
            Database <b>MySQL</b>
            <br />
            Mobile <b>React Native</b>
            <br />
            Deploy <b>Docker</b>
          </p>
          <i /> SYSTEMS ONLINE
        </div>
        <span className="tag tag-one">BUILD / SHIP / IMPROVE</span>
        <span className="tag tag-two">REACT · NODE · API · DATA</span>
      </motion.div>
      <div className="scroll-cue">
        SCROLL TO EXPLORE <span />
      </div>
    </section>
  );
}
function Intro() {
  return (
    <>
      <section className="approach">
        <p className="vertical">01 / APPROACH</p>
        <div>
          <h2>
            I like the space between
            <br />a good idea and a <em>working product.</em>
          </h2>
          <p>
            I move between product thinking and implementation — shaping
            interfaces, designing APIs, modeling data, integrating services and
            making sure the final experience feels simple even when the system
            behind it is not.
          </p>
          <div className="idea-line">
            <span>Idea</span>
            <b>→</b>
            <span>Flow</span>
            <b>→</b>
            <span>System</span>
            <b>→</b>
            <span>Product</span>
          </div>
          <i className="note">clarity is a feature</i>
        </div>
      </section>
      <section id="capabilities" className="capabilities">
        <p className="eyebrow">WHAT I BRING TO THE TABLE</p>
        {capabilities.map((c) => (
          <article key={c[0]} tabIndex="0">
            <span>{c[0]}</span>
            <h3>{c[1]}</h3>
            <b>↗</b>
            <div>
              <p>{c[2]}</p>
              <small>{c[3]}</small>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
function ProjectVisual({ theme, image, title }) {
  return (
    <div className={"project-visual " + theme}>
      {image ? (
        <img
          className="project-image"
          src={image}
          alt={`${title} project screenshot`}
          loading="lazy"
        />
      ) : (
        <>
          <div className="visual-bar">
            <i />
            <i />
            <i />
            <span>product workspace</span>
          </div>
          <div className="visual-content">
            <aside>
              <b>Overview</b>
              <b>People</b>
              <b>Activity</b>
            </aside>
            <main>
              <span>WORKSPACE / 2026</span>
              <h4>
                Everything,
                <br />
                in its place.
              </h4>
              <div className="mini-grid">
                <i />
                <i />
                <i />
              </div>
            </main>
          </div>
        </>
      )}
    </div>
  );
}
function Work() {
  const [filter, setFilter] = useState("all");
  const list =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);
  return (
    <section id="work" className="work">
      <div className="section-head">
        <p className="eyebrow">02 / SELECTED WORK</p>
        <h2>
          Things I've helped
          <br />
          <em>bring to life.</em>
        </h2>
        <p>
          Real products, real systems and the details that make them useful.
        </p>
      </div>
      <div className="filters" role="group" aria-label="Filter projects">
        {[
          ["all", "ALL"],
          ["web", "WEB"],
          ["mobile", "MOBILE"],
          ["saas", "SAAS"],
        ].map(([v, l]) => (
          <button
            className={filter === v ? "active" : ""}
            onClick={() => setFilter(v)}
            key={v}
          >
            {l}
          </button>
        ))}
      </div>
      <div className="project-list">
        {list.map((p, i) => (
          <motion.article
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            className={"project " + p.theme}
            key={p.id}
          >
            <div className="project-meta">
              <span className="project-no">{p.id}</span>
              <p className="eyebrow">{p.category}</p>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <i>{p.annotation}</i>
              <div className="project-more">
                <strong>{p.highlight}</strong>
                <small>{p.technologies.join(" · ")}</small>
              </div>
              <A
                target="_blank"
                rel="noreferrer"
                href={p.url}
                aria-label={"Visit " + p.title}
              >
                View project ↗
              </A>
              {p.secondaryUrl && (
                <A target="_blank" rel="noreferrer" href={p.secondaryUrl}>
                  Google Play ↗
                </A>
              )}
            </div>
            <ProjectVisual theme={p.theme} image={p.image} title={p.title} />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
function MobileApps() {
  return (
    <section className="mobile-apps">
      <p className="eyebrow">MOBILE PRODUCTS / 04</p>
      <h2>
        Some products
        <br />
        live in <em>your pocket.</em>
      </h2>
      <p>Web is only one surface. The product continues on mobile.</p>
      <div className="phones">
        <div className="app-label">
          WEDDING ASIA WORLD <span>React Native · Firebase</span>
        </div>
        <div className="big-phone rose">
          <img
            src="/projects/weddingasiaapp.webp"
            alt="Wedding Asia World mobile app screenshot"
            loading="lazy"
          />
        </div>
        <div className="big-phone coffee">
          <img
            src="/projects/cuppanordapp.webp"
            alt="Ecommerce for Coffee & Tea mobile app screenshot"
            loading="lazy"
          />
        </div>
        <div className="app-label second">
          ECOMMERCE FOR COFFEE & TEA <span>React Native · API</span>
        </div>
      </div>
    </section>
  );
}
function Platforms() {
  return (
    <section className="platforms">
      <div className="section-head">
        <p className="eyebrow">03 / FLEXIBLE PLATFORMS</p>
        <h2>
          Not every good product
          <br />
          needs the <em>same stack.</em>
        </h2>
        <p>
          Sometimes the right solution is a custom application. Sometimes it is
          a focused commerce platform.
        </p>
      </div>
      <div className="platform-grid">
        {[
          [
            "WORDPRESS",
            "CMS / CONTENT / PERFORMANCE",
            "Custom WordPress websites, content platforms and performance-focused CMS experiences.",
          ],
          [
            "SHOPIFY",
            "STOREFRONT / LIQUID / COMMERCE",
            "Modern Shopify storefronts designed around conversion and maintainability.",
          ],
        ].map((x) => (
          <article key={x[0]}>
            <small>{x[1]}</small>
            <h3>{x[0]}</h3>
            <div className="platform-orbit">✦</div>
            <p>{x[2]}</p>
          </article>
        ))}
      </div>
      <A href="#contact" className="button">
        Discuss a CMS or commerce project <b>↘</b>
      </A>
    </section>
  );
}
function ServicesStack() {
  let stack = [
    "React.js",
    "JavaScript",
    "Tailwind",
    "Vite",
    "Node.js",
    "Express",
    "REST APIs",
    "React Native",
    "Expo",
    "WordPress",
    "Shopify",
    "Liquid",
    "MySQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Sentry",
    "Stripe",
    "Firebase",
    "OpenAI APIs",
  ];
  return (
    <>
      <section className="services">
        <div className="section-head">
          <p className="eyebrow">SERVICES</p>
          <h2>
            What I can help
            <br />
            <em>make real.</em>
          </h2>
        </div>
        {services.map((x) => (
          <article key={x[0]}>
            <span>{x[0]}</span>
            <h3>{x[1]}</h3>
            <p>{x[2]}</p>
            <small>{x[3]}</small>
            <b>↗</b>
          </article>
        ))}
      </section>
      <section id="stack" className="stack">
        <p className="eyebrow">THE TOOLS BEHIND THE CALM SURFACE</p>
        <h2>
          The tools behind
          <br />
          <em>the calm surface.</em>
        </h2>
        <div>
          {stack.map((x, i) => (
            <span key={x} style={{ "--r": (i % 5) * 7 + "px" }}>
              {x}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
function ProcessExperience() {
  let steps = [
    "Understand",
    "Architect",
    "Build",
    "Integrate",
    "Test",
    "Ship",
    "Monitor",
  ];
  return (
    <>
      <section className="process">
        <div>
          <p className="eyebrow">ENGINEERING PROCESS</p>
          <h2>
            How I <em>build.</em>
          </h2>
        </div>
        <ol>
          {steps.map((x, i) => (
            <li key={x}>
              <span>0{i + 1}</span>
              <h3>{x}</h3>
              <p>
                {
                  [
                    "Translate business requirements into clear product flows.",
                    "Design APIs, data structures and scalable architecture.",
                    "Create maintainable interfaces and reusable components.",
                    "Connect payments, authentication and external services.",
                    "Validate behavior, edge cases and responsive experiences.",
                    "Deploy reliable production builds.",
                    "Track errors, crashes and performance.",
                  ][i]
                }
              </p>
            </li>
          ))}
        </ol>
      </section>
      <section className="experience">
        <p className="eyebrow">04 / EXPERIENCE</p>
        <h2>
          Where the work
          <br />
          <em>gets real.</em>
        </h2>
        <article>
          <span>NOW</span>
          <div>
            <h3>Software Engineer</h3>
            <p>
              Building scalable React applications and Node.js APIs across web,
              mobile, e-commerce and business platforms.
            </p>
            <small>React · Vite · Node · MySQL · MongoDB · Sentry</small>
          </div>
        </article>
      </section>
    </>
  );
}
function AboutContact() {
  return (
    <>
      <section id="about" className="about">
        <p className="eyebrow">05 / ABOUT</p>
        <h2>
          Engineer by mindset.
          <br />
          <em>Builder by nature.</em>
        </h2>
        <div>
          <p>
            I'm a full-stack software engineer who enjoys turning complex
            requirements into simple, reliable products. My work spans frontend
            architecture, backend APIs, databases, mobile applications,
            e-commerce, SaaS platforms and third-party integrations.
          </p>
          <p>
            I care about clean code, useful interfaces, scalable systems and
            products that remain maintainable after launch.
          </p>
          <i>make it useful</i>
        </div>
      </section>
      <section className="impact">
        <p className="eyebrow">SELECTED IMPACT</p>
        <div>
          {metrics.map((m) => (
            <article key={m[1]}>
              <strong>{m[0]}</strong>
              <span>{m[1]}</span>
              <small>{m[2]}</small>
            </article>
          ))}
        </div>
      </section>
      <section id="contact" className="contact">
        <p className="eyebrow">LET'S MAKE SOMETHING USEFUL</p>
        <h2>
          Have something worth
          <br />
          <em>building?</em>
        </h2>
        <p>Let's turn the idea into something people can actually use.</p>
        <p>Available for web, mobile and software projects in Delhi NCR, Noida and remotely.</p>
        <A href={"mailto:" + email} className="contact-button">
          Start a conversation →
        </A>
        <div className="contact-links">
          <A href={"mailto:" + email}>{email}</A>
          <A href="tel:+919012803123">+91-9012803123</A>
          <A
            className="whatsapp-link"
            href="https://wa.me/919012803123"
            target="_blank"
            rel="noreferrer"
            aria-label="Send Gaurav a WhatsApp message"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M27.2 4.7A15.5 15.5 0 0 0 2.8 23.4L1 31l7.8-1.7A15.5 15.5 0 1 0 27.2 4.7Zm-11.1 24a12.8 12.8 0 0 1-6.5-1.8l-.5-.3-4.6 1 1-4.5-.3-.5A12.8 12.8 0 1 1 16 28.7Zm7-9.6c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2s-1 1.3-1.2 1.6c-.2.3-.4.3-.8.1a10.4 10.4 0 0 1-3.1-1.9 11.8 11.8 0 0 1-2.2-2.8c-.2-.4 0-.6.1-.8l.6-.7.3-.6c.1-.2 0-.5-.1-.7l-1.3-3c-.3-.7-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.5 0 2 1.5 4 1.7 4.3.2.3 2.9 4.4 7 6.2 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.6.2.8-.1 2.3-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.3-.3-.7-.5Z" />
            </svg>
            WhatsApp
          </A>
          <A href={resumePath} target="_blank" rel="noreferrer">
            Download resume ↓
          </A>
        </div>
        <small>
          <i /> OPEN TO THE RIGHT PROJECT
        </small>
      </section>
      <footer>
        <A href="#top">
          <b>GS</b> GAURAV SHARMA
        </A>
        <span>React · Node · Mobile · APIs · WordPress · Shopify</span>
        <A href="#top">Back to top ↑</A>
        <small>
          © 2026 Gaurav Sharma — Built with curiosity and a reasonable amount of
          coffee.
        </small>
      </footer>
    </>
  );
}
export default function App() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  return (
    <>
      <Nav dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Intro />
        <Work />
        <MobileApps />
        <Platforms />
        <ServicesStack />
        <ProcessExperience />
        <AboutContact />
      </main>
    </>
  );
}
