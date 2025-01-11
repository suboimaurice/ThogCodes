document.addEventListener("DOMContentLoaded", () => {
 const newsContainer = document.getElementById("newsContainer");
 if (!newsContainer) {
  console.error("newsContainer element not found");
  return;
 }

 async function fetchNews() {
  try {
   const apiKey = "4148e5436cb6401a872ce633d5012e33";
   const apiURL = `https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=${apiKey}`;
   const response = await fetch(apiURL);

   if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${response.status}`);
   }

   const handleResponse = await response.json();

   if (handleResponse.articles && handleResponse.articles.length > 0) {
    handleResponse.articles.forEach((article) => {
     const newsCard = document.createElement("div");
     newsCard.className = "newsCard";
     newsCard.innerHTML = `
     <h3>${article.title}</h3>
     <p>${article.description || "No description for this article."}</p>
     <a href="${article.url}" target="_blank">Read more</a>
     `;
     newsContainer.appendChild(newsCard);
    });
   } else {
    newsContainer.innerHTML = "<p>No news updates available.</p>";
   }
  } catch (error) {
   console.error("There was an error fetching news:", error);
   newsContainer.innerHTML = "<p>Failed to fetch news. Please try again later.</p>";
  }
 }

 fetchNews();
});