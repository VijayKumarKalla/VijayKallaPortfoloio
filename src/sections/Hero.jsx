import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section className="section">
      <div className="container" style={{textAlign:"center"}}>
        <motion.h1 
          initial={{opacity:0, y:30}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.6}}
        >
          Hi 👋 I'm <span style={{color:"var(--accent)"}}>Vijay Kumar Kalla</span>
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
