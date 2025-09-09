import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <nav style={{padding:"15px 0", borderBottom:"1px solid var(--muted)"}}>
      <div className="container" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2>Vijay Kalla</h2>
        <div className="desktop-links" style={{display: open ? "block" : "none"}}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" download>Resume</a>
          <ThemeToggle />
        </div>
        <button 
          onClick={()=> setOpen(!open)} 
          className="mobile-menu" 
          style={{background:"transparent", border:"none", fontSize:"22px"}}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
