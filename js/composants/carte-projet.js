/* Fonction qui sert comme HTML pour créer une carte de projet */
function createProjectCard(project) {
  return `
    <article class="card">
      <h3 class="card__title">${project.title}</h3>
      <img class="card__image" src="${project.image}" alt="${project.title}" loading="lazy">
      <div class="card__content">
        <p class="card__text description">${project.description}</p>
        <p class="card__text teammates">Mes coéquipiers: ${project.team}</p>
        <p class="card__text applications">Logiciels utilisées: ${project.software}</p>
        <p class="card__links"><a href="${project.link}" target="_blank" rel="noopener noreferrer">voir le projet</a></p>
      </div>
    </article>
  `;
}
