export const getPostFromLocalStorage = () => {
    const result = localStorage.getItem('OfficialUser');
    const user = result ? JSON.parse(result) : null;
    return user;
  };
