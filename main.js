var typed = new Typed(".text", { 
    strings: ["Information Technology Student" , "Web Developer"], 
    typeSpeed: 100, 
    backSpeed: 100, 
    backDelay: 1000, 
    loop: true 
});

document.addEventListener("DOMContentLoaded", function () {
    // Animasi Circular Progress
    document.querySelectorAll(".circle").forEach(circle => {
      let percent = circle.getAttribute("data-percent");
      let angle = (percent / 100) * 360;
      circle.style.background = `conic-gradient(#007bff ${angle}deg, #ddd ${angle}deg)`;
    });
  
    // Animasi Bar Progress
    setTimeout(() => {
      document.querySelectorAll(".progress").forEach(progress => {
        let width = progress.style.width;
        progress.style.width = "0";
        setTimeout(() => {
          progress.style.width = width;
        }, 300);
      });
    }, 500);
  });

    // Smooth Scroll
    $(document).ready(function() {
        $('a[href^="#"]').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({
               scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);
         });
     });
    