import { useEffect, useState } from "react";
import Section from "../components/Section";

export default function Projects(){
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/VijayKumarKalla/repos?sort=updated&per_page=6")
      .then(res => res.json())
      .then(setRepos)
      .catch(err => console.error(err));
  }, []);

  return (
    <Section id="projects" title="Projects">
      <div style={{display:"grid", gap:"20px", gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))"}}>
        {repos.map(repo => (
          <a key={repo.id} href={repo.html_url} target="_blank" className="btn" style={{background:"var(--card)"}}>
            {repo.name}
          </a>
        ))}
      </div>
    </Section>
  )
}
