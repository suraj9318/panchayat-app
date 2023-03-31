import styled from 'styled-components'
const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .card{
    padding: 1.5rem;
    background: var(--white);
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    margin-block: 1rem;
}

  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
    text-align: center;
  }
  .form-row button{
    padding: 0.75rem 1.25rem;
    font-size: 0.8rem;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
    margin-block: 1rem;
  }

  p{
    margin-bottom: 0px;
    position: relative;
    bottom: 10px;
    max-width: 37em;
    text-align: center;

  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }


  
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }

  }




  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }

    .form-center {
      grid-template-columns: 1fr 3fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
    @media (max-width: 720px) {
      p{
      text-align: initial;
    }
    }
  }`
  export default Wrapper