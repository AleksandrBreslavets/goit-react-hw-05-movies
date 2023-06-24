import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const HeaderTag = styled.header`
    background-color: red;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    padding: 15px;
    margin-bottom: 30px;
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

export const NavEl = styled.li`
    &:not(:last-child){
        margin-right: 30px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    padding: 12px 30px;
    border: 1px solid black;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    text-decoration: none;
    color:black;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,&:active,&:focus{
        transform: scale(1.03);
    }
`;