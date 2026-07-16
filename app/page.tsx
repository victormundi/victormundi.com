/* eslint-disable @next/next/no-img-element -- Native assets keep the Sites build portable; every image is sized, compressed, and deferred where appropriate. */

const Arrow = () => <span aria-hidden="true">↗</span>;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jeroen Sakkers",
  url: "https://victormundi.com",
  image: "https://victormundi.com/jeroen.png",
  jobTitle: "Founder & CEO of HireData",
  description:
    "Amsterdam entrepreneur building products that learn through use and help people discover and develop their superpower.",
  homeLocation: {
    "@type": "Place",
    name: "Amsterdam, The Netherlands",
  },
  worksFor: {
    "@type": "Organization",
    name: "HireData",
    url: "https://www.hiredata.com/",
  },
  sameAs: [
    "https://www.linkedin.com/in/victormundi/",
    "https://twitter.com/victormundi",
    "https://www.instagram.com/jeroen_sakkers/",
    "https://github.com/victormundi",
  ],
};

function ProjectMeta({ children }: { children: React.ReactNode }) {
  return <span className="project-meta">{children}</span>;
}

function ProjectLoop({ children }: { children: React.ReactNode }) {
  return (
    <p className="project-loop">
      <span>Improvement loop</span>
      <strong>{children}</strong>
    </p>
  );
}

function HireDataVisual() {
  return (
    <div className="project-visual hiredata-visual" aria-hidden="true">
      <div className="visual-glow visual-glow-one" />
      <div className="visual-glow visual-glow-two" />
      <div className="browser-window hiredata-window">
        <div className="browser-bar">
          <span />
          <span />
          <span />
          <div className="browser-address">hiredata.com</div>
        </div>
        <img
          src="/work/hiredata-current.jpg"
          alt=""
          width="1440"
          height="900"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="floating-label floating-label-top">AI + ATS</div>
      <div className="floating-label floating-label-bottom">
        Email · WhatsApp · workflows
      </div>
    </div>
  );
}

