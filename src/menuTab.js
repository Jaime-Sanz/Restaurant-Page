import { createNavBar } from "./navbar";

const contentElement = document.getElementById('content');

export function menuTabs (){
    contentElement.textContent = '';

    createNavBar()

    let menuSquareBox = document.createElement('div');
    let menuTitle = document.createElement('h1');
    let menuSlogan = document.createElement('h3');
    let menuList = document.createElement('ul');
    let menuItemOne = document.createElement('div');
    let menuItemTwo = document.createElement('div');
    let menuItemThree = document.createElement('div');
    let menuItemFour = document.createElement('div');
    let menuItemFive = document.createElement('div');
    let menuItemSix = document.createElement('div');
    let menuItemSeven = document.createElement('div');


    contentElement.appendChild(menuSquareBox);
    menuSquareBox.appendChild(menuTitle);
    menuSquareBox.appendChild(menuSlogan);
    menuSquareBox.appendChild(menuList);
    menuList.appendChild(menuItemOne);
    menuList.appendChild(menuItemTwo);
    menuList.appendChild(menuItemThree);
    menuList.appendChild(menuItemFour);
    menuList.appendChild(menuItemFive);
    menuList.appendChild(menuItemSix);
    menuList.appendChild(menuItemSeven);

    menuSquareBox.id = 'menuSquareBox';
    menuList.id = 'menuList';

    menuTitle.innerText = "Rockys Specials!";
    menuSlogan.innerText = 'Crafting Culinary Canine Joy, One Bite at a Time!';

    menuItemOne.innerText = 'Bacon(3 Strips) ----------------------------------- $6';
    menuItemTwo.innerText = 'Beefy Bites ---------------------------------------- $7';
    menuItemThree.innerText = 'Chewy Chums ------------------------------------- $5';
    menuItemFour.innerText = 'Duck Delight -------------------------------------- $4';
    menuItemFive.innerText = 'Lamb Licks ---------------------------------------- $4';
    menuItemSix.innerText = 'Puppy Pleasers ------------------------------------ $2';
    menuItemSeven.innerText = 'Yum Yums ----------------------------------------- $3';
    

}