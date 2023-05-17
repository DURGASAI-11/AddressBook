// const Contact = require("../models/userModel");
// class Node {
//   constructor(contact, next) {
//     this.contact = contact;
//     this.next = next;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   async addContact({ name, phone, address }) {
//     try {
//       const contact = await Contact.create({ name, phone, address });
//       if (this.head === null) {
//         // If the linked list is empty, create a new node with the contact
//         this.head = new Node(contact, null);
//       } else {
//         // If the linked list is not empty, append a new node with the contact to the end of the list
//         let current = this.head;
//         while (current.next) {
//           current = current.next;
//         }
//         current.next = new Node(contact, null);
//       }
//       this.size++;
//     } catch (err) {
//       console.log(err + "in linked list file");
//     }
//   }

//   // async addContact({ name, phone, address }) {
//   //   try {
//   //     const contact = await Contact.create({ name, phone, address });
//   //     this.head = new Node(contact, this.head);
//   //     this.size++;
//   //   } catch (err) {
//   //     console.log(err + "in linked list file");
//   //   }
//   // }

//   printData() {
//     let current = this.head;
//     while (current) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }
// module.exports = LinkedList;