function SolVisual() {
  return (
    <div className="project-visual sol-visual" aria-hidden="true">
      <div className="coach-label rafa-label">
        <img
          src="/work/rafa-mark.png"
          alt=""
          width="160"
          height="160"
          loading="lazy"
          decoding="async"
        />
        <span>
          <strong>Rafa</strong>
          European Spanish
        </span>
      </div>
      <div className="coach-label hans-label">
        <img
          src="/work/hans-mark.png"
          alt=""
          width="160"
          height="160"
          loading="lazy"
          decoding="async"
        />
        <span>
          <strong>Hans</strong>
          Everyday Dutch
        </span>
      </div>
      <div className="phone phone-rafa">
        <div className="phone-speaker" />
        <img
          src="/work/rafa-current.jpg"
          alt=""
          width="644"
          height="1400"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="phone phone-hans">
        <div className="phone-speaker" />
        <img
          src="/work/hans-current.jpg"
          alt=""
          width="644"
          height="1400"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

function FirstNamesVisual() {
  return (
    <div className="project-visual first-names-visual" aria-hidden="true">
      <div className="paper-grain" />
      <div className="browser-window first-names-window first-home">
        <div className="browser-bar light-bar">
          <span />
          <span />
          <span />
        </div>
        <img
          src="/work/first-names-home.png"
          alt=""
          width="1440"
          height="1000"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="browser-window first-names-window first-recall">
        <div className="browser-bar light-bar">
          <span />
          <span />
          <span />
        </div>
        <img
          src="/work/first-names-recall.png"
          alt=""
          width="1440"
          height="1000"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="first-names-mark">
        <img
          src="/work/first-names-icon.png"
          alt=""
          width="160"
          height="160"
          loading="lazy"
          decoding="async"
        />
      </div>
      <p className="visual-note">Three names. Once a week.</p>
    </div>
  );
}

function YetVisual() {
  return (
    <div className="project-visual yet-visual" aria-hidden="true">
      <img
        className="yet-app-icon"
        src="/work/yet-mark.png"
        alt=""
        width="160"
        height="160"
        loading="lazy"
        decoding="async"
      />
      <div className="yet-screen yet-screen-add">
        <img
          src="/work/yet-add.jpg"
          alt=""
          width="644"
          height="1393"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="yet-screen yet-screen-today">
        <img
          src="/work/yet-today.jpg"
          alt=""
          width="644"
          height="1393"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="yet-screen yet-screen-gratitude">
        <img
          src="/work/yet-gratitude.jpg"
          alt=""
          width="644"
          height="1393"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="yet-caption">
        <span>Local-first</span>
        <span>Private by design</span>
      </div>
    </div>
  );
}

function EvaVisual() {
  return (
    <div className="project-visual eva-visual" aria-hidden="true">
      <div className="eva-console">
        <div className="eva-sidebar">
          <div className="eva-person">
            <img
              src="/work/eva.png"
              alt=""
              width="160"
              height="160"
              loading="lazy"
              decoding="async"
            />
            <div>
              <strong>Eva</strong>
              <span>AI operations</span>
            </div>
          </div>
          <nav>
            <b>Overview</b>
            <span>Tasks</span>
            <span>Knowledge</span>
            <span>Deployments</span>
            <span>Reports</span>
          </nav>
          <div className="eva-private">Private system</div>
        </div>
        <div className="eva-main">
          <div className="eva-heading">
            <div>
              <span>OPERATIONS OVERVIEW</span>
              <strong>Clear work. Visible progress.</strong>
            </div>
            <b>AI</b>
          </div>
          <div className="eva-grid">
            <div className="eva-panel">
              <span>IN PROGRESS</span>
              <div className="eva-task">
                <i className="teal-dot" />
                <p>
                  <strong>Prepare weekly review</strong>
                  <small>Knowledge and activity linked</small>
                </p>
              </div>
              <div className="eva-task">
                <i className="violet-dot" />
                <p>
                  <strong>Track deployment</strong>
                  <small>Status and audit trail ready</small>
                </p>
              </div>
            </div>
            <div className="eva-panel eva-pulse">
              <span>RESOURCE PULSE</span>
              <div className="pulse-ring">24/7</div>
              <p>Time, cost and work in one view.</p>
            </div>
          </div>
          <div className="eva-activity">
            <span />
            <p>Report prepared with explicit approval boundaries.</p>
          </div>
        </div>
      </div>
      <div className="eva-channels">
        <span>Tasks</span>
        <span>Knowledge</span>
        <span>Status</span>
        <span>Audit trail</span>
      </div>
    </div>
  );
}

function CareerHighlight() {
  return (
    <section className="career-section" aria-labelledby="career-title">
      <div className="career-heading">
        <p className="eyebrow">
          <span /> Career highlight · So far
        </p>
        <h2 id="career-title">
          A conversation on stage with
          <em>then–Prime Minister Mark Rutte.</em>
        </h2>
      </div>

      <div className="career-stage">
        <div className="career-video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/mynvKKeugcs?start=49&amp;rel=0"
            title="Jeroen Sakkers interviews then–Prime Minister Mark Rutte at Dag van de ZZP'er"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="career-video-meta" aria-hidden="true">
            <span>04 April 2015 · The Netherlands</span>
            <span>Interview starts at 00:49</span>
          </div>
        </div>

        <div className="career-story">
          <p>
            At the 2015 Dag van de ZZP&apos;er, a national event for independent
            professionals, I interviewed then–Dutch Prime Minister Mark Rutte about
            entrepreneurship and the role of self-employed people in the Dutch
            economy. The live conversation ran for around half an hour; the public
            recording is an edited excerpt.
          </p>
          <p>
            We built the event into a national meeting place for freelancers and
            independent contractors. In later years, it grew to around 2,000
            attendees who came to learn, connect and celebrate entrepreneurship.
          </p>
          <dl className="career-facts">
            <div>
              <dt>≈30 min</dt>
              <dd>Live conversation on stage</dd>
            </div>
            <div>
              <dt>≈2,000</dt>
              <dd>Attendees as the event grew</dd>
            </div>
            <div>
              <dt>2019</dt>
              <dd>Event portfolio sold</dd>
            </div>
          </dl>
          <p className="career-next-chapter">
            In 2019, my co-founders and I sold Dag van de ZZP&apos;er, the FOTY
            Awards and ZZP Barometer to ZZP Nederland, creating the focus to build
            Ratecard—and, later, HireData.
          </p>
          <a
            className="career-link"
            href="https://www.youtube.com/watch?v=mynvKKeugcs&amp;t=49s"
          >
            Watch the interview on YouTube <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function TransformationStory() {
  return (
    <section className="practice-section" aria-labelledby="practice-title">
      <div className="practice-media">
        <video
          controls
          playsInline
          preload="metadata"
          poster="/story/body-transformation-poster.jpg"
          aria-label="Jeroen Sakkers reflecting on his body transformation and the Improve Every Day mindset"
          aria-describedby="practice-description"
        >
          <source src="/story/body-transformation.mp4" type="video/mp4" />
          Your browser does not support embedded video. You can watch the original
          reel on Instagram instead.
        </video>
        <div className="practice-media-meta" aria-hidden="true">
          <span>01:30</span>
          <span>Original story · November 2025</span>
        </div>
      </div>

      <div className="practice-copy">
        <p className="eyebrow light-eyebrow">
          <span /> Personal practice · Body transformation
        </p>
        <h2 id="practice-title">
          Improve Every Day, <em>in practice.</em>
        </h2>
        <p id="practice-description">
          I documented a year of physical change to understand what consistent
          effort really looks like. It became personal proof that meaningful
          transformation is rarely one dramatic decision; it is small choices,
          repeated long enough to compound.
        </p>
        <p className="practice-note">
          The same principle shapes how I lead and build: stay curious, make
          progress visible, and create the conditions for people to surprise
          themselves.
        </p>
        <a
          className="practice-link"
          href="https://www.instagram.com/reel/DRr097ak3ah/"
        >
          Watch the original reel on Instagram <Arrow />
        </a>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jeroen Sakkers, home">
          Jeroen Sakkers<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#mission">Mission</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a
            href="https://www.linkedin.com/in/victormundi/"
          >
            LinkedIn <Arrow />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-lead">
            <p className="eyebrow">
              <span /> Founder &amp; product builder · Amsterdam
            </p>
            <p className="hero-motto">
              <span>Motto / 01</span>
              <strong>Improve Every Day</strong>
            </p>
            <h1>
              <span>Build. Learn.</span>
              <em>Improve.</em>
            </h1>
          </div>

          <div className="hero-support">
            <p className="hero-intro">
              I&apos;m an Amsterdam entrepreneur and founder of HireData. I build
              products around a simple belief: progress compounds. My mission is to
              help people discover their superpower—and create the systems,
              feedback and space that help them keep improving it.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#mission">
                Start with the mission <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="#projects">
                Explore the projects <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>

          <a
            className="hero-card"
            href="#about"
            aria-label="Read about Jeroen Sakkers"
          >
            <div className="hero-card-top">
              <span>PROFILE / 2026</span>
              <span className="availability-dot">Amsterdam</span>
            </div>
            <div className="portrait-wrap">
              <img
                src="/jeroen.png"
                alt="Jeroen Sakkers"
                width="300"
                height="300"
                decoding="async"
              />
              <div className="portrait-stamp">JS</div>
            </div>
            <div className="hero-card-name">
              <div>
                <strong>Jeroen Sakkers</strong>
                <span>Founder · Product · Automation</span>
                <small>Building products since 2009</small>
              </div>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="hero-card-current">
              <span>NOW BUILDING</span>
              <p>
                Self-improving systems that handle machine work so recruiters can
                focus on judgment, relationships and better matches.
              </p>
            </div>
          </a>
        </section>

        <ul className="capabilities" aria-label="The Improve Every Day loop">
          <li>Listen</li>
          <li>Learn</li>
          <li>Build</li>
          <li>Improve</li>
        </ul>

        <section
          className="mission-section"
          id="mission"
          aria-labelledby="mission-title"
        >
          <div className="mission-lead">
            <p className="eyebrow">
              <span /> Mission · The why
            </p>
            <h2 id="mission-title">
              Helping people discover <em>their superpower.</em>
            </h2>
          </div>
          <div className="mission-body">
            <p className="mission-bridge">
              Improve Every Day is the practice. Helping people discover their
              superpower is the mission.
            </p>
            <p>
              I start by listening, turn friction into feedback, and build systems
              that learn through use. The point is not automation for its own sake.
              It is to make the next decision better than the last—and help people
              spend more time where their strengths compound.
            </p>
            <ul className="mission-signals" aria-label="How the mission becomes work">
              <li>Listen closely</li>
              <li>Make learning visible</li>
              <li>Turn insight into action</li>
              <li>Repeat &amp; improve</li>
            </ul>
          </div>
        </section>

        <section
          className="work-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <p className="eyebrow">
              <span /> Selected projects · 01–05
            </p>
            <h2 id="projects-title">
              Different products. <em>One improvement loop.</em>
            </h2>
            <p>
              Each starts with a real friction point, turns feedback into learning,
              and uses that learning to make the next action clearer.
            </p>
          </div>

          <article className="project-card project-hiredata">
            <div className="project-copy">
              <div className="project-number">01</div>
              <div className="project-tags">
                <ProjectMeta>Live company</ProjectMeta>
                <ProjectMeta>AI · B2B SaaS</ProjectMeta>
              </div>
              <h3>HireData</h3>
              <p className="project-role">Founder &amp; CEO · Product direction</p>
              <p className="project-description">
                HireData makes recruitment systems improve through use—automating
                repetitive work, enriching candidate and role data, and giving
                recruiters more time for judgment, relationships and the
                conversations only humans can have.
              </p>
              <ProjectLoop>Listen → enrich → automate → improve</ProjectLoop>
              <p className="project-proof">
                <span>Current reach</span>
                <strong>5,000+ recruiters · 10M+ tasks automated each year</strong>
              </p>
              <ul className="project-points">
                <li>AI agents inside existing ATS workflows</li>
                <li>Email, WhatsApp, reminders and updates</li>
                <li>AI resourcefulness balanced with clear business logic</li>
              </ul>
              <a
                className="project-link"
                href="https://www.hiredata.com/"
              >
                Visit HireData <Arrow />
              </a>
            </div>
            <HireDataVisual />
          </article>

          <article className="project-card project-sol">
            <div className="project-copy">
              <div className="project-number">02</div>
              <div className="project-tags">
                <ProjectMeta>Private beta</ProjectMeta>
                <ProjectMeta>Voice-first iOS</ProjectMeta>
              </div>
              <h3>Sol — Rafa &amp; Hans</h3>
              <p className="project-role">Product concept · UX · Native iOS</p>
              <p className="project-description">
                A new language matters when it unlocks a real conversation. Rafa and
                Hans are voice-first coaches designed around speaking from the
                start: Rafa brings warmth and precision to European Spanish; Hans
                makes everyday Dutch calm, direct and useful.
              </p>
              <ProjectLoop>Speak → get feedback → adjust → speak again</ProjectLoop>
              <ul className="project-points">
                <li>Speaking before tapping through exercises</li>
                <li>Quick prep for conversations that matter today</li>
                <li>One shared system, two distinct coaches</li>
              </ul>
              <span className="project-status">In private beta</span>
            </div>
            <SolVisual />
          </article>

          <article className="project-card project-first-names">
            <div className="project-copy">
              <div className="project-number">03</div>
              <div className="project-tags">
                <ProjectMeta>Live product</ProjectMeta>
                <ProjectMeta>Local-first web</ProjectMeta>
              </div>
              <h3>First Names</h3>
              <p className="project-role">Product · UX · Web &amp; Chrome</p>
              <p className="project-description">
                Relationships compound when people feel remembered. First Names
                turns a connection list into a private weekly ritual: three names
                to recall and one warm reason to reconnect.
              </p>
              <ProjectLoop>Recall → reconnect → strengthen</ProjectLoop>
              <ul className="project-points">
                <li>Active recall instead of passive browsing</li>
                <li>On-device face checks and local storage</li>
                <li>Say hi—or keep warm regards</li>
              </ul>
              <a
                className="project-link"
                href="https://firstnames.victormundi.com/"
              >
                Try First Names <Arrow />
              </a>
            </div>
            <FirstNamesVisual />
          </article>

          <article className="project-card project-yet">
            <div className="project-copy">
              <div className="project-number">04</div>
              <div className="project-tags">
                <ProjectMeta>Private beta</ProjectMeta>
                <ProjectMeta>Local-first iOS</ProjectMeta>
              </div>
              <h3>yet.</h3>
              <p className="project-role">Product system · UX · Native iOS</p>
              <p className="project-description">
                A private record for a life in progress. yet. brings health,
                training and reflection into one calm iPhone experience, turning
                honest evidence into one useful next action without making growth
                feel judgmental.
              </p>
              <ProjectLoop>Capture → reflect → choose the next step</ProjectLoop>
              <ul className="project-points">
                <li>Today, Add and Progress—nothing more</li>
                <li>Personal data stays local by default</li>
                <li>Coaching appears only when context earns it</li>
              </ul>
              <span className="project-status">In private beta</span>
            </div>
            <YetVisual />
          </article>

          <article className="project-card project-eva">
            <div className="project-copy">
              <div className="project-number">05</div>
              <div className="project-tags">
                <ProjectMeta>Internal tool</ProjectMeta>
                <ProjectMeta>AI operations</ProjectMeta>
              </div>
              <h3>Eva Keller</h3>
              <p className="project-role">AI system · Operations design</p>
              <p className="project-description">
                Complex work moves faster when priorities, context and
                accountability stay visible. Eva turns ongoing work into clear next
                steps and progress updates, while keeping consequential decisions
                with people.
              </p>
              <ProjectLoop>Observe → clarify → act → review</ProjectLoop>
              <ul className="project-points">
                <li>Turns goals into traceable next steps</li>
                <li>Keeps context and progress visible</li>
                <li>Escalates decisions that need a person</li>
              </ul>
              <span className="project-status">Private product system</span>
            </div>
            <EvaVisual />
          </article>
        </section>

        <CareerHighlight />

        <TransformationStory />

        <section className="about-section">
          <div className="about-lead" id="about">
            <p className="eyebrow">
              <span /> About
            </p>
            <h2>
              Entrepreneurship is how I put the mission to work.
            </h2>
          </div>
          <div className="about-body">
            <p>
              I co-founded Victor Mundi in 2009 and have spent the years since
              turning real operational problems into products. That path led from
              Ratecard and Dag van de ZZP&apos;er to HireData, where I now lead product
              direction and company building.
            </p>
            <p>
              The common thread is curiosity: ask better questions, listen, build a
              simple first version, learn from real use and improve it. I value
              growth, trust, honesty, reliability and partnerships built for the
              long term.
            </p>
            <dl className="about-facts">
              <div>
                <dt>Current</dt>
                <dd>Founder &amp; CEO, HireData</dd>
              </div>
              <div>
                <dt>Earlier</dt>
                <dd>Ratecard · Victor Mundi</dd>
              </div>
              <div>
                <dt>Studied</dt>
                <dd>Entrepreneurship &amp; Marketing · UvA</dd>
              </div>
              <div>
                <dt>Based</dt>
                <dd>Amsterdam, The Netherlands</dd>
              </div>
            </dl>
            <div className="work-principles">
              <h3>How I work</h3>
              <ul>
                <li>
                  <strong>Listen first</strong>
                  <span>Good questions reveal what people actually need.</span>
                </li>
                <li>
                  <strong>Keep it simple</strong>
                  <span>
                    Automate repeatable work so attention stays on decisions and
                    people.
                  </span>
                </li>
                <li>
                  <strong>Build to endure</strong>
                  <span>
                    Reliable systems should scale without depending on heroics.
                  </span>
                </li>
                <li>
                  <strong>Grow together</strong>
                  <span>
                    Trust, honesty and shared progress make strong partnerships.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <p className="eyebrow light-eyebrow">
            <span /> Open invitation
          </p>
          <h2>Could we build something better together?</h2>
          <p className="contact-copy">
            I enjoy working with thoughtful people who care about customers, craft
            and measurable progress. If you see a way to collaborate—or want to
            help build HireData—send me a message. I&apos;ll get back to you as soon
            as I can.
          </p>
          <div className="contact-links">
            <a
              className="button button-light"
              href="https://www.linkedin.com/in/victormundi/"
            >
              Message me on LinkedIn <Arrow />
            </a>
            <a
              className="contact-text-link"
              href="https://twitter.com/victormundi"
            >
              Twitter / @victormundi <Arrow />
            </a>
            <a
              className="contact-text-link"
              href="https://www.instagram.com/jeroen_sakkers/"
            >
              Instagram / @jeroen_sakkers <Arrow />
            </a>
            <a className="contact-text-link" href="https://github.com/victormundi">
              GitHub <Arrow />
            </a>
          </div>
          <footer className="contact-footer">
            <span>Jeroen Sakkers · Amsterdam</span>
            <span>Improve Every Day.</span>
          </footer>
        </section>
      </main>
    </>
  );
}
