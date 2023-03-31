import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
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
        
      </div>
    </Wrapper>
  );
};
export default Navbar;
