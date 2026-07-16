/* eslint-disable @next/next/no-img-element -- Native assets keep the Sites build portable; every image is sized, compressed, and deferred where appropriate. */

const Arrow = () => <span aria-hidden="true">↗</span>;

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://victormundi.com/#website",
      url: "https://victormundi.com/",
      name: "Jeroen Sakkers",
      description:
        "The portfolio of Jeroen Sakkers, founder of HireData and an Amsterdam entrepreneur guided by Improve Every Day.",
      inLanguage: "en",
      publisher: { "@id": "https://victormundi.com/#jeroen-sakkers" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://victormundi.com/#profile",
      url: "https://victormundi.com/",
      name: "Jeroen Sakkers — Founder of HireData",
      dateCreated: "2026-07-15",
      dateModified: "2026-07-16",
      inLanguage: "en",
      isPartOf: { "@id": "https://victormundi.com/#website" },
      mainEntity: { "@id": "https://victormundi.com/#jeroen-sakkers" },
      hasPart: [
        { "@id": "https://victormundi.com/#bnr-zzp-cafe" },
        { "@id": "https://victormundi.com/#portfolio-exit-2019" },
        { "@id": "https://victormundi.com/#mark-rutte-interview" },
        { "@id": "https://victormundi.com/#body-transformation-video" },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://victormundi.com/#jeroen-sakkers",
      name: "Jeroen Sakkers",
      givenName: "Jeroen",
      familyName: "Sakkers",
      alternateName: "@victormundi",
      identifier: "@victormundi",
      url: "https://victormundi.com/",
      mainEntityOfPage: { "@id": "https://victormundi.com/#profile" },
      image: {
        "@type": "ImageObject",
        url: "https://victormundi.com/jeroen.png",
        contentUrl: "https://victormundi.com/jeroen.png",
        caption: "Jeroen Sakkers",
      },
      jobTitle: "Founder & CEO of HireData",
      description:
        "Amsterdam entrepreneur and founder of HireData who builds products around the principle Improve Every Day and the mission of helping people discover their superpower.",
      homeLocation: {
        "@type": "Place",
        name: "Amsterdam, The Netherlands",
      },
      worksFor: { "@id": "https://victormundi.com/#hiredata" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Amsterdam",
        url: "https://www.uva.nl/",
      },
      knowsAbout: [
        "Entrepreneurship",
        "Artificial intelligence",
        "Automation",
        "Recruitment technology",
        "B2B SaaS",
        "User experience",
      ],
      sameAs: [
        "https://www.linkedin.com/in/victormundi/",
        "https://twitter.com/victormundi",
        "https://www.instagram.com/jeroen_sakkers/",
        "https://github.com/victormundi",
      ],
      subjectOf: [
        { "@id": "https://victormundi.com/#bnr-zzp-cafe" },
        { "@id": "https://victormundi.com/#portfolio-exit-2019" },
        { "@id": "https://victormundi.com/#mark-rutte-interview" },
        { "@id": "https://victormundi.com/#body-transformation-video" },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://victormundi.com/#hiredata",
      name: "HireData",
      url: "https://www.hiredata.com/",
      description:
        "HireData helps staffing and recruiting companies upgrade their ATS with AI agents and automations.",
      founder: { "@id": "https://victormundi.com/#jeroen-sakkers" },
    },
    {
      "@type": "RadioSeries",
      "@id": "https://victormundi.com/#bnr-zzp-cafe",
      name: "BNR ZZP Café",
      url: "https://www.bnr.nl/podcast/zzp-cafe",
      datePublished: "2014-09-20",
      inLanguage: "nl-NL",
      description:
        "A weekly BNR Nieuwsradio programme about independent entrepreneurship, co-hosted at launch by Diana Matroos and Jeroen Sakkers.",
      publisher: {
        "@type": "Organization",
        name: "BNR Nieuwsradio",
        url: "https://www.bnr.nl/",
      },
      contributor: [
        { "@id": "https://victormundi.com/#jeroen-sakkers" },
        {
          "@type": "Person",
          name: "Diana Matroos",
          sameAs: "https://nl.linkedin.com/in/dianamatroos",
        },
      ],
    },
    {
      "@type": "CreativeWork",
      "@id": "https://victormundi.com/#portfolio-exit-2019",
      name: "VictorMundi portfolio exit to ZZP Nederland",
      url: "https://www.flexnieuws.nl/2019/08/zzp-nederland-neemt-zzp-initiatieven-victormundi-over/",
      datePublished: "2019-08-27",
      inLanguage: "nl-NL",
      description:
        "The 2019 sale of Dag van de ZZP’er, the FOTY Awards and ZZP Barometer by VictorMundi to ZZP Nederland.",
      about: { "@id": "https://victormundi.com/#jeroen-sakkers" },
    },
    {
      "@type": "VideoObject",
      "@id": "https://victormundi.com/#mark-rutte-interview",
      name: "Jeroen Sakkers interviews then–Prime Minister Mark Rutte",
      description:
        "An edited public recording of Jeroen Sakkers interviewing then–Dutch Prime Minister Mark Rutte at Dag van de ZZP’er in 2015.",
      thumbnailUrl: "https://i.ytimg.com/vi/mynvKKeugcs/hqdefault.jpg",
      uploadDate: "2015-10-13T05:57:02-07:00",
      duration: "PT18M51S",
      embedUrl: "https://www.youtube-nocookie.com/embed/mynvKKeugcs?start=49",
      url: "https://www.youtube.com/watch?v=mynvKKeugcs&t=49s",
      inLanguage: "nl-NL",
      about: { "@id": "https://victormundi.com/#jeroen-sakkers" },
      recordedAt: {
        "@type": "Event",
        name: "Dag van de ZZP’er 2015",
        startDate: "2015-04-04",
        location: { "@type": "Country", name: "The Netherlands" },
      },
    },
    {
      "@type": "VideoObject",
      "@id": "https://victormundi.com/#body-transformation-video",
      name: "Improve Every Day: Jeroen Sakkers’ body transformation",
      description:
        "Jeroen Sakkers reflects on a year of consistent training and the small choices behind meaningful transformation.",
      thumbnailUrl:
        "https://victormundi.com/story/body-transformation-poster.jpg",
      uploadDate: "2025-11-30",
      duration: "PT1M30S",
      contentUrl:
        "https://victormundi.com/story/body-transformation.mp4",
      url: "https://victormundi.com/#body-transformation",
      inLanguage: "en",
      creator: { "@id": "https://victormundi.com/#jeroen-sakkers" },
      about: { "@id": "https://victormundi.com/#jeroen-sakkers" },
    },
  ],
};

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

