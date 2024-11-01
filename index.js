document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("enrollment-title");
    const text = title.textContent;
    title.textContent = ""; 

    let index = 0;
    
    function typeLetter() {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetter, 50); 
        } else {
            title.classList.add("visible"); 
        }
    }
    
    
    window.addEventListener("scroll", function() {
        const rect = title.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            typeLetter();
            window.removeEventListener("scroll", arguments.callee);
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('content-container3');
    const navLinks = document.querySelectorAll('.nav-links3 a');
    const contents = document.querySelectorAll('.content3');

    function checkScroll() {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            container.classList.add('scroll-in3');
        }
    }

    window.addEventListener('scroll', checkScroll);

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const contentId = this.getAttribute('data-content');
            const contentToShow = document.getElementById(`content-${contentId}3`);

            contents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            contentToShow.classList.add('active');
            contentToShow.style.display = 'block';
        });
    });
});
$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    var contentContainer = $('.content-container3');

    if (scrollTop > 100) { 
        contentContainer.addClass('scroll-in3');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("imageContainer");
    const writeUp = document.getElementById("writeUp");
    const videoContainer = document.getElementById("videoContainer");
    const content = document.getElementById("content");
    const video = videoContainer.querySelector("video");

    const writeUpText = "Have a little peek...";

    
    setTimeout(() => {
        imageContainer.style.transform = "translateX(-80%)"; 
        writeUp.style.opacity = "1";
        writeUp.style.transform = "translateX(0)";
    }, 3000); 

   
    function typeWriter(text, i) {
        if (i < text.length) {
            content.innerHTML += text.charAt(i);
            setTimeout(() => typeWriter(text, i + 1), 100); 
        } else {
            
            setTimeout(() => {
                videoContainer.style.opacity = "1";
                videoContainer.style.transform = "translateY(0)";
                video.style.display = "block"; 
            }, 1500); 
        }
    }

   
    setTimeout(() => {
        typeWriter(writeUpText, 0);
    }, 5000); 
});
const logoMarquee = document.querySelector('.Primer_Brand__LogoSuite-module__LogoSuite__logobar-marqueeGroup___QnvBf');


logoMarquee.innerHTML += logoMarquee.innerHTML;


const speed = 30; 
logoMarquee.style.animationDuration = speed + 's';
