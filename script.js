// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Typing effect for hero title
const typingText = document.getElementById("typing-text")
const text = "H. Sethrongkyu Sangtam"
let index = 0

function typeWriter() {
  if (index < text.length) {
    typingText.textContent = text.slice(0, index + 1)
    index++
    setTimeout(typeWriter, 100)
  }
}

// Start typing effect after page load
window.addEventListener("load", () => {
  typingText.textContent = ""
  setTimeout(typeWriter, 1000)
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")

      // Animate achievement cards with delay
      if (entry.target.classList.contains("achievements")) {
        const cards = entry.target.querySelectorAll(".achievement-card")
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("visible")
          }, index * 200)
        })
      }
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section)
})

// Active navigation highlighting
const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-link")

function updateActiveNav() {
  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
}

window.addEventListener("scroll", updateActiveNav)

// Gallery Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('modalCaption');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const span = document.getElementsByClassName('modal-close')[0];

    // Commented out to disable click functionality
    // galleryItems.forEach(item => {
    //     item.addEventListener('click', function() {
    //         const img = this.querySelector('img');
    //         const caption = this.querySelector('.gallery-caption');
            
    //         modal.style.display = 'flex';
    //         modalImg.src = img.src;
    //         modalImg.alt = img.alt;
    //         if (caption) {
    //             captionText.innerHTML = caption.innerHTML;
    //         } else {
    //             captionText.innerHTML = img.alt;
    //         }
    //         document.body.style.overflow = 'hidden';
    //     });
    // });

    if (span) {
        span.onclick = function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Gallery item hover effects
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "scale(1.05) rotateY(5deg)"
  })

  item.addEventListener("mouseleave", () => {
    item.style.transform = "scale(1) rotateY(0deg)"
  })
})

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  const rate = scrolled * -0.5
  hero.style.transform = `translateY(${rate}px)`
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.5s ease"
  setTimeout(() => {
    document.body.style.opacity = "1"
  }, 100)
})
