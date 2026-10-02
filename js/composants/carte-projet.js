function createProjectCard(project) {
  return `
    <article class="card">
      <h3 class="card__title">${project.title}</h3>
      <img class="card__image" src="${project.image}" alt="${project.title}">
      <div class="card__content">
        <p class="card__description">${project.category}</p>
        <p class="card__teammates">${project.description}</p>
        <p class="card__applications">${project.applications}</p>
      </div>
    </article>
  `;
}
