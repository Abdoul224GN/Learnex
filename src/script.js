import AOS from 'aos';
import 'aos/dist/aos.css';
console.log("slaut")
AOS.init({
    duration: 500,       // Durée par défaut (ms)
    easing: 'ease-in-out', // Courbe d’animation par défaut
    delay: 200,          // Délai global (ms)
    offset: 150,         // Décalage pour déclencher l’animation
    once: true,          // Animation une seule fois
    mirror: false,
});
