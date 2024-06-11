// function toggleNav(){
//     document.getElementById("main-nav").classList.toggle("hide-mobile");
// }

// function toggleNav() {
//     var nav = document.getElementById("main-nav");
//     if (nav.style.width === "250px") {
//         nav.style.width = "0";
//     } else {
//         nav.style.width = "250px";
//     }
// }

    // תקלות נפוצות

    document.addEventListener("DOMContentLoaded", function() {
        var acc = document.getElementsByClassName("accordion");
        for (var i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    });
    


  

function toggleNavBar() {
    var nav = document.getElementById("mobile-nav");
    if (nav.style.width === "250px") {
        nav.style.width = "0";
    } else {
        nav.style.width = "250px";
    }
}




  
function navigateToDoctorPage() {
    window.location.href = "http://127.0.0.1:5500/doctorPage.html";
    console.log("doc");
 }



    // קרוסלה דף בית
document.addEventListener('DOMContentLoaded', () => {
    let list = document.querySelector(".list");

  
    let item = document.querySelector(".item");
    let itemWidth;

   
    const initializeItemWidth = () => {
        item = document.querySelector(".item");
        if (item) {
            itemWidth = item.offsetWidth;
            window.handleClick = function(direction) {
                if(direction === "previous") {
                    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
                } else {
                    list.scrollBy({ left: itemWidth, behavior: "smooth" });
                }
            }
        } else {
            // If the item is not rendered yet, try again after a short delay
            requestAnimationFrame(initializeItemWidth);
        }
    };

    // Call the initialization function initially
    initializeItemWidth();
});


    // איסורים והגבלות שימוש

  document.addEventListener('DOMContentLoaded', () => {
    const flipCards = document.querySelectorAll('.flip-card');

    flipCards.forEach(card => {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
    });
  });


    // המלצות מהעולם  

  function showPopup(country) {
    const popup = document.getElementById('popup');
    const videoIframe = document.getElementById('video-iframe');

    let videoUrl = '';

    switch (country) {
        case 'Israel':
            videoUrl = 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/Eardoc.store/videos/930844451966430/&show_text=0&width=560';
            break;
        case 'UK':
            videoUrl = 'https://www.youtube.com/embed/Kx0Whg-KOxg';
            break;
        case 'US':
            videoUrl = 'https://www.youtube.com/embed/_7OPmT3yJWY';
            break;
        case 'ND':
            videoUrl = 'https://www.youtube.com/embed/oyki6anJwR0';
            break;
        case 'Hawaii':
            videoUrl = 'https://www.youtube.com/embed/1ZPIhMGBsaM';
            break;
        case 'Asia':
            videoUrl = 'https://www.youtube.com/embed/KpFTmjh-4qg';
            break;
    }

    videoIframe.src = videoUrl;

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    const videoIframe = document.getElementById('video-iframe');
    popup.style.display = 'none';
    videoIframe.src = '';  // Stop the video when the popup is closed
}

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });
});



