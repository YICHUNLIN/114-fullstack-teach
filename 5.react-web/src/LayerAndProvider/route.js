import React from "react";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import { useContext } from "react";
import { AppContext } from "../storage/context";
const routes = [
    {
        path: '/',
        component: <Home/>
    }
]

const Router = ({pathname, ...props}) => {
    const [state] = useContext(AppContext);
    const doRoute = () => {
        const pms = state.auth.user.permissions.map(p => p.name);
        const targets = routes
                            .filter(r => r.path === pathname)
                            .filter(r => !r.allow ? true : pms.includes(r.allow));
        if (targets.length > 0) return React.cloneElement(targets[0].component, {...props})
        return <NotFound/>
    }
    return <>{doRoute()}</>
}

export default Router