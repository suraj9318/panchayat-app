import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({Component}) => {
   const { OfficailUserData } = useSelector((store) => store.user);
  if (Object.keys(OfficailUserData).length <1) {
    return <Navigate to='/' />;
  }
  return <Component/>;
};
export default ProtectedRoute;
