import Logo from './logo/Logo'
import Menu from './menu/Menu'
import Notification from './notification/Notification'
import Search from './searchbar/Search'

let Header = () => {
    return (
        <div>
            <Logo/>
            <Menu/>
            <Notification/>
            <Search />
        </div>
    )
} 


export default Header