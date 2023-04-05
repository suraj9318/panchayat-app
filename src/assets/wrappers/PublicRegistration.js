import styled from 'styled-components'
const Wrapper = styled.main`
.info{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
  .logo{
    border-radius: 50%;
    width: 5rem;
  }
h2{
    text-align: center;
    margin-block: 1rem;
}
h3{
    text-align: center;
}
.card{
    padding: 1.5rem;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    margin-block: 1rem;
    border-top: 5px solid rgb(20, 216, 157);
    box-shadow: 14px 10px 5px 0px rgba(173,173,173,1);
}
form{
    text-align: center;
}
.form-row{
    /* display: flex;
    justify-content: center; */
}
.form-row input,select{
       width: 50%;
        font-size: 0.9rem;
   }
   input:focus {
  outline: 1px solid blue;
}


   .input-icons{
    position: relative;
    top: 7px;
    left: 25px;
    font-size: 1.3rem;
   }
   .signup-btn{
    padding: 0.8rem 3rem;
    margin-block: 1rem;
    background: #03C988;
    font-size: 1rem;
}
p{
    max-width: 46em;
    margin-bottom: 10px;
}
.signup-btn:hover{
       background: #539165;
   }

  @media (max-width: 720px) {
     h2 {
     font-size: 1.8rem;
    }
    .form-row input,select{
       width: 100%;
   }
   .form-row{
    display: flex;
    justify-content: center;
}
p{
    text-align: initial;
    margin-left: 1rem;
}
form{
    text-align: 0;
}
   h3{
    font-size: 1.5rem;
   }
   .signup-btn{
    padding: 0.5rem 2rem;
    margin-block: 1rem;
    background: #03C988;
    
}
@media only screen and (max-width: 480px)
.Toastify__toast-container {
    width: 71vw;
    padding: 0;
    left: 0;
    margin: 0;
    align-items: center;
    margin-left: 4rem;
}
}
  
`
export default Wrapper
