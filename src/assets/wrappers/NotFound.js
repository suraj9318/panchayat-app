import styled from 'styled-components'
const Wrapper = styled.main`
.main{
            font-family: 'Merriweather', serif;
            margin: 0;
            text-align: center;
            color: var( --grey-900);
            user-select: none;
            padding-top: 18vh;
            height: 100vh;
        }
        .container{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            /* background-color: #5ca3dd93; */
        }
        h2{
            font-size: 150px;
            margin: 0;
            text-shadow: 15px 5px 2px #e3a8a8;
        }
        h3{
            font-size: 40px;
            margin: 20px;
        }
        p{
            font-size: 18px;
            margin: 5px;
        }
        p:last-of-type{
            margin-bottom: 35px;
        }
        a{
            text-decoration: none;
            
        }

 `
export default Wrapper
