
  document.addEventListener("DOMContentLoaded", function () {
  const contab = document.getElementById("contactBtn");
  contab.onclick = function(){
   showform();
  } 

  function showform(){
   const contaform = document.getElementById("contactModal");
   contaform.style.display = 'block';
  } 
    document.getElementById('closeContactModal').onclick = function(){
      const contaform = document.getElementById("contactModal");
   contaform.style.display = 'none';
    };

    document.getElementById("contabutn").onclick = function() {
        showform();
    }

    document.getElementById("mobileContactBtn").onclick = function() {
        showform();
    }

    

     document.getElementById('ecardshow').onclick = function(){
      document.getElementById("eCard").style.display = 'block';
      document.getElementById("eCardOverlay").style.display = 'block';
     };
     document.getElementById('closeECard').onclick= function(){
      
      document.getElementById("eCard").style.display = 'none';
      document.getElementById("eCardOverlay").style.display = 'none';
     };

     document.getElementById("eCardOverlay").onclick = function(){
      document.getElementById("eCard").style.display = 'none';
      document.getElementById("eCardOverlay").style.display = 'none';

     }

    });



//</script><script id="view-counter">
      document.addEventListener("DOMContentLoaded", function () {
        const viewCount = document.getElementById("viewCount");
        const incrementBtn = document.getElementById("incrementBtn");
        // Get stored count from localStorage or set default
        let count = localStorage.getItem("portfolioViews") || 1254;
        count = parseInt(count);
        // Format number with commas
        function formatNumber(num) {
          return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        // Update view count display
        function updateViewCount() {
          viewCount.textContent = formatNumber(count);
          localStorage.setItem("portfolioViews", count);
        }
        // Increment count when button is clicked
        incrementBtn.addEventListener("click", function () {
          count++;
          updateViewCount();
          // Add heart animation
          const heart = document.createElement("div");
          heart.classList.add("absolute", "text-red-500", "text-2xl", "animate-ping");
          heart.innerHTML = '<i class="ri-heart-fill"></i>';
          heart.style.top = "50%";
          heart.style.left = "50%";
          heart.style.transform = "translate(-50%, -50%)";
          incrementBtn.appendChild(heart);
          // Remove heart after animation
          setTimeout(() => {
            heart.remove();
          }, 1000);
        });
        // Increment view count on page load (once per session)
        if (!sessionStorage.getItem("viewCounted")) {
          count++;
          updateViewCount();
          sessionStorage.setItem("viewCounted", "true");
        } else {
          updateViewCount();
        }
      });
    




    // Handle form submission
            const contactForm = document.getElementById("contactForm");

        contactForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const formData = new FormData(contactForm);
          // Here you would typically send the form data to your server
          console.log("Form submitted:", Object.fromEntries(formData));
          contactForm.reset();
          closeContactModal();

          // Show success message
          const toast = document.createElement("div");
          toast.className =
            "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-up";
          toast.textContent = "Message sent successfully!";
          document.body.appendChild(toast);

          setTimeout(() => {
            toast.remove();
          }, 5000);


          
        });

                const contactModal = document.getElementById("contactModal");
                function closeContactModal() {
          contactModal.style.display = "none";
          document.body.style.overflow = "";
        }


    // //<script id="navigation-system">
      // document.addEventListener("DOMContentLoaded", function () {
        
        const menuBtn = document.getElementById("menuBtn");
        const mobileMenu = document.getElementById("mobileMenu");

        
    //     // Mobile menu
        menuBtn.addEventListener("click", () => {
          mobileMenu.classList.remove("translate-x-full");
        });
        closeMenuBtn.addEventListener("click", () => {
          mobileMenu.classList.add("translate-x-full");
        });
    // //     /
        
    //   
    //     });
        

    
    //     // Update navigation links based on current slide
        function updateNavLinks() {
          const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
          navLinks.forEach((link, index) => {
            link.classList.toggle("active", index === 1);
          });
        }
    
       
         
          
        
        
        
      // });

    
    
    
        
        
       
    
