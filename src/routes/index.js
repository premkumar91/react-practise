import Home from "../components/home/Home"
import About from "../components/about/About"
import Contact from '../components/contact/Contact';
import FreightForwarding from '../components/freight_forwarding/FreightForwarding';
import Tracking from '../components/tracking/Tracking';
export const routes = {
    data:[{
        component:Home,
        path:'/',
        key:1
    },{
        component:About,
        path:'/about',
        key:2
    },{
        component:Contact,
        path:'/contact_us',
        key:3
    },{
        component:FreightForwarding,
        path:'/freight_forwarding',
        key:4
    },{
        component:Tracking,
        path:'/tracking',
        key:5
    }],
    defaultRoute:{
        component:Home,
        path:'/'
    }
}