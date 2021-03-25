import Explore from './explore/Explore'
import Home from './home/Home'
import Subscription from './subscription/Subscription'
import Ylibrary from './ylibrary/Ylibrary'


let Sidebar = () => {
    return (
        <div>
            <Explore/>
            <Home/>
            <Subscription/>
            <Ylibrary/>
        </div>
    )
}

export default Sidebar