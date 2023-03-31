import Wrapper from '../assets/wrappers/LandingPage';
import img from '../assets/images/2650149.png'
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <h2>Welcome to <span>Meri Panchayat</span></h2>
      <div className='container page'>
        {/* info */}
        <div className='info'>
         
          <div className="card-landing">
              <h3>Cetizen/Panchayat Residence</h3> 
              <div className="card-landing-container">
                <span>New User?</span>
                <Link to='public-registration'>
                  <Button text="Sign Up"/>
                </Link>
              </div>

              <div className="card-landing-container">
                <span>Existing User?</span>
                <Link to='public-login'>
                  <Button text="Login" />
                </Link>
              </div>
          </div>

          <div className="card-landing">
              <h3>Official User</h3> 

              <div className="card-landing-container">
                <span>Existing User?</span>
                <Link to='official-login'>
                  <Button text="Login" />
                </Link>
              </div>
          </div>         

        </div>
        
        
        <img src={img} alt='panchayat Image' className='img main-img' />
      </div>

      
    </Wrapper>
  );
};

export default Landing;
