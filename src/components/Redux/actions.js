export const addContact = value => {
    return {
        type: 'contacts/addContact',
        payload: value,
    }
}

export const deletContact = id => {
    return {
        type: 'contacts/deletContact',
        payload: id,
    }
}