function Milestones() {
  return (
    <section
      className="milestones-section"
      id="milestones"
      aria-labelledby="milestones-title"
    >
      <div className="milestones-heading">
        <div>
          <p className="eyebrow light-eyebrow">
            <span /> Selected track record · 2014—2019
          </p>
          <h2 id="milestones-title">
            Building a national platform
            <em>around independent work.</em>
          </h2>
        </div>
        <p>
          Before focusing on Ratecard and HireData, VictorMundi built research,
          media and live-event initiatives for independent professionals in the
          Netherlands.
        </p>
      </div>

      <article className="milestone milestone-exit" id="exit-zzp-nederland">
        <div className="milestone-copy">
          <p className="milestone-label">2019 · Acquisition by ZZP Nederland</p>
          <h3>Three VictorMundi initiatives acquired by ZZP Nederland.</h3>
          <p>
            With my brother and co-founder Robbie, I built Dag van de ZZP&apos;er,
            the FOTY Awards and ZZP Barometer. After the 2018 event sold all 2,000
            tickets, ZZP Nederland—then part of a.s.r.&apos;s Distribution &amp; Services
            portfolio—acquired all three initiatives in August 2019. The transaction
            allowed us to focus on Ratecard, and later HireData.
          </p>
          <dl className="milestone-facts" aria-label="Portfolio exit facts">
            <div>
              <dt>3</dt>
              <dd>National initiatives</dd>
            </div>
            <div>
              <dt>2,000</dt>
              <dd>Tickets sold in 2018</dd>
            </div>
            <div>
              <dt>2019</dt>
              <dd>Portfolio exit</dd>
            </div>
          </dl>
          <a
            className="milestone-link"
            href="https://www.flexnieuws.nl/2019/08/zzp-nederland-neemt-zzp-initiatieven-victormundi-over/"
          >
            Read the 2019 acquisition announcement <Arrow />
          </a>
        </div>

        <figure className="milestone-figure milestone-exit-figure">
          <img
            src="/story/victormundi-zzp-nederland-exit-2019.jpg"
            alt="Robbie Sakkers, Jeroen Sakkers and Frank Alfrink marking the 2019 sale of three VictorMundi initiatives to ZZP Nederland"
            width="1646"
            height="1098"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>Robbie Sakkers · Jeroen Sakkers · Frank Alfrink</span>
            <span>Acquisition announcement · 2019</span>
          </figcaption>
        </figure>
      </article>

      <div className="milestone-pair">
        <article className="milestone milestone-bnr" id="bnr-zzp-cafe">
          <div className="milestone-copy">
            <p className="milestone-label">2014 · Co-host, BNR ZZP Café</p>
            <h3>Weekly national radio with Diana Matroos.</h3>
            <p>
              I helped launch BNR ZZP Café and co-hosted the weekly programme with
              journalist Diana Matroos. Each Saturday, we discussed policy,
              research and entrepreneurship, using ZZP Barometer data to ground the
              conversation.
            </p>
            <dl className="milestone-facts" aria-label="BNR ZZP Café facts">
              <div>
                <dt>Weekly</dt>
                <dd>National business radio</dd>
              </div>
              <div>
                <dt>11—12</dt>
                <dd>Saturday mornings</dd>
              </div>
              <div>
                <dt>2014</dt>
                <dd>Programme launched</dd>
              </div>
            </dl>
            <a
              className="milestone-link"
              href="https://web.archive.org/web/20150506132022/http://zzpbarometer.nl/2014/09/bnr-start-met-ziggo-zzp-cafe-zzpers-zijn-de-toekomst/"
            >
              Read the original launch story <Arrow />
            </a>
          </div>

          <figure className="milestone-figure milestone-bnr-figure">
            <img
              src="/story/bnr-zzp-cafe-jeroen-sakkers-diana-matroos-2014.jpg"
              alt="Jeroen Sakkers co-hosting BNR ZZP Café with Diana Matroos in 2014"
              width="800"
              height="533"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>BNR ZZP Café · 2014</span>
              <span>With Diana Matroos</span>
            </figcaption>
          </figure>
        </article>

        <article className="milestone milestone-rutte" id="mark-rutte-interview">
          <div className="milestone-copy">
            <p className="milestone-label">2015 · Interview, Mark Rutte</p>
            <h3>A 30-minute conversation on independent work.</h3>
            <p>
              At the 2015 Dag van de ZZP&apos;er, I interviewed then–Dutch Prime
              Minister Mark Rutte about entrepreneurship and the role of
              self-employed people in the Dutch economy. The public recording is an
              edited excerpt of our half-hour conversation.
            </p>
            <dl className="milestone-facts" aria-label="Mark Rutte interview facts">
              <div>
                <dt>≈30 min</dt>
                <dd>Live conversation</dd>
              </div>
              <div>
                <dt>2015</dt>
                <dd>Dag van de ZZP&apos;er</dd>
              </div>
              <div>
                <dt>00:49</dt>
                <dd>Interview begins</dd>
              </div>
            </dl>
          </div>

          <div className="milestone-video">
            <iframe
              src="https://www.youtube-nocookie.com/embed/mynvKKeugcs?start=49&amp;rel=0"
              title="Jeroen Sakkers interviews then–Prime Minister Mark Rutte at Dag van de ZZP'er"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="milestone-video-meta" aria-hidden="true">
              <span>04 April 2015 · The Netherlands</span>
              <span>Edited public recording</span>
            </div>
            <a
              className="milestone-link"
              href="https://www.youtube.com/watch?v=mynvKKeugcs&amp;t=49s"
            >
              Watch the interview on YouTube <Arrow />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

function TransformationStory() {
  return (
    <section
      className="practice-section"
      id="body-transformation"
      aria-labelledby="practice-title"
    >
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
          <span /> Personal practice · 2025
        </p>
        <h2 id="practice-title">
          Improve Every Day, <em>beyond work.</em>
        </h2>
        <p id="practice-description">
          In 2025, I documented a year of training to show what the principle looks
          like outside work: small, sustained choices, measured over time.
        </p>
        <p className="practice-note">
          The same discipline shapes how I lead and build: define the next useful
          step, make progress visible and keep showing up.
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
      />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jeroen Sakkers, home">
          Jeroen Sakkers<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#hiredata">HireData</a>
          <a href="#milestones">Track record</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="https://www.linkedin.com/in/victormundi/">
            LinkedIn <Arrow />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-lead">
            <p className="eyebrow">
              <span /> Jeroen Sakkers · Founder &amp; CEO, HireData
            </p>
            <h1>
              <span>Building recruitment</span>
              <em>technology.</em>
            </h1>
            <p className="hero-motto">
              <span>Operating principle</span>
              <strong>Improve Every Day.</strong>
            </p>
          </div>

          <div className="hero-support">
            <p className="hero-intro">
              I have built recruitment technology since 2009. Today, HireData
              equips staffing and recruiting companies with AI agents and
              automations inside the systems they already use—supporting 5,000+
              recruiters and automating more than 10 million tasks each year.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="https://www.hiredata.com/">
                Visit HireData <Arrow />
              </a>
              <a className="text-link" href="#milestones">
                View track record <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <a
            className="hero-card"
            href="#about"
            aria-label="Read about Jeroen Sakkers"
          >
            <div className="hero-card-top">
              <span>FOUNDER &amp; OPERATOR</span>
              <span>AMSTERDAM</span>
            </div>
            <div className="portrait-wrap">
              <img
                src="/jeroen.png"
                alt="Jeroen Sakkers"
                width="300"
                height="300"
                decoding="async"
              />
            </div>
            <div className="hero-card-name">
              <div>
                <strong>Jeroen Sakkers</strong>
                <span>Founder &amp; CEO, HireData</span>
                <small>Recruitment technology · Since 2009</small>
              </div>
              <span className="card-arrow" aria-hidden="true">↓</span>
            </div>
            <div className="hero-card-current">
              <span>MISSION</span>
              <p>
                Helping people discover and use the work they are uniquely good at.
              </p>
            </div>
          </a>
        </section>

        <dl className="authority-strip" aria-label="Selected founder facts">
          <div>
            <dt>2009</dt>
            <dd>Building companies</dd>
          </div>
          <div>
            <dt>5,000+</dt>
            <dd>Recruiters supported</dd>
          </div>
          <div>
            <dt>10M+</dt>
            <dd>Tasks automated annually</dd>
          </div>
          <div>
            <dt>2019</dt>
            <dd>Three-initiative exit</dd>
          </div>
        </dl>

        <section
          className="work-section current-work-section"
          id="hiredata"
          aria-labelledby="current-work-title"
        >
          <div className="section-heading">
            <p className="eyebrow">
              <span /> Current company
            </p>
            <h2 id="current-work-title">
              HireData. <em>AI inside the systems recruiters already use.</em>
            </h2>
            <p>
              HireData is my operating focus: a recruitment technology company built
              around reliable automation, better data and clear human judgment.
            </p>
          </div>

          <article className="project-card project-hiredata">
            <div className="project-copy">
              <div className="project-number">CURRENT / HIREData</div>
              <div className="project-tags">
                <ProjectMeta>Founder-led company</ProjectMeta>
                <ProjectMeta>AI · B2B SaaS</ProjectMeta>
              </div>
              <h3>HireData</h3>
              <p className="project-role">Founder &amp; CEO · Product direction</p>
              <p className="project-description">
                HireData adds AI agents and automations to existing applicant
                tracking systems. It handles repetitive coordination, enriches
                candidate and vacancy data, and gives recruiters more time for
                judgment and relationships.
              </p>
              <p className="project-proof">
                <span>Current reach</span>
                <strong>5,000+ recruiters · 10M+ tasks automated annually</strong>
              </p>
              <ul className="project-points">
                <li>AI agents inside existing ATS workflows</li>
                <li>Email, WhatsApp and data workflows</li>
                <li>Clear business rules and visible outcomes</li>
              </ul>
              <a className="project-link" href="https://www.hiredata.com/">
                Visit HireData <Arrow />
              </a>
            </div>
            <HireDataVisual />
          </article>
        </section>

        <Milestones />

        <section
          className="work-section lab-section"
          id="products"
          aria-labelledby="products-title"
        >
          <div className="section-heading">
            <p className="eyebrow">
              <span /> Selected product work · 01–04
            </p>
            <h2 id="products-title">Focused experiments in learning and agency.</h2>
            <p>
              Beyond HireData, I build small, private products that explore how
              software can help people learn, decide and act more effectively.
            </p>
          </div>

          <div className="lab-grid">
            <article className="project-card project-sol">
              <div className="project-copy">
                <div className="project-number">01</div>
                <div className="project-tags">
                  <ProjectMeta>Private beta</ProjectMeta>
                  <ProjectMeta>Voice-first iOS</ProjectMeta>
                </div>
                <h3>Sol — Rafa &amp; Hans</h3>
                <p className="project-role">Product concept · UX · Native iOS</p>
                <p className="project-description">
                  Voice-first iOS coaches for European Spanish and everyday Dutch,
                  built around speaking, immediate feedback and short practice for
                  real conversations.
                </p>
                <ul className="project-points">
                  <li>Speaking before exercises</li>
                  <li>One system, two distinct coaches</li>
                </ul>
                <span className="project-status">In private beta</span>
              </div>
              <SolVisual />
            </article>

            <article className="project-card project-first-names">
              <div className="project-copy">
                <div className="project-number">02</div>
                <div className="project-tags">
                  <ProjectMeta>Live product</ProjectMeta>
                  <ProjectMeta>Local-first web</ProjectMeta>
                </div>
                <h3>First Names</h3>
                <p className="project-role">Product · UX · Web &amp; Chrome</p>
                <p className="project-description">
                  A local-first tool that prompts one small relationship habit:
                  recall three people each week and reconnect where it matters.
                  Contact data and face matching stay on-device.
                </p>
                <ul className="project-points">
                  <li>Active recall instead of passive browsing</li>
                  <li>Private by default</li>
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
                <div className="project-number">03</div>
                <div className="project-tags">
                  <ProjectMeta>Private beta</ProjectMeta>
                  <ProjectMeta>Local-first iOS</ProjectMeta>
                </div>
                <h3>yet.</h3>
                <p className="project-role">Product system · UX · Native iOS</p>
                <p className="project-description">
                  A local-first iPhone app for tracking health, training and
                  reflection. It turns personal records into a clear next step while
                  keeping sensitive data on the device.
                </p>
                <ul className="project-points">
                  <li>Today, Add and Progress</li>
                  <li>Personal data stays local</li>
                </ul>
                <span className="project-status">In private beta</span>
              </div>
              <YetVisual />
            </article>

            <article className="project-card project-eva">
              <div className="project-copy">
                <div className="project-number">04</div>
                <div className="project-tags">
                  <ProjectMeta>Internal tool</ProjectMeta>
                  <ProjectMeta>AI operations</ProjectMeta>
                </div>
                <h3>Eva Keller</h3>
                <p className="project-role">AI system · Operations design</p>
                <p className="project-description">
                  A private AI operations system that turns goals into traceable
                  tasks, status updates and explicit decision points—keeping context
                  visible while consequential decisions stay with people.
                </p>
                <ul className="project-points">
                  <li>Traceable work and status</li>
                  <li>Explicit human decision points</li>
                </ul>
                <span className="project-status">Private product system</span>
              </div>
              <EvaVisual />
            </article>
          </div>
        </section>

        <section
          className="mission-section"
          id="mission"
          aria-labelledby="mission-title"
        >
          <div className="mission-lead">
            <p className="eyebrow">
              <span /> Mission
            </p>
            <h2 id="mission-title">
              Helping people discover <em>their superpower.</em>
            </h2>
          </div>
          <div className="mission-body">
            <p className="mission-bridge">
              By “superpower,” I mean the work someone is unusually good at and
              energized by.
            </p>
            <p>
              I build companies and systems that remove repetitive work, improve
              decisions and give people more room to develop that strength. Improve
              Every Day is the operating principle: listen closely, learn from real
              use and keep improving what matters.
            </p>
            <ul className="mission-signals" aria-label="How the mission becomes work">
              <li>Start with evidence</li>
              <li>Reduce complexity</li>
              <li>Design for scale</li>
              <li>Keep learning</li>
            </ul>
          </div>
        </section>

        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-lead">
            <p className="eyebrow">
              <span /> About
            </p>
            <h2 id="about-title">Building companies since 2009.</h2>
          </div>
          <div className="about-body">
            <p>
              I co-founded VictorMundi in 2009. Since then, I have built products
              and companies across recruitment technology and independent work—from
              Ratecard and Dag van de ZZP&apos;er to HireData. Today, I lead HireData&apos;s
              product and company direction.
            </p>
            <p>
              My approach is consistent: listen to users, reduce complexity,
              automate repetitive work and build systems that can scale without
              constant intervention. I value candour, reliability and long-term
              partnerships.
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
                  <strong>Start with evidence</strong>
                  <span>Customer conversations and operating data before features.</span>
                </li>
                <li>
                  <strong>Reduce dependence</strong>
                  <span>
                    Automate repeatable work and make ownership clear.
                  </span>
                </li>
                <li>
                  <strong>Design for scale</strong>
                  <span>
                    Reliability and visibility before unnecessary complexity.
                  </span>
                </li>
                <li>
                  <strong>Build durable partnerships</strong>
                  <span>
                    Direct communication, aligned interests and long-term trust.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <TransformationStory />

        <section className="contact-section" aria-labelledby="contact-title">
          <p className="eyebrow light-eyebrow">
            <span /> Start a conversation
          </p>
          <h2 id="contact-title">Work with me—or with HireData.</h2>
          <p className="contact-copy">
            I&apos;m open to relevant conversations with customers, partners and people
            interested in helping build HireData. If you have a specific opportunity
            in mind, send me a message on LinkedIn; I reply personally.
          </p>
          <div className="contact-links">
            <a
              className="button button-light"
              href="https://www.linkedin.com/in/victormundi/"
            >
              Contact me on LinkedIn <Arrow />
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
