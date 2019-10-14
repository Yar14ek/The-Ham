let serviceBtn = document.getElementsByClassName('service-item ');
for (let i = 0; i < serviceBtn.length; i++) {
    serviceBtn[i].addEventListener("click", showServiceCategory);
}

function showServiceCategory() {
    let liList = document.getElementsByClassName('service-item');
    for (let i = 0; i < liList.length; i++) {
        liList[i].classList.remove('active');
    }
    this.classList.add('active');
    let tabsContent = document.getElementsByClassName('service-text');
    let liListArr = Array.prototype.slice.call(liList, 0);
    let liIndexNum = liListArr.indexOf(this);
    console.log(liIndexNum);
    for (let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove('active');
    }
    tabsContent[liIndexNum].classList.add('active');
    let imgContent = document.getElementsByClassName('service-img');
    for (let i = 0; i < imgContent.length; i++) {
        imgContent[i].classList.remove('active')
    }
    imgContent[liIndexNum].classList.add('active');
}