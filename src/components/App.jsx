

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { H1styled, H2styled} from "./Title.styled";



export const App =()=>{

    return (
      <div>
      <H1styled>Phonebook</H1styled>
      <ContactForm  />
    
      <H2styled>Contacts</H2styled>
      <Filter  />
      <ContactList  />
    </div>
  );

}
