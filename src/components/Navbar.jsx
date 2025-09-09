import ThemeToggle from "./ThemeToggle";

export default function Navbar(){
  return (
    <nav style={{padding:"20px 0", borderBottom:"1px solid var(--muted)"}}>
      <div className="container" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <h2>Vijay Kalla</h2>
        <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" download>Resume</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
