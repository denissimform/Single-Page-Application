const targetDiv = document.getElementById('page-preview');
const links = document.querySelectorAll('.navlink');

const removeActiveClass = () => {
    links.forEach((ele) => {
        ele.classList.remove('active-link');
    });
}

// create xml object
const xml = new XMLHttpRequest();

const fetchData = (event) => {
    xml.open('GET', "./pages/" + event.target.dataset.viewPage + ".html", true);
    xml.send();
    xml.onerror = (err) => {
        console.log(err);
    }

    xml.onreadystatechange = () => {
        if (xml.readyState === 4) {
            targetDiv.innerHTML = xml.responseText;
            removeActiveClass();
            event.target.classList.add('active-link');
        }
    }
}

links.forEach((ele) => {
    ele.addEventListener('click', fetchData);
    if (ele.dataset.default) {
        ele.click();
    }
});