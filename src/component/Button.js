import styled from "styled-components";

export const ButtonContainer = styled.button`
  margin: 0.2rem 0.5rem 0.2rem 0;
  padding: 0.2rem 0.5rem;
  background: transparent;
  color: var(--lightBLue);
  border: 0.05rem solid var(--lightBLue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBLue)"};
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBLue)")};

  border-radius: 0.5rem;
  font-size: 1.4rem;
  text-transform: capitalize;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBLue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
