import styled from 'styled-components';
import { Container } from './Container';

const Wrapper = styled.div`
    padding: 2rem 0;

    @media(min-witdth: 767px) {
        padding: 4rem 0;
    }
`;

const Main = ({ children }) => {
    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    )
}

export default Main
