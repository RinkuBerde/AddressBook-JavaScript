
const prompt = require('prompt-sync')();
const utility = require('./utility')

    console.log(" Welcome to Address Book Application.")
    while (true) {
        console.log("Menu\n1. Add Contact\n2. View Contacts\n3. Edit Contact\n4. Delete Contact\n5. Get Total Contact Count\n6. Exit");
        let choice = prompt("Enter your choice : ");
        switch (choice) {
            case "1": utility.getContact();
                break;
            case "2":
                utility.viewContacts();
                break;
            case "3": utility.editContact();
                break;
            case "4": utility.deleteContact();
                break;
            case "5": console.log(" Total Contacts Present In Array is : " + utility.getTotalContactCount());
                break;
            case "6":
                   return;
            default: console.log("Invalid Choice!!!");
                break;
        }
    }





