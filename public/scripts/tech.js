export default function tecnologias() {

    const $content_tech_frontend = document.querySelector('.content-tech-frontend'), 
        $content_tech_backend = document.querySelector('.content-tech-backend'), 
        $content_tech_DB = document.querySelector('.content-tech-DB'), 
        $content_tech_tools = document.querySelector('.content-tech-tools');

    document.addEventListener('click',(evt)=>{
        if (evt.target.matches('#programing-tools')) {
            techVisualTranslate("translate(0, 0)", "translate(100vw, 0)", "translate(0, 100vh)", "translate(-100vw, 0)");
            techVisualOpacity("1","0","0","0");
            
        }
        if (evt.target.matches('#SGBD')) {
            techVisualTranslate("translate(0, -100vh)", "translate(0, 0)", "translate(0, 100vh)", "translate(-100vw, 0)");
            techVisualOpacity("0","1","0","0");
            
        }
        if (evt.target.matches('#tech-backend')) {
            techVisualTranslate("translate(0, -100vh)", "translate(100vw, 0)", "translate(0, 0)", "translate(-100vw, 0)");
            techVisualOpacity("0","0","1","0");
            
        }
        if (evt.target.matches('#tech-frontend')) {
            techVisualTranslate("translate(0, -100vh)", "translate(100vw, 0)", "translate(0, 100vh)", "translate(0, 0)");
            techVisualOpacity("0","0","0","1"); 
             
        }
    });

    const techVisualTranslate = (translateT,translateR,translateB,translateL) =>{
        $content_tech_tools.style.transform = translateT;
        $content_tech_DB.style.transform = translateR;
        $content_tech_backend.style.transform = translateB;
        $content_tech_frontend.style.transform = translateL;
    }

    const techVisualOpacity = (opacityT,opacityR,opacityB,opacityL)=>{
        $content_tech_tools.style.opacity = opacityT;
        $content_tech_DB.style.opacity = opacityR;
        $content_tech_backend.style.opacity = opacityB;
        $content_tech_frontend.style.opacity = opacityL;
    }
}