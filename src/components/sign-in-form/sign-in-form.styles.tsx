import styled  from 'styled-components';

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    h2 {
    margin: 10px 0;
}

 @media screen and (max-width: 768px) {
        width:100%;
        flex-direction:column;
        justify-content:center;
        padding:.5rem;
      }
`



export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

