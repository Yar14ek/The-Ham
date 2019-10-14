let newsTitle = document.getElementsByClassName('news-box-item');
for (let i = 0; i < newsTitle.length; i++)
    newsTitle[i].addEventListener('click', openTitle);

function openTitle() {
    let newsTitle = document.getElementsByClassName('news-box-item');
    let dateField = document.getElementsByClassName('date');
    let arr = Array.prototype.slice.call(newsTitle, '0');
    let indexNumber = arr.indexOf(this);
    let titleText = document.getElementsByClassName('news-box-title');
    for (let i = 0; i < dateField.length; i++) {
        dateField[i].classList.remove('active')
    }
    dateField[indexNumber].classList.add('active');
    for (let i = 0; i < titleText.length; i++) {
        titleText[i].classList.remove('active')
    }
    titleText[indexNumber].classList.add('active');
}