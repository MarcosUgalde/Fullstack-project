import { Link, useRoute } from 'wouter';
import Styled from './styles';
import { useUser } from '../../hooks';
import { useState } from 'react';
import { useLogout } from '../../hooks';

const CustomLink = ({ href, children }) => {
    const [isActive] = useRoute(href)
  
    return (
      <Link {...{ href }}>
        <Styled.Anchor {...{ href, isActive }}>{children}</Styled.Anchor>
      </Link>
    )
  }

const NavBar = () => {
    const { data } = useUser();
    const handleLogout = useLogout()
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)

    const toggleDropDown = () => {
        setIsDropDownOpen((prev) => !prev);
    };

    const handleLogoutClick = () => {
        handleLogout();
        setIsDropDownOpen(false)
    }

    return (
        <Styled.Nav>
            <CustomLink href='/'>Menu</CustomLink>
            <CustomLink href='/workouts'>Workouts</CustomLink>
            {data &&(
                <Styled.Userlogout>
                    <Styled.User onClick={toggleDropDown}>{data?.username}</Styled.User>
                    {isDropDownOpen && (
                        <Styled.Dropdown>
                            <li onClick={handleLogoutClick}>Logout</li>
                        </Styled.Dropdown>
                    )}
                </Styled.Userlogout>
            )}  
        </Styled.Nav>
    )
}

export default NavBar