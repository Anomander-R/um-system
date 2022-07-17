import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
// import Home from './core/Home';
import Users from './components/user/Users';
// import Profile from './user/Profile'
// import EditProfile from './user/EditProfile'
// import Signup from './user/Signup'
// import Signin from './auth/Signin'
// import PrivateRoute from './auth/PrivateRoute'
// import Menu from './core/Menu';

const MainRouter=()=>{
    return(
        <Fragment>
            <Menu/>
            <Switch>
            
                <Route exact path='/' component={Users}/>
                {/* <Route exact path='/users' component={Users}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/signin' component={Signin}/>
                <PrivateRoute path='/user/edit/:userId' component={EditProfile}/>
                <Route path='/user/:userId' component={Profile}/> */}
            </Switch>
            
        </Fragment>
    )
}

export default MainRouter;