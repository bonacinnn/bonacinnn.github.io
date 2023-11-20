document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const header = document.querySelector('header');
    const nav = document.querySelectorAll('nav');
    const footer = document.querySelectorAll('footer');
    const sectionH2 = document.querySelectorAll('section h2');
    const sectionH3 = document.querySelectorAll('section h3');
    const sectionP = document.querySelectorAll('section p');
    const sectionA = document.querySelectorAll('section a');
    const sectionArticleH3 = document.querySelectorAll('section article h3');
    const sectionArticleP = document.querySelectorAll('section article p');
    const sectionArticleA = document.querySelectorAll('section article a');
    const form = document.querySelectorAll('form');
    const forminput = document.querySelectorAll('form input');
    const formbutton = document.querySelectorAll('form button');
    const formtextarea = document.querySelectorAll('form textarea');
    const headerbutton = document.querySelectorAll('header button');

    const btnDaltonismo = document.getElementById("btnDaltonismo");
    btnDaltonismo.addEventListener("click", toggleDaltonismo);

    function toggleDaltonismo() {
        body.classList.toggle("daltonismo");
        header.classList.toggle("daltonismo");
        nav.forEach(el => el.classList.toggle("daltonismo"));
        footer.forEach(el => el.classList.toggle("daltonismo"));
        sectionH2.forEach(el => el.classList.toggle("daltonismo"));
        sectionH3.forEach(el => el.classList.toggle("daltonismo"));
        sectionP.forEach(el => el.classList.toggle("daltonismo"));
        sectionA.forEach(el => el.classList.toggle("daltonismo"));
        sectionArticleH3.forEach(el => el.classList.toggle("daltonismo"));
        sectionArticleP.forEach(el => el.classList.toggle("daltonismo"));
        sectionArticleA.forEach(el => el.classList.toggle("daltonismo"));
        form.forEach(el => el.classList.toggle("daltonismo"));
        forminput.forEach(el => el.classList.toggle("daltonismo"));
        formbutton.forEach(el => el.classList.toggle("daltonismo"));
        formtextarea.forEach(el => el.classList.toggle("daltonismo"));
        headerbutton.forEach(el => el.classList.toggle("daltonismo"));
    }
});