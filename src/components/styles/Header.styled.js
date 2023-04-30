import styled from "styled-components";
// this styled header I bring to Header component
// Since Nav and Logo tags are used only in header, I define them in Header.styled component

// var StyledName = styled.tag 
export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header}; //passing props
  padding: 40px;

  /* Like in SASS we can nest styles */
  /* h1 {
    color: #fff;
  } */
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`

export const Logo = styled.img`
  
`