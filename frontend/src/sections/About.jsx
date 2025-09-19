import Section from "../components/Section";

export default function About(){
  return (
    <Section id="about" title="About Me">
      <p>
        I am a <b>software developer</b> with expertise in <b>React</b>, <b>Node.js</b>, and <b>SQLite/SQL</b>. 
        I enjoy building end-to-end applications, from designing the backend to creating engaging frontends.  
      </p>
      <p style={{marginTop:"10px"}}>
        My focus is on writing clean, maintainable code and delivering features that solve real problems.  
        I’ve worked on authentication systems, database-driven applications, and modern UI development.  
      </p>
    </Section>
  )
}
