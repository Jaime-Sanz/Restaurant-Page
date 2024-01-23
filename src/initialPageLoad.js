import { createNavBar } from "./navbar";

const contentElement = document.getElementById('content');

export function initialPageLoad () {
    contentElement.textContent = '';

    createNavBar()

    let homePageSquare = document.createElement('div');
    let homePageImage = document.createElement('div');
    let homePageText = document.createElement('div');
    
    homePageSquare.id = 'hpSquare';
    homePageImage.id = 'hpImage';
    homePageText.id = 'hpText';

    homePageText.innerText = "Welcome to Rocky's Nom Nom Noms! \n \n Indulge your furry friend with the most delectable treats crafted just for pups like yours and mine.";


    contentElement.appendChild(homePageSquare);
    homePageSquare.appendChild(homePageImage);
    homePageSquare.appendChild(homePageText);
}