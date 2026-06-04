function App() {
  const skills = [
    "Java", "Python", "C++", "SQL", "HTML", "CSS", "JavaScript",
    "React.js", "Node.js", "Express.js", "MongoDB", "MySQL",
    "Java Swing", "JDBC", "Tailwind CSS", "Data Structures",
    "Algorithms", "AI/ML", "Blockchain", "Cloud Computing", "Virtualization",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-slate-900">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            Sumedh Khillare
          </h1>

          <div className="hidden md:flex gap-6 text-sm text-slate-700">
            {["about", "skills", "projects", "education", "certificates","Resume", "contact"].map((item) => (
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
            I build full-stack, Java, AI/ML, and blockchain-based projects using
            modern technologies. I enjoy solving real-world problems through
            clean, practical, and scalable software solutions.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
             <ButtonLink href="#projects" primary>View Projects</ButtonLink>
             <ButtonLink href="#contact">Contact Me</ButtonLink>
             <ButtonLink href="/Sumedh_Khillare_Resume.pdf">Resume</ButtonLink>
             <ButtonLink href="https://github.com/sumedhkhillare">GitHub</ButtonLink>
             <ButtonLink href="https://www.linkedin.com/in/sumedh-khillare-322ab3358/">LinkedIn</ButtonLink>
</div>
        </div>
      </section>

      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>I am a Computer Science Engineering student with a strong foundation in programming, data structures, software development, and database management. I am skilled in Java, Python, C++, SQL, React.js, Node.js, Express.js, MongoDB, and MySQL.</Card>
          <Card>My project experience includes a full-stack AI Resume Builder & Analyzer, a Java-based Airline Management System, and a Blockchain and AI-based decentralized energy trading framework.</Card>
          <Card>I am interested in Artificial Intelligence, Machine Learning, Blockchain, Cloud Computing, and Virtualization. I enjoy learning how modern technologies solve real-world problems.</Card>
          <Card>I am eager to learn new technologies, improve my problem-solving skills, and contribute effectively in an entry-level software engineering role.</Card>
        </div>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-full text-slate-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition">
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard icon="🤖" title="AI Resume Builder & Analyzer" tech="React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Gemini API" desc="Full-stack AI resume analyzer with authentication, resume upload, ATS score checking, AI suggestions, and resume builder." />
          <ProjectCard icon="✈️" title="Airline Management System" tech="Java, Java Swing, AWT, JDBC, MySQL" desc="Java desktop application for customer registration, flight booking, PNR search, boarding pass generation, payment, and ticket cancellation." />
          <ProjectCard icon="⚡" title="Blockchain & AI Energy Trading" tech="Node.js, Blockchain, AI/ML, LSTM, Regression Model" desc="Decentralized peer-to-peer energy trading framework using blockchain, IoT smart meters, LSTM-based energy prediction, and regression-based dynamic pricing." />
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            title="B.Tech CSE"
            desc="Ajeenkya D Y Patil University, Pune | 2022 - 2026"
          />
          <InfoCard
            title="11th - 12th"
            desc="HSC Board | Atomic Energy Junior College Tarapur"
          />
          <InfoCard
            title="Till 10th"
            desc="CBSE Board | Atomic Energy Central School Tarapur"
          />
        </div>
      </Section>

      <Section id="certificates" title="Certificates">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard title="AWS Re/Start Graduate" desc="Amazon Web Services Training and Certification" />
          <InfoCard title="Oracle Cloud Infrastructure 2025" desc="Certified Foundations Associate" />
          <InfoCard title="UpGrad" desc="Data Structures and Algorithms in Java" />
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
        href="/Sumedh_Khillare_Resume.pdf"
        download
        className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
      >
        Download Resume
      </a>

      <a
        href="/Sumedh_Khillare_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold shadow-sm hover:bg-blue-50 transition"
      >
        Preview Resume
      </a>
    </div>

    <iframe
      src="/Sumedh_Khillare_Resume.pdf"
      title="Resume Preview"
      className="w-full h-[700px] rounded-2xl border border-slate-200"
    />
  </div>
</Section>

      <Section id="contact" title="Contact">
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

function ProjectCard({ icon, title, tech, desc }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center mb-5 text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-sm text-blue-600 mb-3">{tech}</p>
      <p className="text-slate-600 leading-7">{desc}</p>
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