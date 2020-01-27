$(document).ready(function() {
	console.log('JavaScipt is working');

	//Business Logic for AddressBook --------
	function AddressBook() {
		this.contacts = [];
		this.currentId = 0;
	}

	AddressBook.prototype.addContact = function(contact) {
		contact.id = this.assignId();
		this.contacts.push(contact);
	};

	AddressBook.prototype.assignId = function() {
		this.currentId += 1;
		return this.currentId;
	};

	AddressBook.prototype.findContact = function(id) {
		for (let i = 0; i < this.contacts.length; i++) {
			if (this.contacts[i]) {
				if (this.contacts[i].id == id) {
					return this.contacts[i];
				}
			}
		}
		return false;
	};

	AddressBook.prototype.updateContact = function(id, object) {
		for (let i = 0; i < this.contacts.length; i++) {
			if (this.contacts[i].id == id) {
				this.contacts[i].firstName = object.firstName;
				this.contacts[i].lastName = object.lastName;
				this.contacts[i].phoneNumber = object.phoneNumber;
			}
		}
	};

	AddressBook.prototype.deleteContact = function(id) {
		for (let i = 0; i < this.contact.length; i++) {
			if (this.contacts[i]) {
				if (this.contacts[i].id == id) {
					delete this.contacts[i];
					return true;
				}
			}
		}
		return false;
	};

	//Business Logic for Contacts -----------
	function Contact(firstName, lastName, phoneNumber) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
	}

	Contact.prototype.fullName = function() {
		return this.firstName + ' ' + this.lastName;
	};

	//on click function
	// $('form').submit(function(event) {
	// 	event.preventDefault();
	// 	console.log('click');
	// });
});
