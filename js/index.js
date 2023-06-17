import { blogArray } from './data.js';

document.addEventListener('click', (e) => {
    if (e.target.id === "view-more-link") {
        handleViewMore();
    } else if (e.target.id === "bars-btn") {
        handleBars();
    }
});

function activePage() {
    const currentPageUrl = window.location.href;
    const options = document.querySelectorAll('.bar-option');
    options.forEach(option => {
        if (option.href === currentPageUrl) {
            option.classList.add('strong');
            option.classList.remove('less-strong');
        }
    });
}

let isHidden = true;

function handleViewMore() {
    const viewMoreLink = document.getElementById("view-more-link");
    const hideSections = document.querySelectorAll('.hide');


    hideSections.forEach(function (section) {
        section.style.display = isHidden ? 'block' : 'none';
    });

    viewMoreLink.textContent = isHidden ? 'View Less' : 'View More';
    isHidden = !isHidden;
}

let counterHam = 0;
function handleBars() {

    const barDiv = document.getElementById('bars-options')
    if (counterHam == 0) {
        barDiv.classList.add('displayed')
        barDiv.classList.remove('hidden')
        counterHam++
    } else {
        barDiv.classList.remove('displayed')
        barDiv.classList.add('hidden')
        counterHam--
    }
}

function getBlogHtml() {
    let blogHtml = '';

    blogArray.forEach((blog, i) => {
        const { linkPic, picAlt, title, blogText, date, uuid } = blog;

        blogHtml += `
            <section class="blog mag-side ${i < 3 ? '' : 'hide'}" id="${uuid}">
                <img src="${linkPic}" alt="${picAlt}">
                <p class="date">${date}</p>
                <a href="./first_blog.html">
                    <h2 class="title">${title}</h2>
                </a>
                <p class="descriptive">${blogText}</p>
            </section>
        `;
    });

    return blogHtml;
}

function renderBlogSection() {
    document.getElementById("main-blog").innerHTML = getBlogHtml();
}

renderBlogSection();
activePage();
