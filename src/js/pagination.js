const projects = [
    {
        "id": 1,
        "category": "responsive",
        "name": "recipe blog",
        "description": "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
        "tags": [
            "HTML",
            "CSS",
            "responsive"
        ],
        "demo": "https://miystera.github.io/recipe-blog/",
        "code": "https://github.com/miysterA/recipe-blog",
        "image": "./src/images/projects/recipeBlogThumbnail.png"
    },
    {
        "id": 2,
        "category": "responsive",
        "name": "404 Page",
        "description": "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
        "tags": [
            "HTML",
            "CSS",
            "responsive"
        ],
        "demo": "https://miystera.github.io/404-Page/",
        "code": "https://github.com/miysterA/404-Page",
        "image": "./src/images/projects/404PageThumbnail.png"
    },
    {
        "id": 3,
        "category": "responsive",
        "name": "my gallery",
        "description": "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
        "tags": [
            "HTML",
            "CSS",
            "responsive"
        ],
        "demo": "https://miystera.github.io/my-gallery-master/",
        "code": "https://github.com/miysterA/my-gallery-master",
        "image": "./src/images/projects/GalleryThumbnail.png"
    },
    {
        "id": 4,
        "category": "responsive",
        "name": "checkout",
        "description": "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
        "tags": [
            "HTML",
            "CSS",
            "responsive"
        ],
        "demo": "https://miystera.github.io/checkout_page/",
        "code": "https://github.com/miysterA/checkout_page",
        "image": "./src/images/projects/CheckoutThumbnail.png"
    },
    {
        "id": 5,
        "category": "responsive",
        "name": "edie homepage",
        "description": "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
        "tags": [
            "HTML",
            "CSS",
            "js",
            "responsive"
        ],
        "demo": "https://miystera.github.io/edie-homepage/",
        "code": "https://github.com/miysterA/edie-homepage",
        "image": "./src/images/projects/EdieHomageThumbnail.png"
    },
    {
        "id": 6,
        "category": "responsive",
        "name": "interior consultant",
        "description": "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
        "tags": [
            "HTML",
            "CSS",
            "js",
            "responsive"
        ],
        "demo": "https://miystera.github.io/interior-consultant/",
        "code": "https://github.com/miystera/interior-consultant/",
        "image": "./src/images/projects/interiorConsultantThumbnail.png"
    },
    {
        "id": 7,
        "category": "responsive",
        "name": "team",
        "description": "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
        "tags": [
            "HTML",
            "CSS",
            "responsive"
        ],
        "demo": "https://miystera.github.io/",
        "code": "https://github.com/miysterA/miysterA.github.io",
        "image": "./src/images/projects/myTeamThumbnail.png"
    },
    {
        "id": 8,
        "category": "responsive",
        "name": "portfolio",
        "description": "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
        "tags": [
            "HTML",
            "CSS",
            "responsive"
        ],
        "demo": "https://miystera.github.io/interior-consultant/",
        "code": "https://github.com/miystera/interior-consultant/",
        "image": "./src/images/projects/PortfolioThumbnail.png"
    },
    {
        "id": 9,
        "category": "wordpress",
        "name": "united61 copie",
        "description": "In this project, I work with Wordpress, Woocommerce and Elementor to create a responsive ecommerce site",
        "tags": [
            "wordpress",
            "woocommece",
            "elementor"
        ],
        "demo": "http://united61.uat.testversalis.net/",
        "code": "#",
        "image": "./src/images/projects/PortfolioThumbnail.png"
    },
    {
        "id": 10,
        "category": "wordpress",
        "name": "Andhiy Shop",
        "description": "In this project, I work with Wordpress, Woocommerce and Elementor to create a responsive ecommerce site",
        "tags": [
            "wordpress",
            "woocommece",
            "elementor"
        ],
        "demo": "http://dropshipme.uat.testversalis.net/",
        "code": "#",
        "image": "./src/images/projects/PortfolioThumbnail.png"
    },
    {
        "id": 11,
        "category": "wordpress",
        "name": "Fitness copie",
        "description": "In this project, I work with Wordpress, Woocommerce and Elementor to create a responsive ecommerce site",
        "tags": [
            "wordpress",
            "woocommece",
            "elementor"
        ],
        "demo": "http://fitness.uat.testversalis.net/",
        "code": "#",
        "image": "./src/images/projects/PortfolioThumbnail.png"
    }
];



// Core JS
const sectionCenter = document.querySelector(".section-center");
const amountPerCategory = document.querySelector(".project__amount");
const containerBtns = document.querySelector(".btn__container");
const paginateBtns = document.querySelector(".paginate__btns");
const categoriesCount = {};
let currentCategory = "all";
let currentProjectCategory = projects;
let currentPage = 1;

const projectPerPage = 3;
let amount = 0;

// Load Items 
window.addEventListener("DOMContentLoaded", function () {
    displayProjectItems(currentProjectCategory, currentPage);
    displayProjectButtons();

    displayPaginateButtons(currentProjectCategory.length);

});


