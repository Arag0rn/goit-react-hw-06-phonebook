

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid'
import { H1styled, H2styled} from "./Title.styled";
import { useState } from "react";
import { useEffect } from "react";


export const App =()=>{
//   const [contacts, setContacts] = useState(() => {
//     const storedContacts = localStorage.getItem('contacts');
//     return storedContacts ? JSON.parse(storedContacts) : [
    
//     ];
//   });
//     const [filter, setFilter] = useState('')
  
 

//     useEffect(() => {
//       localStorage.setItem('contacts', JSON.stringify(contacts) )
//     }, [contacts]);   

//  const addContact = NewContact =>{
//   if (contacts.some(
//     contact => contact.name.toLowerCase() === NewContact.name.toLowerCase())){
//       alert(`${NewContact.name} is already in contacts`)
//     return
//   } else {
//     setContacts(prevState =>
//       [...prevState, {
//         id: nanoid(), 
//         ...NewContact}]  )
//       }
//  }






//  const onChangeFilter = newFilter => {
//   setFilter (
//     newFilter
//   );
//  }
  

//     const searchContact = contacts.filter( cont => cont.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      <div>
      <H1styled>Phonebook</H1styled>
      <ContactForm  />
    
      <H2styled>Contacts</H2styled>
      <Filter  />
      <ContactList />
    </div>
  );

}
