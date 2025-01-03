document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Show the loader while the page is loading
window.addEventListener("load", function() {
    // Hide the loader once the page is fully loaded
    document.querySelector(".loader").style.display = "none";
});





//FECTH AND DISPLAY PROJECTS

// Wait until the document is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
 const currentDate = new Date().getFullYear();
const yearElement = document.getElementById("year");
yearElement.textContent = currentDate;
    // Select the container where the project cards will be added
    const projectsContainer = document.querySelector(".project-cards-container");

    // Function to fetch project data from GitHub
    async function fetchGitHubProjects() {
        try {
            const username = "suboimaurice"; // Replace with your GitHub username
            let api_URL = `https://api.github.com/users/${username}/repos`;

            // Fetch the list of repositories from your GitHub account
            const response = await fetch(api_URL);

            // Parse the response into a JavaScript object
            const repos = await response.json();

            // Optional: Filter repositories to display only a specific number or those meeting a certain criteria
            const filteredRepos = repos.slice(0, 5); // This will show only the first 2 repositories

            // Loop through the filtered repositories and create a card for each
            filteredRepos.forEach(repo => {
                // Create a new div element for the project card
                const projectCard = document.createElement("div");
                projectCard.className = "project-card"; // Add a class for styling

                // Add the HTML structure for the card
                projectCard.innerHTML = `
                <h3>${repo.name}</h3> <!-- Repository name -->
                <p>${repo.description || "No description available."}</p> <!-- Repository description or fallback text -->
                <a href="${repo.html_url}" target="_blank">View on GitHub</a> <!-- Link to the repository -->
                `;

                // Append the created card to the container in the HTML
                projectsContainer.appendChild(projectCard);
                
                //dynamically update date on footer
            });
        } catch (error) {
            // If there's an error (e.g., network issue), log it to the console
            console.error("Failed to fetch GitHub projects:", error);

            // Optional: Display an error message on the page
            projectsContainer.innerHTML = `
            <p style="color: red;">Unable to load projects. Please try again later.</p>
            `;
        }
    }

    // Call the function to fetch and display the GitHub projects
    fetchGitHubProjects();
});

//Dynamically Render Graphics Designs

// Wait until the DOM (Document Object Model) content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the container where the graphic design cards will be displayed
    const designContainer = document.querySelector(".design-cards-container");

    // Array of objects representing the graphic design projects
    // Each object contains the title, description, and image URL for a project
    const designs = [
        {
            title: "Project Title 1", // Title of the first design
            description: "A brief description of this graphic design project.", // Description of the first design
            image: "./images/ZENES_RESTAURANT/10.png" // Path to the image for the first design
        },
        {
            title: "Project Title 2", // Title of the second design
            description: "A brief description of this graphic design project.", // Description of the second design
            image: "./images/ZENES_RESTAURANT/11.png" // Path to the image for the second design
        },
        {
            title: "Project Title 3", // Title of the second design
            description: "A brief description of this graphic design project.", // Description of the second design
            image: "./images/ZENES_RESTAURANT/12.png" // Path to the image for the second design
        },
        {
            title: "Project Title 4", // Title of the second design
            description: "A brief description of this graphic design project.", // Description of the second design
            image: "./images/ZENES_RESTAURANT/13.png" // Path to the image for the second design
        }
    ];

    // Loop through each design in the array to dynamically create a card for it
    designs.forEach(design => {
        //Div element for the card
        const designCard = document.createElement("div");
        // Assign class name'design-card' to div
        designCard.className = "design-card";

        // Use innerHTML to structure the content of the card
        designCard.innerHTML = `
            <!-- Add the image for the design -->
            <img src="${design.image}" alt="${design.title}">
            <!-- Add the title of the design -->
            <h3>${design.title}</h3>
            <!-- Add the description of the design -->
            <p>${design.description}</p>
        `;

        // Append the created card to the container in the HTML
        designContainer.appendChild(designCard);
    });

    // Optional: Add a message if no designs are available
    if (designs.length === 0) {
        // Create a message element
        const noDesignsMessage = document.createElement("p");
        // Add text content to the message
        noDesignsMessage.textContent = "No graphic designs available at the moment.";
        // Style the message (optional)
        noDesignsMessage.style.color = "red";
        noDesignsMessage.style.fontSize = "16px";
        noDesignsMessage.style.textAlign = "center";
        // Append the message to the container
        designContainer.appendChild(noDesignsMessage);
    }
});


//Render Skills
document.addEventListener("DOMContentLoaded", () => {
    // Select the canvas element where the chart will be rendered
    const ctx = document.getElementById("skillsChart").getContext("2d");

    // Placeholder data for the chart (real-time data can replace this)
    const skillsData = {
        labels: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "Git"],
        // Proficiency percentages
        datasets: [
            {
                label: "Proficiency (%)",
                data: [85, 70, 60, 50, 65, 75], // Replace with real-time data
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)", // Color for HTML
                    "rgba(54, 162, 235, 0.6)", // Color for CSS
                    "rgba(255, 206, 86, 0.6)", // Color for JavaScript
                    "rgba(75, 192, 192, 0.6)", // Color for PHP
                    "rgba(153, 102, 255, 0.6)", // Color for Bootstrap
                    "rgba(255, 159, 64, 0.6)",  // Color for Git
                ],
                borderWidth: 1, // Border thickness for each segment
                borderColor: "#fff" // Border color
            }
        ]
    };

    // Configure the chart settings
    const config = {
        type: "pie", // Type of chart (options: bar, pie, line, etc.)
        data: skillsData,
        options: {
            responsive: true, // Makes the chart responsive
            plugins: {
                legend: {
                    position: "bottom" // Position of the chart legend
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            // Customize tooltip to show skill and percentage
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    };

    // Create and render the chart
    const skillsChart = new Chart(ctx, config);

    // TODO: Fetch real-time data from platforms via APIs
    // Example: Use APIs from W3Schools, Codecademy, or other learning platforms
});


