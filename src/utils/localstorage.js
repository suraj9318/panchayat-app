export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem('OfficialUser');
    const user = result ? JSON.parse(result) : null;
    return user;
  };

  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('OfficialUser');
  };