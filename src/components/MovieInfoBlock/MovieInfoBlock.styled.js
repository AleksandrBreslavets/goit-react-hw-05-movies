import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
    margin-top: 30px;
    display: flex;
`;
export const FilmInfo = styled.div`
    margin-left:30px;
`;

export const LinksList = styled.ul`
    display: flex;
    align-items: center;
    margin: 40px 0;
`;

export const LinksListEl = styled.li`
    &:not(:last-child){
        margin-right: 30px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color:black;
    font-size: 20px;
    font-weight: 600;
    border: 1px solid red;
    border-radius: 20px;
    padding: 10px 23px;
    &:hover,&:active,&:focus{
        color:red;
    }
`;