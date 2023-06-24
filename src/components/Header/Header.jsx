
import { HeaderTag, NavEl, NavList, StyledNavLink } from "./Header.styled";

export const Header = () => {
    return (
        <HeaderTag>
            <nav>
                <NavList>
                    <NavEl><StyledNavLink to="/">Home</StyledNavLink></NavEl>
                    <NavEl><StyledNavLink to="/movies">Movies</StyledNavLink></NavEl>
                </NavList>
            </nav>
        </HeaderTag>
    )
}