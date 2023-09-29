import { useDispatch, useSelector } from "react-redux"
import { StyledUl, NumberStyled, DeletBtn } from "./ContactList.styled"
import { deletContact } from "components/Redux/actions"

export const ContactList  = () =>{
const dispatch = useDispatch();
const contacts = useSelector(state => state.contacts)
    return <>
        <StyledUl>
           { 
           contacts.map(({name, number, id})=>(
           <li key={id}>{name}:
           <NumberStyled>{number}</NumberStyled><DeletBtn onClick={()=>dispatch(deletContact(id))} >Delete</DeletBtn></li>))}

        </StyledUl>
       </>

  
}

