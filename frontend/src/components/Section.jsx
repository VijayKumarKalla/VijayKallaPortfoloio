import { motion } from "framer-motion";

export default function Section({ id, title, children }){
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.h2 
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.5}}
        >
          {title}
        </motion.h2>
        <div style={{marginTop:"20px"}}>
          {children}
        </div>
      </div>
    </section>
  )
}
