import { useState, useEffect } from "react";
import { handleErrors, parseJSON, printError } from '../utils/fetchUtils';

const useLoggedUser = () => {
  const [loggedUser, setLoggedUser] = useState({});

  const fetchLoggedUser = () => {
    const url = 'https://randomuser.me/api/';

    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(users => { setLoggedUser(users.results[0]) })
        .catch(printError)
    ;
  };
  
  useEffect(() => {
    fetchLoggedUser();
  }, []);

  return loggedUser;
};

export default useLoggedUser;