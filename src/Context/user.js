import React,{createContext,useContext} from 'react';

export const userContext = createContext({user: null,});

export const useSession = () => {
    const { user } = useContext(userContext)
    return user
  }

  export const useAuth = () => {
    const [state, setState] = React.useState(() => {
      const user = firebase.auth().currentUser
      return {
        initializing: !user,
        user,
      }
    })
  
    function onChange(user) {
      setState({ initializing: false, user })
    }
  
    React.useEffect(() => {
      // listen for auth state changes
      const unsubscribe = firebase.auth().onAuthStateChange(onChange)
  
      // unsubscribe to the listener when unmounting
      return () => unsubscribe()
    }, [])
  
    return state
  }