let faseList = document.getElementsByClassName('face-list-item');
for (let i = 0; i < faseList.length; i++)
    faseList[i].addEventListener('click', checkFace);

function checkFace() {
    let faceList = document.getElementsByClassName('face-list-item')
    let arr = Array.prototype.slice.call(faceList, '0');
    let indexNum = arr.indexOf(this);
    console.log(indexNum)
    for (let i = 0; i < faceList.length; i++) {
        faceList[i].classList.remove('active');
    }
    this.classList.add('active');
    let personList = document.getElementsByClassName('person')
    for (let i = 0; i < personList.length; i++) {
        personList[i].classList.remove('active')
    }
    personList[indexNum].classList.add('active')
    let reviewsContent = document.getElementsByClassName('reviews-content')
    for (let i = 0; i < reviewsContent.length; i++) {
        reviewsContent[i].classList.remove('active')
    }
    reviewsContent[indexNum].classList.add('active')
}

let slideRight = document.getElementsByClassName('scroll-right');
for (let i = 0; i < slideRight.length; i++) {
    slideRight[i].addEventListener('click', reviewsSlideRight);
}

function reviewsSlideRight() {
    let faceList = document.getElementsByClassName('face-list-item');
    let arr = Array.prototype.slice.call(faceList, '0');
    let indexNum = null;
    for (let i = 0; i < arr.length; i++) {
        let r = arr[i].classList.contains('active');
        if (r === true) {
            indexNum = arr.indexOf(arr[i]);
        }
        arr[i].classList.remove('active');
    }

    if (indexNum < arr.length - 1) {
        arr[indexNum + 1].classList.add('active');
    } else {
        arr[0].classList.add('active');
    }

    let personList = document.getElementsByClassName('person');
    for (let i = 0; i < personList.length; i++) {
        personList[i].classList.remove('active')
    }
    if (indexNum < arr.length - 1) {
        personList[indexNum + 1].classList.add('active');
    } else {
        personList[0].classList.add('active');
    }

    let reviewsContent = Array.prototype.slice.call(document.getElementsByClassName('reviews-content'));
    for (let i = 0; i < reviewsContent.length; i++) {
        reviewsContent[i].classList.remove('active')
    }
    if (indexNum < arr.length - 1) {
        reviewsContent[indexNum + 1].classList.add('active');
    } else {
        reviewsContent[0].classList.add('active');
    }

}

let sliderLeft = document.getElementsByClassName('scroll-left');
for (let i = 0; i < sliderLeft.length; i++) {
    sliderLeft[i].addEventListener('click', reviewsSlideLeft);
}

function reviewsSlideLeft() {
    let faceList = document.getElementsByClassName('face-list-item');
    let arr = Array.prototype.slice.call(faceList, '0');
    let indexNum = null;
    for (let i = 0; i < arr.length; i++) {
        let r = arr[i].classList.contains('active');
        if (r === true) {
            indexNum = arr.indexOf(arr[i]);
        }
        arr[i].classList.remove('active');
    }

    if (indexNum > 0) {
        arr[indexNum - 1].classList.add('active');
    } else {
        arr[arr.length - 1].classList.add('active');
    }

    let personList = document.getElementsByClassName('person');
    for (let i = 0; i < personList.length; i++) {
        personList[i].classList.remove('active')
    }
    if (indexNum > 0) {
        personList[indexNum - 1].classList.add('active');
    } else {
        personList[arr.length - 1].classList.add('active');
    }

    let reviewsContent = Array.prototype.slice.call(document.getElementsByClassName('reviews-content'));
    for (let i = 0; i < reviewsContent.length; i++) {
        reviewsContent[i].classList.remove('active')
    }
    if (indexNum > 0) {
        reviewsContent[indexNum - 1].classList.add('active');
    } else {
        reviewsContent[arr.length - 1].classList.add('active');
    }
}