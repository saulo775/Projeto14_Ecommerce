import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #000000;  
    text-align: center;
    padding: 1.5rem 4rem;
    -webkit-box-shadow: 0px -8px 23px -6px #000000; 
    box-shadow: 0px -8px 23px -6px #000000;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 1;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--primary);
        h1 {
            font-family: 'Great Vibes', cursive;
            font-size: 3rem;
        }
        nav {
            a{
                margin-left: 1rem;
                font-size: 1.25rem;

                :hover {
                    color: var(--secondary);
                }
            }
        }
        
    }

    p {
        color: white;

        a {
            color: var(--secondary);
        }
    }    
`;