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

function createNavBar() {
    //Defining intial elements
    let navBar = document.createElement('div');
    let navList = document.createElement('ul');
    let navHome = document.createElement('a');
    let navMenu = document.createElement('a');
    let navContact = document.createElement('a');

    //adding classes and id to navbar/elements
    navBar.id = 'navBarMain';
    navList.classList.add('navTabs');

    //appending elements to main content div
    contentElement.appendChild(navBar);
    navBar.appendChild(navList);
    navList.appendChild(navHome);
    navList.appendChild(navMenu);
    navList.appendChild(navContact);

    //adding text to tab elements
    navHome.innerText = 'Home';
    navMenu.innerText = 'Menu';
    navContact.innerText = 'Contacts';

}