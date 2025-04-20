import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

 const GlobalProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [test , setTest ] = useState("ok");

    const fetchBookData = async () => {
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            setBooks(data)
         } catch (error) {
         console.error(error)
         }
 
    }


    useEffect(()=> {
       fetchBookData()
    }, []);

  
  
    

    return (
        <GlobalContext.Provider value={{
            test
        }}>{children}</GlobalContext.Provider>
    )
}

export default GlobalProvider;