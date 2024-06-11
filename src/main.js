import { Application } from '@splinetool/runtime';

document.addEventListener('DOMContentLoaded', () => {
    /* תכירו את האירדוק */
    const canvas = document.getElementById('canvas3d');
    if (canvas) {
        const app = new Application(canvas);
        app.load('https://prod.spline.design/oZgRYkMEgu3a1uxW/scene.splinecode');

        
    }

    /* מבנה האוזן */
    const canvas2 = document.getElementById('canvas3d-2');
    if (canvas2) {
        const app2 = new Application(canvas2);
        app2.load('https://prod.spline.design/UJ7w4d1Z6fP6QODX/scene.splinecode');
    }

    /* אינטרקציה מרכזית */
    const canvas3 = document.getElementById('canvas3d-3');
    if (canvas3) {
        const app3 = new Application(canvas3);
        app3.load('https://prod.spline.design/BWCyfORJRu-rXlGL/scene.splinecode');
      

    }

   /* תכירו את האירדוק  ילדים */
    const canvas4 = document.getElementById('canvas3d-4');
    if (canvas4) {
        const app4 = new Application(canvas4);
     
        app4.load('https://prod.spline.design/TPe5FvLFTUuWlcZ3/scene.splinecode');

    }
 /* אינטרקציה מרכזית ילדים */

    const canvas5 = document.getElementById('canvas3d-5');
    if (canvas5) {
        const app5 = new Application(canvas5);
     
        app5.load('https://prod.spline.design/QN-OXHp2sHcP9Wme/scene.splinecode');


    }

    const canvas6 = document.getElementById('canvas3d-6');
    if (canvas6) {
        const app6 = new Application(canvas6);
     
        app6.load('https://prod.spline.design/f9VQueIp9pTsflY4/scene.splinecode');


    }
    const canvas7 = document.getElementById('canvas3d-7');
    if (canvas7) {
        const app7 = new Application(canvas7);
     
        app7.load('https://prod.spline.design/slrccaZijrkTmJbH/scene.splinecode');


    }

    const canvas8 = document.getElementById('canvas3d-8');
    if (canvas8) {
        const app8 = new Application(canvas8);
     
        app8.load('https://prod.spline.design/t3qgwTKyh81OtSEa/scene.splinecode');


    }


});

window.addEventListener('load', function() {
    var viewer = document.querySelector('spline-viewer');
    if (viewer) {
        var canvas = viewer.shadowRoot.querySelector('canvas');
        if (canvas) {
            if (window.innerWidth <= 600) {
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                canvas.style.maxWidth = '400px'; // Adjust as needed for smaller screens
                canvas.style.maxHeight = '300px'; // Adjust as needed for smaller screens
                canvas.style.marginRight = '-8%';
            } else {
               
                canvas.style.width = '1642px';
                canvas.style.marginRight = '-45%';
                canvas.style.margintop =  '-24%';
             
            }
        }
    }
});


