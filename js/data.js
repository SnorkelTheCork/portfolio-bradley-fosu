/* Fonction pour charger les projets depuis un fichier JSON */
async function loadProjects() {
    const reponse = await fetch('./data/projets.json');
    const projects = await reponse.json();
    return projects;
}