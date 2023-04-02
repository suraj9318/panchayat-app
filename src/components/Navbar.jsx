import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleSidebar,logoutUser } from '../features/user/userSlice';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  const logout = () => {
   dispatch(logoutUser())
   toast.error("signing off")
   navigate("/");
  };

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggle}>
          <FaAlignLeft />
        </button>
        
        <div>
          <h3 className='logo-text'>Meri Panchayat</h3>
        </div>

        <button type='button' className='btn btn-danger' onClick={logout}>
          logout  
        </button>

        
      </div>
    </Wrapper>
  );
};
export default Navbar;
