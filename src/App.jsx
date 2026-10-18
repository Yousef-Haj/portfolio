import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowUpRight, Check, Code2, Copy, Download, Github, Heart, Linkedin, Mail, Menu, Sparkles, X } from 'lucide-react'
import { PERSONAL_INFO, SOCIAL_LINKS } from './utils/constans'
import { projects } from './data/projects'

const navItems = [['home', 'Home'], ['about', 'About'], ['projects', 'Selected work'], ['toolbox', 'Toolbox']]
const technologies = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Git & GitHub', 'Figma']

function SocialLinks() {
  return <div className="social-links">
    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social yellow"><Linkedin size={15} /></a>
    <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social pink"><Github size={16} /></a>
    <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email Yousef" className="social green"><Mail size={15} /></a>
  </div>
}

function Flower() {
  return <span className="flower" aria-hidden="true">✿</span>
}

function ProjectPreview({ project }) {
  if (project.id === 'yalla-shaly') return <div className="travel-preview" aria-label="Illustrative Yalla Shaly interface using project imagery">
    <div className="travel-desktop">
      <div className="travel-nav"><b>yalla shaly<span>✳</span></b><span>Find your next escape ↗</span></div>
      <div className="travel-heading"><small>YOUR NEXT GETAWAY</small><h4>Good days.<br />Great places.</h4></div>
      <img src="/projects/chalet.webp" alt="Chalet with a swimming pool" loading="lazy" width="1000" height="666" />
      <div className="travel-search">Where to? <span>Your next favorite place</span><ArrowUpRight size={18} /></div>
    </div>
    <div className="travel-phone"><div className="phone-notch" /><small>9:41 <span>● ▰</span></small><b>Your next<br />little escape.</b><img src="/projects/chalet.webp" alt="" loading="lazy" width="1000" height="666" /><strong>Find a place to unwind</strong><span className="phone-search">Explore chalets ↗</span><div className="phone-nav">⌂　♡　☷　☺</div></div>
    <span className="preview-caption">Interface composition · project imagery</span>
  </div>
  if (project.id === 'al-qemma') return <div className="shop-preview">
    <div className="browser-chrome"><i /><i /><i /><span>Al Qemma · everyday favorites</span></div>
    <div className="qemma-nav"><b>AL QEMMA<span>القمة</span></b><span>Beauty　 Clothing　 Electronics</span><Heart size={15} /></div>
    <div className="qemma-hero"><div><small>THE EVERYDAY, ELEVATED</small><h4>Little finds.<br />Big favorites.</h4><span>Discover your everyday essentials ↗</span></div><img src="/projects/qemma.webp" alt="Al Qemma campaign with skincare, clothing, and electronics" loading="lazy" width="1000" height="645" /></div>
    <div className="qemma-bottom">Thoughtfully picked. Beautifully everyday. <span>EN / AR</span></div>
    <span className="preview-caption">Interface composition · project imagery</span>
  </div>
  if (project.id === 'rabbat') return <div className="screenshot-preview"><div className="browser-chrome"><i /><i /><i /><span>Rabbat · everyday. unexpected.</span></div><img src="/projects/rabbat.webp" alt="Rabbat storefront with an editorial fashion campaign and shop navigation" loading="lazy" width="1440" height="1000" /><span className="preview-caption">From the project</span></div>
  return <div className="coffee-preview"><div className="coffee-nav"><b>DROP COFFEE<span>Good coffee. Good company.</span></b><span>THE MENU ↗</span></div><div className="coffee-hero"><div><small>TAKE A MOMENT. TAKE A SIP.</small><h4>Your daily<br /><em>little ritual.</em></h4><span>Find your next favorite ☕</span></div><img src="/projects/coffee.webp" alt="Drop Coffee mango matcha campaign" loading="lazy" width="900" height="506" /></div><div className="coffee-bottom">BREWED WITH CARE. SHARED WITH YOU. <span>✳</span></div><span className="preview-caption">Interface composition · project imagery</span></div>
}

