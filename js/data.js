async function loadProjects() {
    const reponse = await fetch('../data/projets.json');
    const projects = await reponse.json();
    return projects;
}