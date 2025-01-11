document.addEventListener("DOMContentLoaded", () => {
 // Smooth Scroll for Anchors
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
   e.preventDefault();
   document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
   });
  });
 });

 // Hide Loader
 window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (loader) loader.style.display = "none";
 });


 // Update Year in Footer
 const yearElement = document.getElementById("year");
 if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
 }

 // Fetch GitHub Projects
 const projectsContainer = document.querySelector(".project-cards-container");
 async function fetchGitHubProjects() {
  try {
   const username = "suboimaurice";
   const api_URL = `https://api.github.com/users/${username}/repos`;
   const response = await fetch(api_URL);
   const repos = await response.json();

   if (repos.length > 0) {
    repos.slice(0, 8).forEach(repo => {
     const projectCard = document.createElement("div");
     projectCard.className = "project-card";
     projectCard.innerHTML = `
     <h3>${repo.name}</h3>
     <p>${repo.description || "No description available."}</p>
     <a href="${repo.html_url}" target="_blank">View on GitHub</a>
     `;
     projectsContainer.appendChild(projectCard);
    });
   } else {
    projectsContainer.innerHTML = `<p>No projects available.</p>`;
   }
  } catch (error) {
   console.error("Failed to fetch GitHub projects:", error);
   projectsContainer.innerHTML = `<p>Unable to load projects.</p>`;
  }
 }
 if (projectsContainer) {
  fetchGitHubProjects();}

  // Render Graphic Design Cards
  const designContainer = document.querySelector(".design-cards-container");
  if (designContainer) {
   const designs = [{
    title: "Project Title 1",
    // Title of the first design
    description: "A brief description of this graphic design project.",
    // Description of the first design
    image: "./images/ZENES_RESTAURANT/10.png" // Path to the image for the first design
   },
    {
     title: "Project Title 2",
     // Title of the second design
     description: "A brief description of this graphic design project.",
     // Description of the second design
     image: "./images/ZENES_RESTAURANT/11.png" // Path to the image for the second design
    },
    {
     title: "Project Title 3",
     // Title of the second design
     description: "A brief description of this graphic design project.",
     // Description of the second design
     image: "./images/ZENES_RESTAURANT/12.png" // Path to the image for the second design
    },
    {
     title: "Project Title 4",
     // Title of the second design
     description: "A brief description of this graphic design project.",
     // Description of the second design
     image: "./images/ZENES_RESTAURANT/13.png" // Path to the image for the second design
    }];
   designs.forEach(design => {
    const designCard = document.createElement("div");
    designCard.className = "design-card";
    designCard.innerHTML = `
    <img src="${design.image}" alt="${design.title}">
    <h3>${design.title}</h3>
    <p>${design.description}</p>
    `;
    designContainer.appendChild(designCard);
   });
  }
  // Skills Chart
  const skillsChartElement = document.getElementById("skillsChart");
  if (skillsChartElement) {
   const ctx = skillsChartElement.getContext("2d");
   const skillsData = {
    labels: ["HTML",
     "CSS",
     "JavaScript",
     "PHP"],
    datasets: [{
     label: "Proficiency (%)",
     data: [90,
      80,
      70,
      60],
     backgroundColor: ["#ff6384",
      "#36a2eb",
      "#ffce56",
      "#4bc0c0"],
    }]
   };
   new Chart(ctx, {
    type: "pie", data: skillsData
   });
  }

  // Redirect to about_me.html
  const readMoreBtn = document.getElementById("read-more-btn");
  if (readMoreBtn) {
   readMoreBtn.addEventListener("click", () => {
    window.location.href = "src/aboutme.html";
   });
  }




  const updatesLink = document.querySelector('a[href="src/updates.html"]');
  if (updatesLink) {
   updatesLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "src/updates.html";
   });
  }


 });