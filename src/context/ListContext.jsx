import React, {createContext, useState} from 'react'

const ListsContext = createContext();



export const ListProvider = ({children}) => {
    const [data, setData] = useState([
        {id:1, name:'Naa'},{id:2, name:'Nii'},
    ])

    const [cartItem, setCartItem] = useState([]);

    const deleteListItem = (id) => {
      setData(data.filter((dat) => dat.id !== id))
    }

    const [editName, setEditName] = useState({item:{}})

    const addNewName = (item) => {
        return setData([item, ...data]);
    }

    const addOn = (product) => {
        const exits = cartItem.find(x => x.id === product.id);
        if(exits) {
            setCartItem(cartItem.map(x => x.id === product.id ? {...exits, qty: exits.qty+1}: x))
        } else {
            setCartItem([...cartItem, {...product, qty:1}])
        }
    }

    const editListItem = (item) => {
        setEditName({
            item
        })
    }

    return <ListsContext.Provider value={{data,
     deleteListItem,
      addNewName,
       editListItem,
        editName,
        addOn
        }}>
        {children}
    </ListsContext.Provider>
}

export default ListsContext;