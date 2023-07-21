import { Link, useRoute } from 'wouter';
import Styled from './styles';
import { useUser } from '../../hooks';

const CustomLink = ({ href, children }) => {
    const [isActive] = useRoute(href)
  
    return (
      <Link {...{ href }}>
        <Styled.Anchor {...{ href, isActive }}>{children}</Styled.Anchor>
      </Link>
    )
  }

const NavBar = () => {
    const { data } = useUser()
    
    return (
        <Styled.Nav>
            <CustomLink href='/'>Menu</CustomLink>
            <CustomLink href='/workouts'>Workouts</CustomLink>
            <Styled.User>{data.username}</Styled.User>  
        </Styled.Nav>
    )
}

export default NavBar