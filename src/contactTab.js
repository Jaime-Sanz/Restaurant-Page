import { createNavBar } from "./navbar";

const contentElement = document.getElementById('content');

export function contactsDisplay(){
    contentElement.textContent = '';

    createNavBar();

    let documentSquare = document.createElement('div');
    let panelLeft = document.createElement('div');
    let panelRight = document.createElement('div');
    let plImage = document.createElement('img');
    let plText = document.createElement('p');
    let prForm = document.createElement('form');
    let prInputName = document.createElement('input');
    let prLabelName = document.createElement('label');
    let prInputEmail = document.createElement('input');
    let prLabelEmail = document.createElement('label');
    let prInputNumber = document.createElement('input');
    let prLabelNumber = document.createElement('label');
    let panelSubmit = document.createElement('input');

    documentSquare.id = 'docSquare';
    panelLeft.id = 'panelLeft';
    panelRight.id = 'panelRight';
    prForm.id = 'formContact';
    plImage.id = 'pugPhoneImage';
    plText.id = 'pugText'

    //appending panels and to mainbox
    contentElement.appendChild(documentSquare);
    documentSquare.appendChild(panelLeft);
    documentSquare.appendChild(panelRight);
    
    panelLeft.appendChild(plImage);
    panelLeft.appendChild(plText);

    panelRight.appendChild(prForm);
    prForm.appendChild(prLabelName);
    prForm.appendChild(prInputName);
    prForm.appendChild(prLabelEmail);
    prForm.appendChild(prInputEmail);
    prForm.appendChild(prLabelNumber);
    prForm.appendChild(prInputNumber);
    prForm.appendChild(panelSubmit);

    prInputName.type = "text";
    prInputName.name = "name";
    prLabelName.textContent = "Name: "

    prInputEmail.type = "email";
    prInputEmail.name = "email";
    prLabelEmail.textContent = "Email: "

    prInputNumber.type = "tel";
    prInputNumber.name = "phone";
    prLabelNumber.textContent = "Phone #: "

    panelSubmit.type = "submit"
    panelSubmit.name = "sbtn"

    plText.textContent = "Pawsitively Here for You: Unleash the Support for Your Furry Friends!"
    plImage.src = "/assets/images/pug on phone.png"
}