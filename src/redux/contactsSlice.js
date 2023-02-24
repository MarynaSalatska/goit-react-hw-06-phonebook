import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // onBtnDelete,
  },
  reducers: {
    deleteAction(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
  },
});

export const { deleteAction,addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


    // dispatch(addAction({ contact }));
    // const isExist = contacts.some(({ name }) => {
    //   return contact.name === name;
    // });
    // if (isExist) {
    //   alert(`${contact.name} is already in contacts!`);
    //   return;
    // }
    // setContacts([...contacts, { id: nanoid(), ...contact }]);

      // const getLocalData = () => {
      //   const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));
      //   return localData;
      // };

      // const [contacts] = useState(
      //   //setContacts
      //   getLocalData() ?? [
      //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      //   ]
      // );
      // const [filter] = useState('');
      // //setFilter
      // useEffect(() => {
      //   localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
      // }, [contacts]);