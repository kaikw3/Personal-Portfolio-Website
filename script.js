function opentab(projectId) {
    // Hide all project descriptions
    const descriptions = document.querySelectorAll('.project-description');
    descriptions.forEach(function(desc) {
      desc.style.display = 'none';
    });
  
    // Remove 'active' class from all project links
    const links = document.querySelectorAll('.project-link');
    links.forEach(function(link) {
      link.classList.remove('active');
    });
  
    // Show the selected project description
    document.getElementById('description-' + projectId).style.display = 'block';
    
    // Add 'active' class to the clicked project link
    // This assumes that the element that triggers the opentab call has the same text content as the projectId
    Array.from(links).find(link => link.textContent.includes(projectId)).classList.add('active');
  }

  // Call this function when the page loads to display the first project
function initializeTabs() {
    // You can choose to display any of the projects by default
    opentab('Weave');
  }
  
  // Execute the initializeTabs function when the window loads
  window.onload = initializeTabs;
  
  