async function init() {
    const projects = await loadProjects();
    console.table(projects);
    projects.forEach(project => {
        console.log(project.title);
    });
    const grid = document.querySelector('.projects__grid');
    grid.innerHTML = projects.map(createProjectCard).join('');
}

init();
