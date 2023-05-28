fetch('./datas.json')
  .then(response => response.json())
  .then(data => {
    const articlesContainer = document.querySelector('#articles-container');

    // Boucle pour afficher tous les titres et images des articles
    data.forEach(article => {
      const articleDiv = document.createElement('div');
      const articleLink = document.createElement('a');
      const articleTitle = document.createElement('h2');
      const articleImage = document.createElement('img');

      articleTitle.innerText = article.title;
      articleImage.src = article.image;

      articleLink.href = '#';
      articleLink.addEventListener('click', () => {
        // Fonction pour afficher toutes les données de l'article
        displayArticleData(article.id);
      });

      articleLink.appendChild(articleTitle);
      articleLink.appendChild(articleImage);
      articleDiv.appendChild(articleLink);
      articlesContainer.appendChild(articleDiv);
    });
  });

function displayArticleData(articleId) {
  fetch('votre-fichier-json.json')
    .then(response => response.json())
    .then(data => {
      const article = data.find(article => article.id === articleId);
      // Afficher toutes les données de l'article dans un élément HTML
      console.log(article);
    });
}
