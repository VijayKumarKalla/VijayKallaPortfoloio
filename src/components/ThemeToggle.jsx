import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle(){
  const { theme, setTheme } = useTheme();

  return (
    <button 
      onClick={() => setTheme(theme === "light" ? "dark" : "light")} 
      style={{padding:"6px 12px", borderRadius:"6px", border:"1px solid var(--muted)", background:"transparent", color:"var(--text)", cursor:"pointer"}}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}
