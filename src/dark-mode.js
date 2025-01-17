const darkmode = () => {
    const themetogglebtns = document.querySelectorAll('#theme-toggle');

    const theme = localStorage.getItem('theme');

    theme && document.body.classList.add(theme);

    const handlethemetoggle = () => {
        document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme' , 'light-mode');
            } else {
                localStorage.removeItem('theme');
            }
    }
    
    themetogglebtns.forEach(btn => {
        btn.addEventListener('click' ,  handlethemetoggle);
    });

};

export default darkmode;