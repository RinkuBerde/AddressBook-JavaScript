const prompt = require('prompt-sync')();

const NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
const ADDRESS_STATE_CITY_REGEX = RegExp("^[A-Za-z]{4,}$");
const ZIP_CODE_REGEX = RegExp("^[1-9]{1}[0-9]{5}$");
const PHONE_NUMBER_REGEX = RegExp("^[0-9]{0,2}[-][0-9]{10}$");
const EMAIL_REGEX = RegExp("^([a-z]+)([0-9])*([_+-.]{1}[a-z0-9]+)*(@)([a-z0-9]+)[.]([a-z]{2,})([.][a-z]{2}){0,1}$");

class AddressBook {
    constructor(firstName, lastName, address, city, state, zipCode, phoneNumber, email) {
        if (NAME_REGEX.test(firstName)) {
            this.firstName = firstName;
        } else {
            throw "Invalid First Name!!!"
        }
        if (NAME_REGEX.test(lastName)) {
            this.lastName = lastName;
        } else {
            throw "Invalid Last Name!!!"
        }
        if (ADDRESS_STATE_CITY_REGEX.test(address)) {
            this.address = address;
        } else {
            throw "Invalid Address!!!"
        }
        if (ADDRESS_STATE_CITY_REGEX.test(city)) {
            this.city = city;
        } else {
            throw "Invalid City Name!!!"
        }
        if (ADDRESS_STATE_CITY_REGEX.test(state)) {
            this.state = state;
        } else {
            throw "Invalid City Name!!!"
        }
        if (ZIP_CODE_REGEX.test(zipCode)) {
            this.zipCode = zipCode;
        } else {
            throw "Invalid Zip Code!!!"
        }
        if (PHONE_NUMBER_REGEX.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        } else {
            throw "Invalid Phone Number!!!"
        }
        if (EMAIL_REGEX.test(email)) {
            this.email = email;
        } else {
            throw "Invalid Email Address!!!"
        }

    }
    toString() {
        return " First Name : " + this.firstName + " , Last Name " + this.lastName + " , Address : " + this.address + " , City : " + this.city +
            " , State : " + this.state + " , Zip Code : " + this.zipCode + " , Phone Number : " + this.phoneNumber + " , Email : " + this.email;
    }
}

let addressBookArray = new Array();
let getContact = () => {
    let firstName = prompt("Enter First Name : ");
    let lastName = prompt("Enter Last Name :");
    let address = prompt("Enter Address :");
    let city = prompt("Enter City :");
    let state = prompt("Enter State :");
    let zipCode = prompt("Enter Zip Code :");
    let phoneNumber = prompt("Enter Phone Number :");
    let email = prompt("Enter Email :");
    let contactInput = null;

    try {
        contactInput = new AddressBook(firstName, lastName, address, city, state, zipCode, phoneNumber, email);
        console.log(contactInput.toString());
    }
    catch (error) {
        console.error(error);
    }
    return contactInput;
};

let addContact = (contact) => {
    addressBookArray.push(contact);
    console.log("Contact Added Successfully!!");
}

console.log(" Welcome to Address Book Application.")
while (true) {
    console.log("Menu\n1. Add Contact\n2. Exit");
    let choice = prompt("Enter your choice : ");
    switch (choice) {
        case "1": addContact(getContact());
            break;
        case "2": break;
        default: console.log("Invalid Choice!!!");
            break;
    }
}