import Section from "../components/Section";

export default function Contact(){
  return (
    <Section id="contact" title="Contact">
      <p>Feel free to reach out for collaborations or just a chat!</p>
      <div style={{marginTop:"20px", display:"flex", gap:"15px", flexWrap:"wrap"}}>
        <a className="btn" href="mailto:vijaykalla96@gmail.com">📧 Email</a>
        <a className="btn" href="https://github.com/VijayKumarKalla" target="_blank">🐙 GitHub</a>
        <a className="btn" href="https://linkedin.com/in/vijay-kalla" target="_blank">💼 LinkedIn</a>
      </div>
    </Section>
  )
}
