export async function fetchLatestRepos(username, limit=6){
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`);
  if(!res.ok) throw new Error("GitHub API error");
  return res.json();
}
