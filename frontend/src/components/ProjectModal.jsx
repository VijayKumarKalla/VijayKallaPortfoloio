import { motion } from "framer-motion";

export default function ProjectModal({ repo, onClose }) {
  if (!repo) return null;
  return (
    <div style={{
      position:"fixed", inset:0, background:"rgba(0,0,0,.7)",
      display:"flex", justifyContent:"center", alignItems:"center", zIndex:1000
    }}
    onClick={onClose}>
      <motion.div 
        onClick={e => e.stopPropagation()}
        initial={{scale:0.8, opacity:0}}
        animate={{scale:1, opacity:1}}
        className="card"
        style={{maxWidth:"500px"}}
      >
        <h2>{repo.name}</h2>
        <p>{repo.description || "No description"}</p>
        <p><b>Language:</b> {repo.language}</p>
        <p><b>Stars:</b> {repo.stargazers_count}</p>
        <a className="btn" href={repo.html_url} target="_blank">View on GitHub</a>
      </motion.div>
    </div>
  );
}