// display Item 
function displayProjectItems(projectItems, IndexPage) {
    let displayProject = [];
    let start = (IndexPage - 1) * projectPerPage;
    let limit = (IndexPage * projectPerPage) - 1;
    // Verify if the limit equal to projectItems.length
    limit = limit === projectItems.length ? limit - 1 : limit;
    //
    for (let i = start, item; i <= limit; i++) {
        item = projectItems[i];
        //amount++;
        let displayTag = item.tags.map(function (tag) {
            return `<span class="tag">#${tag}</span>`
        });
        displayTag = displayTag.join("");
        displayProject.push(`
        <!-- Start Single item -->
        <article class="project__item">
            <img src=${item.image} alt=${item.name} class="project__photo">
            <div class="item__info">
                <div class="item__tags">
                    ${displayTag}
                </div>
                <h4 class="item__title">${item.name}</h4>
                <p class="item__desc">${item.description}</p>
                <div class="item__btns">
                    <a href=${item.demo} class="btn__link">demo</a>
                    <a href=${item.code} class="btn__link">code</a>
                </div>
                </div>        
        </article>
        <!-- End of single item -->
                `) ;
        
    };

    // let displayProject = projectItems.map(function (item) {
    //     // console.log(item);
    //     amount++;
    //     let displayTag = item.tags.map(function (tag) {
    //         return `<span class="tag">#${tag}</span>`
    //     });
    //     displayTag = displayTag.join("");
    //     return `
    //     <!-- Start Single item -->
    //     <article class="project__item">
    //         <img src=${item.image} alt=${item.name} class="project__photo">
    //         <div class="item__info">
    //             <div class="item__tags">
    //                 ${displayTag}
    //             </div>
    //             <h4 class="item__title">${item.name}</h4>
    //             <p class="item__desc">${item.description}</p>
    //             <div class="item__btns">
    //                 <a href=${item.demo} class="btn__link">demo</a>
    //                 <a href=${item.code} class="btn__link">code</a>
    //             </div>
    //             </div>        
    //     </article>
    //     <!-- End of single item -->
    //             `;
    // });
    displayProject = displayProject.join("");
    sectionCenter.innerHTML = displayProject;
    const amountProject = currentCategory === "all" ? projects.length : categoriesCount[currentCategory];
    amountPerCategory.textContent = `(${amountProject})`;
}

function displayProjectButtons() {
    const categories = projects.reduce(function (values, item) {
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        if (typeof categoriesCount[item.category] === "undefined") {
            categoriesCount[item.category] = 1;
        }else{
            categoriesCount[item.category]++;
        }
        return values;
    }, 
    []);
    const categoryBtns = categories.map(function (category) {
        return `
        <button class="filter__btn" type="button" data-id=${category}>${category}</button>
        `
    }).join("");
    containerBtns.innerHTML = categoryBtns;
    const filterBtns = containerBtns.querySelectorAll(".filter__btn");

    // Get back and add "active" class in button
    addRemoveActive(filterBtns);

    // Filter Items
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            
            currentCategory = e.currentTarget.dataset.id;
            currentProjectCategory = projects.filter(function (projectItem) {
                if(projectItem.category === currentCategory){
                    return projectItem;
                }
            });
            displayProjectItems(currentProjectCategory, 1);
            displayPaginateButtons(categoriesCount[currentCategory]);
            amountPerCategory.textContent = `(${categoriesCount[currentCategory]})`;
        });
    });   
}

function displayPaginateButtons(projectsCount) {
    
    paginateBtns.innerHTML = "";
    // Paginate
    const numbofPage = Math.ceil(projectsCount / projectPerPage);
    let numPage = [];
    for(let i = 1; i < numbofPage + 1; i++ ){
        numPage.push(i);
    }
    numPage.unshift("<");
    numPage.push(">");
    /*  
    * Browse the new table, create and add pagination links
    */
    numPage.forEach(function (num) {
        let liElt = document.createElement("li");
        liElt.className = "page__number";
        const paginateBtnLink = document.createElement("a");
        paginateBtnLink.addEventListener("click", e => {
            e.preventDefault();
            
            if(num === "<"){
                currentPage += currentPage === 1 ? 0 : -1;
            }else if (num === ">") {
                currentPage += currentPage === Math.ceil(currentProjectCategory.length/projectPerPage) ? 0 : 1;
            }else{
                currentPage = num;
            }
            displayProjectItems(currentProjectCategory, currentPage);
        }, false)
        paginateBtnLink.className = "btn";
        paginateBtnLink.href = "#"
        paginateBtnLink.textContent = num;
        
        // Add elements in the DOM
        liElt.appendChild(paginateBtnLink);
        paginateBtns.appendChild(liElt);
        const pageBtns = paginateBtns.querySelectorAll(".btn");

        if(paginateBtnLink.textContent === "<"){
            paginateBtnLink.classList.add("prev");
        }else if (paginateBtnLink.textContent === ">") {
            paginateBtnLink.classList.add("next");
        }else{
            // Add and remove "active" class
            addRemoveActive(pageBtns);
        }
        
    });
}

function addRemoveActive(btns) {
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
            for (let j = 0; j < btns.length; j++) {
                btns[j].classList.remove("active");
            }
            this.classList.add("active");
        })
        
    }
}

