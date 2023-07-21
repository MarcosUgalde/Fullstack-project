import { Link, useRoute } from 'wouter'

const CustomLink = ({ href, children }) => {
    const [isActive] = useRoute(href)
  
    return (
      <Link {...{ href }}>
        <a {...{ href }}>{children}</a>
      </Link>
    )
  }

const NavBar = () => {
    return (
        <nav>
            <CustomLink href='/'>Menu</CustomLink>
            <CustomLink href='/workouts'>Workouts</CustomLink>
        </nav>
    )
}

export default NavBar