export default function menu($btn_menu, $header) {
    document.addEventListener('click',(evt)=>{
        if (evt.target.matches('#btn-cv')|| evt.target.matches('#btn-cv *')) {
            window.open('public/cv/CV_RazielCasanovaRosas.pdf');
        }

        if (evt.target.matches('.burger-menu') || evt.target.matches('.burger-menu *')) {
            $btn_menu.classList.toggle('press');
            $header.classList.toggle('movil-menu');
        }
    });

}