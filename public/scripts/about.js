export default function acerca(modal, $textModal, $imgModal) {

    const $contenidoEstudios = [
        {
            imagen : 'public/img/studies/CETIS1.jpg',
            texto : 'Centro de Estudios Tecnológicos, Industrial y de Servicios N°1 | Programación(2014 - 2017)'
        },
        {
            imagen : 'public/img/studies/Instituto Tecnologico de Tlahuac.jpg',
            texto : 'Instituto Tecnológico de Tláhuac | Ing.Sistemas Computacionales(2017 - 2022)'
        },
        {
            imagen : 'public/img/studies/computer.jpg',
            texto : 'Formación autodidacta'
        }
    ];

    const $contenidoPasatiempos = [
        {
            imagen : 'public/img/hobbies/soccer.jpg',
            texto : 'Me gusta practicar deporte, en especial fútbol'
        },
        {
            imagen : 'public/img/hobbies/draw.jpg',
            texto : 'Me gusta dibujar personajes animados'
        },
        {
            imagen : 'public/img/hobbies/design.jpg',
            texto : 'Me gusta digitalizar mis dibujos para mejorar mis habilidades en herramientas de diseño'
        }
    ];

    let aux = 0;
    let option = '';

    document.addEventListener('click',(evt)=>{
        if (evt.target.dataset.study) {
            option = evt.target.dataset.study;
            modal.classList.add('active');
            for (const iterator of $contenidoEstudios) {
                $imgModal.innerHTML += `
                <img src='${iterator.imagen}'>
                `;
            }
            $textModal.innerHTML = `<p>${$contenidoEstudios[0].texto}</p>`;
        }

        if (evt.target.dataset.hobbies) {
            option = evt.target.dataset.hobbies;
            modal.classList.add('active');
            for (const iterator of $contenidoPasatiempos) {
                $imgModal.innerHTML += `
                <img src='${iterator.imagen}'>
                `;
            }
            $textModal.innerHTML = `<p>${$contenidoPasatiempos[0].texto}</p>`;
        }

        if (evt.target.dataset.closemodal) {
            modal.classList.remove('active');
            $imgModal.innerHTML = ' ';
            $textModal.innerHTML = '<p></p>';
            aux = 0;
            option = '';
        }

        if ((evt.target.matches('.btn-back') || evt.target.matches('.btn-back *')) && aux > 0) {
            $imgModal.children[aux].style.transform = `translateX(${100*aux}%)`;
            aux--;
            if (option === 'estudios') {
                $textModal.innerHTML = `<p>${$contenidoEstudios[aux].texto}</p>`;
            }
            if (option === 'pasatiempos') {
                $textModal.innerHTML = `<p>${$contenidoPasatiempos[aux].texto}</p>`;
            }
        }

        if ((evt.target.matches('.btn-next') || evt.target.matches('.btn-next *')) && aux < $imgModal.childElementCount-1) {
            aux++;
            $imgModal.children[aux].style.transform = `translateX(${-100*aux}%)`;
            if (option === 'estudios') {
                $textModal.innerHTML = `<p>${$contenidoEstudios[aux].texto}</p>`;
            }
            if (option === 'pasatiempos') {
                $textModal.innerHTML = `<p>${$contenidoPasatiempos[aux].texto}</p>`;
            }
        }
        
    });
}

