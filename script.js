
// Toggle the mobile navigation menu
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


// project page showProject part

let crossBtn = document.querySelectorAll('.i1');
let projectContainer = document.querySelectorAll('.show-project');
let showButton = document.querySelectorAll('.showcasing');

// Hiding projects when clicking the cross buttons
crossBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (projectContainer[index]) {
            projectContainer[index].style.display = "none";
        }
    });
});

// Showing projects when clicking the show buttons
showButton.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (projectContainer[index]) {
            projectContainer[index].style.display = "block";
        }
    });
});
//animating cursor part
const trailCount = 7; // Number of trails
        const trails = [];

        for (let i = 0; i < trailCount; i++) {
            const div = document.createElement("div");
            div.classList.add("trail");
            document.body.appendChild(div);
            trails.push(div);
        }

        let current = 0;

        document.addEventListener("mousemove", (e) => {
            const trail = trails[current];

            // Adjust position based on scroll
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;

            // Position the trail exactly at the cursor, accounting for scroll
            trail.style.left = `${e.clientX + scrollX}px`;
            trail.style.top = `${e.clientY + scrollY}px`;

            // Generate random shades of purple for each trail
            // trail.style.background = `hsl(${Math.random() * 40 + 240}, 100%, 50%)`;

            // Reset opacity and fade out smoothly
            trail.style.opacity = "1";
            setTimeout(() => {
                trail.style.opacity = "0";
            }, 300);

            current = (current + 1) % trailCount;
        });



  //Scroll reveal part      
  ScrollReveal().reveal('.identity-section',{ 
    origin: 'top', 
    distance: '50px', 
    duration: 1000, 
    easing: 'ease-out',
    opacity: 0 
  });

  // Reveal other elements with different settings if needed
  ScrollReveal().reveal('.skill-card', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 200,
    opacity: 0,
    interval: 100
  });

  ScrollReveal().reveal('.thanks-message', {
    origin: 'top',
    distance: '50px',
    duration: 1200,
    delay: 500,
    opacity: 0
  });

  ScrollReveal().reveal('.hero-section', {
    origin: 'right',
    distance: '500px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.card', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 300,
    easing: 'ease-in-out',
    interval: 200, // Staggered effect
    reset: true
  });

  ScrollReveal().reveal('.contact-me', {
    opacity: 0,
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true
  });


    // Identity section - slides in from left
    ScrollReveal().reveal('.identity-section', {
      origin: 'left',
      distance: '500px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true
    });
  
    // Project cards - slide up with staggered effect
    ScrollReveal().reveal('.project-card', {
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      interval: 150, // Staggered effect for each card
      reset: true
    });
  

    //contact form
 document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from redirecting

  const formData = new FormData(this); // Get form data

  fetch("https://formspree.io/f/xjkybppq", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById("responseMessage").innerText = "Thank you! Your message has been sent.";
      document.getElementById("contactForm").reset(); // Clear form fields
  })
  .catch(error => {
      document.getElementById("responseMessage").innerText = "Something went wrong. Try again.";
  });
});

