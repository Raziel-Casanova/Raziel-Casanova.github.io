export default function portafolio(modal, $textModal, $imgModal) {
    const $content_portfolio_practice = document.querySelector('.content-practice'),
            $content_portfolio_projects = document.querySelector('.content-projects'),
            $content_portfolio_other = document.querySelector('.content-other'),

            $contenidoProyectos = [
                [
                    {
                        imagen : 'public/img/projects/proyectoGTyV1.jpg'
                    },
                    {
                        imagen : 'public/img/projects/proyectoGTyV2.jpg'
                    },
                    {
                        imagen : 'public/img/projects/proyectoGTyV3.jpg'
                    }
                ],
                [
                    {
                        imagen : 'public/img/projects/proyectoRGF1.jpg'
                    },
                    {
                        imagen : 'public/img/projects/proyectoRGF2.jpg'
                    },
                    {
                        imagen : 'public/img/projects/proyectoRGF3.jpg'
                    }
                ]
            ],
            $contenidoPracticas = [
                [
                    {imagen : 'public/img/practices/practicaITT1.jpg'},
                    {imagen : 'public/img/practices/practicaITT2.jpg'},
                    {imagen : 'public/img/practices/practicaITT3.jpg'}
                ],
                [
                    {imagen : 'public/img/practices/practicaCitapp1.jpg'},
                    {imagen : 'public/img/practices/practicaCitapp2.jpg'},
                    {imagen : 'public/img/practices/practicaCitapp3.jpg'}
                ]
            ],
            $contenidoOtros = [
                [
                    {imagen : 'public/img/others/paginaEconomia1.jpg'},
                    {imagen : 'public/img/others/paginaEconomia2.jpg'},
                    {imagen : 'public/img/others/paginaEconomia3.jpg'}
                ],
                [
                    {imagen : ''},
                    {imagen : ''},
                    {imagen : ''}
                ]
            ];
    let aux = 0;

    document.addEventListener('click', (evt)=>{
        if (evt.target.matches('#practice')) {
            portfolioVisualTranslate('translate(0,0)','translate(0,100vh)','translate(100vw,0)');
            portfolioVisualOpacity('1','0','0');
        }
        if (evt.target.matches('#projects')) {
            portfolioVisualTranslate('translate(-100vw,0)','translate(0,0)','translate(100vw,0)');
            portfolioVisualOpacity('0','1','0');
        }
        if (evt.target.matches('#other')) {
            portfolioVisualTranslate('translate(-100vw,0)','translate(0,100vh)','translate(0,0)');
            portfolioVisualOpacity('0','0','1');
        }

        if (evt.target.dataset.itt === 'gtyv') {
            modal.classList.toggle('active');
            for (const iterator of $contenidoProyectos[0]) {
                $imgModal.innerHTML += `
                    <img src=${iterator.imagen}>
                `;   
            }
            $textModal.innerHTML = `<p>Colaboraci??n en el desarrollo del sitio web para el departamento de GTyV del Instituto Tecnol??gico de Tl??huac.</p>`;
        }

        if (evt.target.dataset.rgflores) {
            modal.classList.toggle('active');
            for (const iterator of $contenidoProyectos[1]) {
                $imgModal.innerHTML += `
                    <img src=${iterator.imagen}>
                `;   
            }
            $textModal.innerHTML = `<p>Dise??o, desarrollo y despliegue del sistema para el control de rentas de la empresa RGFlroes perteneciente al grupo FMTOR.</p>`;
        }

        if (evt.target.dataset.itt === 'ittlahuac') {
            modal.classList.toggle('active');
            for (const iterator of $contenidoPracticas[0]) {
                $imgModal.innerHTML += `
                    <img src=${iterator.imagen}>
                `;
            }
            $textModal.innerHTML = `<p>Dise??o y desarrollo de una p??gina web publicitaria para el Instituto Tecnol??gico de Tl??huac donde se promocionan las diferentes ofertas acad??micas.</p>`;
        }

        if (evt.target.dataset.citapp) {
            modal.classList.toggle('active');
            for (const iterator of $contenidoPracticas[1]) {
                $imgModal.innerHTML += `
                    <img src=${iterator.imagen}>
                `;
            }
            $textModal.innerHTML = `<p>Colaboraci??n en el dise??o y desarrollo de una Aplicaci??n Web Progresiva (PWA), que da a conocer peque??os negocios dentro de la Alcald??a Tl??huac ofreciendo sus servicios mediante la aplicaci??n.</p>`;
        }

        if (evt.target.dataset.itt === 'economia') {
            modal.classList.toggle('active');
            for (const iterator of $contenidoOtros[0]) {
                $imgModal.innerHTML += `
                    <img src=${iterator.imagen}>
                `;
            }
            $textModal.innerHTML = `<p>Dise??o y desarrollo de una p??gina web que brinda informaci??n sobre la econom??a en los continentes.</p>`;
        }
        
    });

    const portfolioVisualTranslate = (translateL, translateB, translateR) =>{
        $content_portfolio_practice.style.transform = translateL;
        $content_portfolio_projects.style.transform = translateB;
        $content_portfolio_other.style.transform = translateR;
    }

    const portfolioVisualOpacity = (opacityL, opacityB, opacityR) =>{
        $content_portfolio_practice.style.opacity = opacityL;
        $content_portfolio_projects.style.opacity = opacityB;
        $content_portfolio_other.style.opacity = opacityR; 
    }
}