function ProjectDetails({ project, onClose }) {
  const dialogRef = useRef(null)
  useEffect(() => {
    const dialog = dialogRef.current
    dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [])
  return <dialog ref={dialogRef} className="project-dialog" onClose={onClose} onClick={event => { if (event.target === event.currentTarget) event.currentTarget.close() }} aria-labelledby="project-title">
    <div className="dialog-content">
      <button className="close-dialog" onClick={() => dialogRef.current.close()} aria-label="Close project details"><X size={22} /></button>
      <span className="eyebrow">PROJECT NOTES / {project.category}</span>
      <h2 id="project-title">{project.title}</h2><p className="dialog-intro">{project.description}</p>
      <div className="dialog-preview"><ProjectPreview project={project} /></div>
      <h3>Behind the build</h3><p>{project.details}</p>
      <ul className="feature-list">{project.features.map(feature => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
      <div className="project-stack">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div>
      <p className="project-note">{project.note}</p>
      <a className="ink-button" href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`Tell me about ${project.title}`)}`}><Mail size={17} /> Ask about this project <ArrowUpRight size={17} /></a>
    </div>
  </dialog>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)
  const [copyStatus, setCopyStatus] = useState('')
  const copyTimer = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id) })
    }, { rootMargin: '-15% 0px -55% 0px' })
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section))
    return () => { observer.disconnect(); clearTimeout(copyTimer.current) }
  }, [])

  async function copyEmail() {
    try { await navigator.clipboard.writeText(PERSONAL_INFO.email); setCopyStatus('Email copied!') }
    catch { setCopyStatus(`Email me at ${PERSONAL_INFO.email}`) }
    clearTimeout(copyTimer.current)
    copyTimer.current = setTimeout(() => setCopyStatus(''), 4000)
  }

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="notebook">
      <header className="header">
        <a href="#home" className="brand" aria-label="Yousef Haj home">yh<span>✳</span></a>
        <nav className={`navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">{navItems.map(([id, label], index) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className={activeSection === id ? 'active' : ''} aria-current={activeSection === id ? 'location' : undefined}><span aria-hidden="true">{['✦', '☺', '▦', '◆'][index]}</span>{label}</a>)}</nav>
        <div className="header-actions"><SocialLinks /><a href="#contact" className="contact-nav"><Heart size={12} fill="currentColor" /> Let’s talk</a><button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <span className="small-sticker mint made-things">I MAKE THINGS</span><span className="small-sticker butter detail-sticker">WITH A LITTLE EXTRA CARE</span>
          <div className="name-intro handwriting">hey, my name is <span>↴</span></div>
          <div className="name-frame"><h1 id="hero-title">YOUSEF</h1><span className="surname handwriting">Haj.</span></div>
          <div className="hero-meta"><span className="role-note handwriting">Full-stack developer</span><span className="tiny-label"><i /> CODE, CURIOSITY & GOOD IDEAS</span><span className="location-note handwriting">Palestine ↗</span></div>
          <div className="hero-heading"><h2>I turn ideas into things<br />people love to <span className="use-word">use.<svg viewBox="0 0 100 15" aria-hidden="true"><path d="M3 9 Q45 1 97 7 M9 14 Q45 6 86 11" /></svg></span> <Flower /></h2></div>
          <a className="ink-button" href="#projects"><span className="button-icon"><ArrowDownRight size={18} /></span> Explore my work <ArrowDown size={14} /></a>
          <div className="hero-portrait" aria-hidden="true"><img src="/mecode.jpg" alt="" width="784" height="1328" /><span>hello!</span></div>
          <span className="code-sticker" aria-hidden="true">{'</>'}</span>
          <a href="#about" className="scroll-note handwriting">a little about me <ArrowDown size={17} /></a>
          <span className="hero-page-number tiny-label">PORTFOLIO / 01</span>
        </section>

        <section className="about section-padding" id="about" aria-labelledby="about-heading">
          <div className="section-kicker handwriting">the person behind the pixels <span>↘</span></div>
          <div className="about-layout">
            <figure className="polaroid"><span className="tape tape-blue" /><span className="tape tape-yellow" /><img src="/mecode.jpg" alt="Yousef working at his desk" loading="lazy" width="784" height="1328" /><figcaption className="handwriting">usually building something :)</figcaption><span className="photo-spark" aria-hidden="true">✧</span></figure>
            <div className="about-copy"><h2 id="about-heading" className="handwriting paper-label">what’s up <span>✳</span></h2><p className="handwriting">I’m Yousef, a full-stack developer who likes turning complicated ideas into simple, thoughtful experiences.</p><p className="handwriting">From the first pixel to the last API call, I care about the little details, clean code, and making things that actually help people. <span aria-hidden="true">✍</span></p><a href={PERSONAL_INFO.resume} download className="resume-link tiny-label"><Download size={14} /> A LITTLE MORE ABOUT ME · MY RÉSUMÉ <ArrowUpRight size={14} /></a></div>
            <div className="desk-note"><span className="tape tape-yellow" /><div className="mini-editor"><span>● ● ● <i>little-things.jsx</i></span><code><span>const</span> goodWork = {'{'}<br />　curiosity: <em>true</em>,<br />　details: <em>'matter'</em>,<br />　coffee: <em>'always'</em>,<br />{'}'};<br /><br /><span>build</span>(goodWork);</code></div><p className="handwriting">my kind of happy place.</p></div>
          </div>
          <div className="skill-tickets" aria-label="Areas of focus"><span className="ticket yellow">Frontend Development <Code2 size={22} /></span><span className="ticket green">Backend & APIs <span aria-hidden="true">↗</span></span><span className="ticket pink">Thoughtful Interfaces <Sparkles size={22} /></span><span className="ticket blue">A Little Creativity <span aria-hidden="true">✿</span></span></div>
        </section>

        <section className="projects section-padding" id="projects" aria-labelledby="projects-heading">
          <div className="section-heading"><div><span className="handwriting">some things I’ve been building</span><h2 id="projects-heading">Selected work<span className="pink-dot">.</span></h2></div><span className="handwriting work-note">made with care <ArrowDownRight size={27} /></span></div>
          <div className="project-folders">{projects.map((project, index) => <article className={`project-folder ${project.color}`} key={project.id}>
            <div className="folder-tab"><span>✦</span> PROJECT 0{index + 1}<span>{project.category}</span></div>
            <div className="folder-body"><div className="project-copy"><span className="eyebrow">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-stack">{project.stack.slice(0, 3).map(tech => <span key={tech}>{tech}</span>)}</div><button className="project-link" onClick={() => setSelectedProject(project)}>Explore the project <ArrowUpRight size={16} /></button></div><button className="project-preview-button" onClick={() => setSelectedProject(project)} aria-label={`View ${project.title} project details`}><span className="tape tape-left" /><span className="tape tape-right" /><ProjectPreview project={project} /></button></div>
          </article>)}</div>
          <a href={SOCIAL_LINKS.github} className="github-note tiny-label" target="_blank" rel="noreferrer"><Github size={16} /> MORE CODE, MORE EXPERIMENTS ON GITHUB <ArrowUpRight size={16} /></a>
        </section>

        <section className="toolbox section-padding" id="toolbox" aria-labelledby="toolbox-heading"><div className="section-kicker handwriting">a few tools of the trade</div><div className="toolbox-heading"><h2 id="toolbox-heading">My everyday toolkit<span className="green-dot">.</span></h2><span className="handwriting">always room to learn one more ↴</span></div><div className="tech-list">{technologies.map((tech, index) => <span className="tech-stamp" key={tech}><span aria-hidden="true">{['⚛', 'N', 'TS', '≈', '{ }', '◈', '↳', '◒'][index]}</span>{tech}</span>)}</div></section>

        <section className="contact section-padding" id="contact" aria-labelledby="contact-heading"><span className="small-sticker mint">GOOD THINGS START WITH A HELLO</span><h2 id="contact-heading">Have something<br />in mind? <span className="handwriting">Let’s build it.</span><Flower /></h2><a href={`mailto:${PERSONAL_INFO.email}`} className="email-link">{PERSONAL_INFO.email}<ArrowUpRight /></a><div className="contact-bottom"><button className="copy-button tiny-label" onClick={copyEmail}>{copyStatus === 'Email copied!' ? <Check size={14} /> : <Copy size={14} />} COPY EMAIL</button><span className="copy-feedback" role="status">{copyStatus}</span><a className="tiny-label" href={`tel:${PERSONAL_INFO.phone}`}>OR GIVE ME A CALL <ArrowUpRight size={14} /></a></div><span className="contact-doodle handwriting" aria-hidden="true">your idea<br />+ my keyboard<br /><span>= something good ☺</span></span></section>
      </main>
      <footer className="footer"><span>© {new Date().getFullYear()} Yousef Haj</span><span className="handwriting">built with care & a little curiosity <Heart size={13} /></span><SocialLinks /><a href="#home" className="tiny-label">BACK TO TOP ↑</a></footer>
    </div>
    <div className="outside-note tiny-label">A SMALL CORNER OF THE INTERNET, MADE BY YOUSEF.</div>
    {selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}
  </>
}

export default App
