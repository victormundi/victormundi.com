const Arrow = () => <span aria-hidden="true">↗</span>;

function ProjectMeta({ children }: { children: React.ReactNode }) {
  return <span className="project-meta">{children}</span>;
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
        <img src="/work/hiredata.png" alt="" />
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
        <img src="/work/rafa-icon.png" alt="" />
        <span>
          <strong>Rafa</strong>
          European Spanish
        </span>
      </div>
      <div className="coach-label hans-label">
        <img src="/work/hans-icon.png" alt="" />
        <span>
          <strong>Hans</strong>
          Everyday Dutch
        </span>
      </div>
      <div className="phone phone-rafa">
        <div className="phone-speaker" />
        <img src="/work/rafa-onboarding.png" alt="" />
      </div>
      <div className="phone phone-hans">
        <div className="phone-speaker" />
        <img src="/work/hans-home.png" alt="" />
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
        <img src="/work/first-names-home.png" alt="" />
      </div>
      <div className="browser-window first-names-window first-recall">
        <div className="browser-bar light-bar">
          <span />
          <span />
          <span />
        </div>
        <img src="/work/first-names-recall.png" alt="" />
      </div>
      <div className="first-names-mark">
        <img src="/work/first-names-icon.png" alt="" />
      </div>
      <p className="visual-note">Three names. Once a week.</p>
    </div>
  );
}

function YetVisual() {
  return (
    <div className="project-visual yet-visual" aria-hidden="true">
      <img className="yet-app-icon" src="/work/yet-icon.png" alt="" />
      <div className="yet-phone">
        <div className="yet-topline">
          <strong>yet.</strong>
          <span>Today</span>
        </div>
        <div className="yet-dots">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="yet-evidence">
          <span>LIVE EVIDENCE</span>
          <strong>Your day, as it is.</strong>
          <p>No invented streaks. No noisy dashboard.</p>
        </div>
        <div className="yet-signals">
          <div>
            <span>Nutrition</span>
            <strong>Ready to log</strong>
          </div>
          <div>
            <span>Training</span>
            <strong>Your record</strong>
          </div>
        </div>
        <div className="yet-next">
          <span>ONE NEXT ACTION</span>
          <p>Record what matters in seconds.</p>
          <b>＋</b>
        </div>
        <div className="yet-nav">
          <strong>Today</strong>
          <span>Add</span>
          <span>Progress</span>
        </div>
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
            <img src="/work/eva.png" alt="" />
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

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jeroen Sakkers, home">
          Jeroen Sakkers<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a
            href="https://www.linkedin.com/in/victormundi/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span /> Founder &amp; product builder · Amsterdam
            </p>
            <h1>
              Better systems.
              <em>More human work.</em>
            </h1>
            <p className="hero-intro">
              I&apos;m Jeroen Sakkers. I turn complicated workflows and personal
              rituals into clear, useful products—currently as founder &amp; CEO of
              HireData.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore selected work <span aria-hidden="true">↓</span>
              </a>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/victormundi/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <Arrow />
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="About Jeroen">
            <div className="hero-card-top">
              <span>PROFILE / 2026</span>
              <span className="availability-dot">Amsterdam</span>
            </div>
            <div className="portrait-wrap">
              <img src="/jeroen.png" alt="Jeroen Sakkers" />
              <div className="portrait-stamp">JS</div>
            </div>
            <div className="hero-card-name">
              <div>
                <strong>Jeroen Sakkers</strong>
                <span>Founder · Product · Automation</span>
              </div>
              <span className="card-arrow">↗</span>
            </div>
            <div className="hero-card-current">
              <span>NOW BUILDING</span>
              <p>AI products that give recruitment teams more time for people.</p>
            </div>
          </aside>
        </section>

        <div className="capabilities" aria-label="Areas of focus">
          <span>Product strategy</span>
          <i>•</i>
          <span>AI &amp; automation</span>
          <i>•</i>
          <span>Customer experience</span>
          <i>•</i>
          <span>Founder-led building</span>
        </div>

        <section className="work-section" id="work">
          <div className="section-heading">
            <p className="eyebrow">
              <span /> Selected work · Five products
            </p>
            <h2>
              From recruiting workflows to remembering someone&apos;s name.
            </h2>
            <p>
              Different categories, one thread: make the complicated feel calm,
              useful and distinctly human.
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
                AI operations for recruiting teams. HireData brings automations,
                follow-ups and multichannel communication into the ATS—so people
                can spend less time on admin and more time with candidates and
                clients.
              </p>
              <ul className="project-points">
                <li>AI agents inside existing ATS workflows</li>
                <li>Email, WhatsApp, reminders and updates</li>
                <li>Designed around the work recruiters already do</li>
              </ul>
              <a
                className="project-link"
                href="https://www.hiredata.com/"
                target="_blank"
                rel="noreferrer"
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
                Voice-first language coaching with a personality. Rafa makes
                European Spanish warm and precise; Hans makes everyday Dutch calm,
                direct and useful.
              </p>
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
                Remember the people behind your network. First Names turns your own
                connection lists into a private weekly ritual: three names to
                recall, and one warm reason to reconnect.
              </p>
              <ul className="project-points">
                <li>Active recall instead of passive browsing</li>
                <li>On-device face checks and local storage</li>
                <li>Say hi—or keep warm regards</li>
              </ul>
              <a
                className="project-link"
                href="https://firstnames.victormundi.com/"
                target="_blank"
                rel="noreferrer"
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
                A private record for the whole person. yet. brings food, training,
                body measurements and reflection into one calm iPhone experience,
                with evidence first and one useful next action.
              </p>
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
                An AI operations manager built to do, remember and report. Eva turns
                ongoing work into a visible system of tasks, knowledge, status and
                resource use—with explicit human approval boundaries.
              </p>
              <ul className="project-points">
                <li>Persistent tasks and knowledge</li>
                <li>Status, deployments and audit history</li>
                <li>Proactive work with visible boundaries</li>
              </ul>
              <span className="project-status">Private HireData system</span>
            </div>
            <EvaVisual />
          </article>
        </section>

        <section className="about-section" id="about">
          <div className="about-lead">
            <p className="eyebrow">
              <span /> About
            </p>
            <h2>
              I like products that leave people with more time, more clarity, or a
              better story to tell.
            </h2>
          </div>
          <div className="about-body">
            <p>
              I&apos;m an Amsterdam-based entrepreneur working across product,
              automation, partnerships and customer experience. Since co-founding
              Victor Mundi in 2009, I&apos;ve built B2B products in entrepreneurship
              and recruitment technology—including Ratecard and, today, HireData.
            </p>
            <p>
              The common denominator is simple: improve every day, and build
              technology that creates more room for meaningful human work.
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
          </div>
        </section>

        <section className="contact-section">
          <p className="eyebrow light-eyebrow">
            <span /> Let&apos;s stay in touch
          </p>
          <h2>Always curious about what thoughtful people are building.</h2>
          <div className="contact-links">
            <a
              className="button button-light"
              href="https://www.linkedin.com/in/victormundi/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <Arrow />
            </a>
            <a
              className="contact-text-link"
              href="https://github.com/victormundi"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow />
            </a>
          </div>
          <div className="contact-footer">
            <span>Jeroen Sakkers · Amsterdam</span>
            <span>Improve every day.</span>
          </div>
        </section>
      </main>
    </>
  );
}
