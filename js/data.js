async function loadProjects() {
    const reponse = await fetch('data/projects.json');
    const projects = await reponse.json();
    return projects;
}