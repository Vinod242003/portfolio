const mobilenav = () => {
    const headerbtn =  document.querySelector('.header__bar');
    const mobilenav =  document.querySelector('.mobile-nav');
    const mobilelinks = document.querySelectorAll('.mobile-nav__links')
    
    let ismobilenavOpen = false;
    
    headerbtn.addEventListener('click' , () => {
        ismobilenavOpen = !ismobilenavOpen
        if (ismobilenavOpen) {
            mobilenav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        } else {
            mobilenav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }
    } );

    mobilelinks.forEach(links => {
        links.addEventListener('click' , () => {
            mobilenav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    });
};

export default mobilenav;
