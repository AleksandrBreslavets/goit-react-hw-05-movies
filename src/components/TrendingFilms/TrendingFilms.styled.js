import styled from 'styled-components';
import {NavLink } from "react-router-dom";

export const FilmListEl = styled.li`
    margin-bottom: 10px;
    list-style:"🎬";
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color:black;
    font-size: 18px;
    &:hover,&:active,&:focus{
        color:red;
    }
`;