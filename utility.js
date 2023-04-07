const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const prompt = require('prompt-sync')();
const nameValideation = RegExp("^[A-Z]{1}[a-z]{2,}$");
const zipCodeValidation = RegExp("^[1-9]{1}[0-9]{5}$");
const phoneValidation = RegExp("'^[0-9]{2}|\s|[0-9]{10}$");
const emailValidation = RegExp("^([a-z]+)([0-9])*([_+-.]{1}[a-z0-9]+)*(@)([a-z0-9]+)[.]([a-z]{2,})([.][a-z]{2}){0,1}$");
const ADDRESS_STATE_CITY_REGEX = RegExp("^[A-Za-z]{4,}$");
let addressBookArray = new Array();

class utility {
    
    constructor(firstName, lastName, address, city, state, zipCode, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    toString() {
        return " First Name : " + this.firstName + " , Last Name " + this.lastName + " , Address : " + this.address + " , City : " + this.city +
            " , State : " + this.state + " , Zip Code : " + this.zipCode + " , Phone Number : " + this.phoneNumber + " , Email : " + this.email;
    }


 getContact = () => {
    let firstName = prompt("Enter First Name : ");
    let flag = true;
    while (flag) {
        if (!nameValideation.test(firstName)) {
            console.log("Invalid name");
            firstName = prompt("Enter First Name : ");
        }
        else {
            flag = false;
        }
    }
    let lastName = prompt("Enter Last Name : ");
    flag = true;
    while (flag) {
        if (!nameValideation.test(lastName)) {
            console.log("Invalid Last Name");
            lastName = prompt("Enter Last Name : ");
        }
        else {
            flag = false;
        }
    }
    let address = prompt("Enter Address :");
    flag = true;
    while (flag) {
        if (!ADDRESS_STATE_CITY_REGEX.test(address)) {
            console.log("Invalid Last Name");
            address = prompt("Enter Address :");
        }
        else {
            flag = false;
        }
    }

    let city = prompt("Enter City :");
    let state = prompt("Enter State :");
    let zipCode = prompt("Enter Zip Code :");
    flag = true;
    while (flag) {
        if (!zipCodeValidation.test(zipCode)) {
            console.log("Invalid zipcode");
            zipCode = prompt("Enter Zip Code :");
        }
        else {
            flag = false;
        }
    }
    let email = prompt("Enter Email :");
    flag = true;
    while (flag) {
        if (!emailValidation.test(email)) {
            console.log("Invalid email");
            email = prompt("Enter Email :");
        }
        else {
            flag = false;
        }
    }
    let phoneNumber = prompt("Enter Phone Number :");
    flag = true;
    while (flag) {
        if (!phoneValidation.test(phoneNumber)) {
            console.log("Invalid");
            phoneNumber = phoneNumber = prompt("Enter Phone Number :");
        }
        else {
            flag = false;
        }
    }
    let contactInput = null;

    try {
        contactInput = new utility(firstName, lastName, address, city, state, zipCode, phoneNumber, email);
    }
    catch (error) {
        console.error(error);
    }
    
    let resultIndex = this.getIndexByName(contactInput.firstName, contactInput.lastName);
    if (resultIndex == -1) {
        addressBookArray.push(contactInput);
        this.writeFile(addressBookArray);
       // this.readfile(addressBookArray);
        console.log("Contact Added Successfully!!");
    } else {
        console.log("Could not add contact as Name already exists!!");
    }
 }

    viewContacts = () => {
        addressBookArray.forEach((data) => {
            console.log(" Name: " +data.firstName+ " "+data.lastName+ "\n Email-ID: "+data.email+ "\n Phone no: "+data.phoneNumber+ "\n Address : " +data.address+ ", " +data.city+ ", " +data.state+ ", " +data.zipCode);
        })        
}

 editContact = () => {
    let firstName = prompt("Enter First Name : ");
    let lastName = prompt("Enter Last Name : ");
    let resultIndex = addressBookArray.findIndex(contact => contact.firstName == firstName && contact.lastName == lastName);
    if (resultIndex == -1) {
        console.log("Contact not Exists.")
    } else {
        addressBookArray[resultIndex] = this.getContact();
        console.log("Contact updated successfully!!")
    }

}

 getIndexByName = (firstName, lastName) => {
    return addressBookArray.findIndex(contact => contact.firstName == firstName && contact.lastName == lastName);
}


 deleteContact = () => {
    let firstName = prompt("Enter First Name which want to deleted  : ");
    let lastName = prompt("Enter Last Name which want to deleted: ");
    let index = this.getIndexByName(firstName, lastName);
    if (index == -1)
        console.log("Contact not Exists.")
    else {
        console.log("Contact deleted successfully!!");
        return addressBookArray.splice(index, 1);
    }
}

writeFile(array) {
    let jsonContent = JSON.stringify(array);
    fs.writeFileSync('file.json', jsonContent);
    console.log("Contact Saved In File!")
}

 getTotalContactCount = () => addressBookArray.reduce((total, contact) => total + 1, 0);

}

 module.exports = new utility();
