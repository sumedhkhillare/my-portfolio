function App() {
  const skillGroups = [
    { label: "Languages", items: ["Java", "Python", "C++", "SQL", "JavaScript"] },
    { label: "Web Development", items: ["React.js", "Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS", "MongoDB", "MySQL"] },
    { label: "Tools", items: ["Java Swing", "JDBC", "Git & GitHub", "Postman"] },
    { label: "Core CS", items: ["Data Structures", "Algorithms", "OOP", "DBMS"] },
    { label: "AI/ML & Emerging Tech", items: ["AI/ML", "Computer Vision", "Blockchain", "Cloud Computing", "Virtualization"] },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-slate-900">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            Sumedh Khillare
          </h1>

          <div className="hidden md:flex gap-6 text-sm text-slate-700">
            {["about", "skills", "projects", "education", "certificates", "resume", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-blue-600 capitalize">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="pt-36 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-5 py-2 rounded-full bg-blue-100 text-blue-700 border border-blue-200 text-sm">
            Open to Entry-Level Software Developer & Full Stack Developer Roles
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Sumedh
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-700 mb-6">
            Computer Science Engineer | Software Developer | AI/ML & Full Stack Enthusiast
          </p>

          <p className="max-w-3xl mx-auto text-slate-600 mb-10 leading-8">
            I design and ship complete software products — from Java desktop systems
            to AI-powered web apps — with a focus on clean architecture and
            real-world usability. Currently exploring the intersection of AI/ML
            and full-stack development.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
             <ButtonLink href="#projects" primary>View Projects</ButtonLink>
             <ButtonLink href="#contact">Contact Me</ButtonLink>
             <ButtonLink href="/Sumedh Khillare - Resume new.pdf">Resume</ButtonLink>
             <ButtonLink href="https://github.com/sumedhkhillare">GitHub</ButtonLink>
             <ButtonLink href="https://www.linkedin.com/in/sumedh-khillare-322ab3358/">LinkedIn</ButtonLink>
          </div>
        </div>
      </section>

      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            I'm a Computer Science Engineering graduate (2026) who learns by
            building. My foundation spans Java, Python, C++, and SQL, extended
            into full-stack development with React.js, Node.js, Express.js,
            and MongoDB.
          </Card>
          <Card>
            Rather than following tutorials, I've built four independent,
            end-to-end systems — a Java desktop application, an AI-integrated
            web platform, a computer vision tool, and a blockchain-based
            trading framework — each solving a distinct real-world problem.
          </Card>
          <Card>
            My work on decentralized AI/blockchain systems for peer-to-peer
            energy trading was developed into a research paper accepted at
            ICSICE — pushing me to think about software not just as code, but
            as systems that need to be explained and defended.
          </Card>
          <Card>
            I'm currently looking for a Full-Stack Developer or Software
            Development Engineer role where I can keep building things
            end-to-end, from database design through deployed interface.
          </Card>
        </div>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full text-slate-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            icon="🤖"
            title="AI Resume Builder & Analyzer"
            tech="React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Gemini API"
            desc="Full-stack AI resume analyzer with authentication, resume upload, ATS score checking, AI suggestions, and resume builder — built to solve my own frustration with generic resume feedback tools."
            code="https://github.com/sumedhkhillare"
          />

          <ProjectCard
            icon="✈️"
            title="Airline Management System"
            tech="Java, Java Swing, AWT, JDBC, MySQL"
            desc="Java desktop application for customer registration, flight booking, PNR search, boarding pass generation, payment, and ticket cancellation — designed to model real airline backend workflows end-to-end."
            code="https://github.com/sumedhkhillare"
          />

          <ProjectCard
            icon="🎯"
            title="ML VisionAI - Multi Object Detection System"
            tech="Python, Flask, YOLO, OpenCV, React.js, HTML, CSS, JavaScript"
            desc="AI-powered object detection system using YOLO and OpenCV, with image upload, bounding box visualization, and confidence scoring — exploring how computer vision models integrate into usable web interfaces."
            code="https://github.com/sumedhkhillare"
          />

          <ProjectCard
            icon="⚡"
            title="Blockchain & AI Energy Trading"
            tech="Node.js, Blockchain, AI/ML, LSTM, Regression Model, Hardhat"
            desc="Decentralized peer-to-peer energy trading framework combining blockchain, IoT smart meters, LSTM-based demand prediction, and regression-based dynamic pricing — this research was developed into a paper accepted at ICSICE."
            code="https://github.com/sumedhkhillare"
          />
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            title="B.Tech, Computer Science Engineering"
            desc="Ajeenkya D Y Patil University, Pune | 2022 - 2026"
          />
          <InfoCard
            title="Higher Secondary Certificate (12th)"
            desc="Atomic Energy Junior College, Tarapur"
          />
          <InfoCard
            title="Secondary School Certificate (10th)"
            desc="Atomic Energy Central School, Tarapur"
          />
        </div>
      </Section>

      <Section id="certificates" title="Certificates">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            title="AWS Re/Start Graduate"
            desc="Amazon Web Services Training and Certification | Oct 2025 - Jan 2026"
          />
          <InfoCard
            title="Oracle Cloud Infrastructure 2025"
            desc="Certified Foundations Associate | Nov 2025 - Dec 2025"
          />
          <InfoCard
            title="UpGrad"
            desc="Data Structures and Algorithms in Java"
          />
        </div>
      </Section>

      <Section id="resume" title="Resume">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-center">
            My Resume
          </h3>

          <p className="text-slate-600 text-center mb-8">
            Download or preview my latest resume.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-8">
            <a
              href="Sumedh Khillare - Resume new.pdf"
              download
              className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Download Resume
            </a>

            <a
              href="/Sumedh Khillare - Resume new.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold shadow-sm hover:bg-blue-50 transition"
            >
              Preview Resume
            </a>
          </div>

          <iframe
            src="/Sumedh Khillare - Resume new.pdf"
            title="Resume Preview"
            className="w-full h-[700px] rounded-2xl border border-slate-200"
          />
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <p className="text-slate-600 mb-6">
          Open to full-stack developer and SDE roles — feel free to reach out.
        </p>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl text-slate-700 space-y-4">
          <p><b>Email:</b> sumedh.khillare@adypu.edu.in</p>
          <p><b>Location:</b> Pune, India</p>
          <p><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/sumedh-khillare-322ab3358/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">linkedin.com/in/sumedh-khillare-322ab3358</a></p>
          <p><b>GitHub:</b> <a href="https://github.com/sumedhkhillare" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/sumedhkhillare</a></p>
        </div>
      </Section>

      <footer className="text-center py-8 border-t border-slate-200 text-slate-500">
        © 2026 Sumedh Khillare. All Rights Reserved.
      </footer>
    </div>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-900">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Card({ children }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 text-slate-700 leading-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
      {children}
    </div>
  )
}

function ProjectCard({ icon, title, tech, desc, code }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition flex flex-col">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center mb-5 text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-sm text-blue-600 mb-3">{tech}</p>
      <p className="text-slate-600 leading-7 mb-5 flex-1">{desc}</p>
      {code && (
        <a
          href={code}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 transition self-start"
        >
          View Code →
        </a>
      )}
    </div>
  )
}

function InfoCard({ title, desc }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  )
}

function ButtonLink({ href, children, primary }) {
  const external = href.startsWith("http")

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={
        primary
          ? "bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          : "bg-white border border-slate-200 text-slate-700 px-7 py-3 rounded-xl font-semibold shadow-sm hover:bg-blue-50 hover:scale-105 transition"
      }
    >
      {children}
    </a>
  )
}

export default App
