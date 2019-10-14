let catalogMenu = document.getElementsByClassName('catalog-menu-item');
for (let i = 0; i < catalogMenu.length; i++) {
    catalogMenu[i].addEventListener('click', filterCatalogImg);
}

function filterCatalogImg() {
    let liList = document.getElementsByClassName('catalog-menu-item');
    for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove('active');
    }
    this.classList.add('active');
    let catalogImg = document.getElementsByClassName('catalog-portfolio-img');
    let arrActiv = [];
    for (let j = 0; j < catalogImg.length; j++) {
        catalogImg[j].classList.add('passive');
        let imgClass = catalogImg[j].classList;
        for (let k = 0; k < imgClass.length; k++) {
            let r = this.classList.contains(imgClass[k]);
            if (r === true) {
                arrActiv.push(catalogImg[j]);
            }
        }
    }
    for (let i = 0; i < arrActiv.length; i++) {
        arrActiv[i].classList.remove('passive')
    }
}


let catalogBtn = document.getElementsByClassName('load-btn');
for (let i = 0; i < catalogBtn.length; i++)
    catalogBtn[i].addEventListener('click', uploadPictures);

function uploadPictures() {
    this.remove();
    let catalogMore = document.getElementsByClassName('catalog-new');
    for (let i = 0; i < catalogMore.length; i++) {
        catalogMore[i].classList.remove('catalog-new-img');
        catalogMore[i].classList.add('catalog-portfolio-img');
        ////////////////////////////////////////////
    }


    let catalogMenu = document.getElementsByClassName('catalog-menu-item');
    let activeClass = null;
    for (let i = 0; i < catalogMenu.length; i++) {
        let activeItem = catalogMenu[i].classList.contains('active');
        if (activeItem === true) {
            activeClass = catalogMenu[i]
        }

    }
    console.log(activeClass)

    let catalogImg = document.getElementsByClassName('catalog-portfolio-img');
    let arrActiv = [];
    for (let j = 0; j < catalogImg.length; j++) {
        catalogImg[j].classList.add('passive');
        let imgClass = catalogImg[j].classList;
        for (let k = 0; k < imgClass.length; k++) {
            let r = activeClass.classList.contains(imgClass[k]);
            // console.log(clasCatalog)
            if (r === true) {
                arrActiv.push(catalogImg[j]);

            }
        }
    }
    console.log(arrActiv)
    for (let i = 0; i < arrActiv.length; i++) {
        arrActiv[i].classList.remove('passive')
    }

}

