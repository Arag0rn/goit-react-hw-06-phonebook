import { useSelector, useDispatch } from "react-redux";
import { StyledUl, NumberStyled, DeletBtn } from "./ContactList.styled";
import { deleteContact } from "components/Redux/contactsSlice"

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector(state => state.filter)
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <StyledUl>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          {name}: <NumberStyled>{number}</NumberStyled>
          <DeletBtn onClick={() => dispatch(deleteContact(id))}>Delete</DeletBtn>
        </li>
      ))}
    </StyledUl>
  );
};
