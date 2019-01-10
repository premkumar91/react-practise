import Home from "../components/home/Home"
import About from "../components/about/About"
import Contact from '../components/contact/Contact';
import FreightForwarding from '../components/freight_forwarding/FreightForwarding';
import Tracking from '../components/tracking/Tracking';
export const routes = {
    data:[{
        component:Home,
        path:'/'
    },{
        component:About,
        path:'/about'
    },{
        component:Contact,
        path:'/contact_us'
    },{
        component:FreightForwarding,
        path:'/freight_forwarding'
    },{
        component:Tracking,
        path:'/tracking'
    }],
    defaultRoute:{
        component:Home,
        path:'/'
    }
}