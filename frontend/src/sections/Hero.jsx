import { motion } from "framer-motion";
 import { Typewriter } from 'react-simple-typewriter';
export default function Hero(){
  return (
    <section className="section">
      <div className="container" style={{textAlign:"center"}}>
       

<motion.h1>
  Hi 👋 I'm <span style={{color:"var(--accent)"}}>Vijay Kumar Kalla</span>
  <br/>
  <span style={{fontSize:"22px", color:"var(--muted)"}}>
    <Typewriter
      words={['Full Stack Developer', 'React.js Enthusiast', 'Node.js + SQL Expert']}
      loop={true}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  </span>
</motion.h1>

        <p style={{marginTop:"15px", color:"var(--muted)"}}>
          A passionate <b>Full Stack Developer</b> with strong skills in React, Node.js, and SQL.
          I love crafting performant APIs, clean database schemas, and smooth user experiences.
        </p>
        <div style={{marginTop:"20px"}}>
          <a href="/resume.pdf" className="btn" download>Download Resume</a>
        </div>
      </div>
    </section>
  )
}
