import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const AdminRoute = ({ children, ...rest }) => {

    const [userInfo, setUserInfo] = useContext(UserContext)

    const admin = userInfo.admins.filter(admin => admin.email === userInfo.email);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                admin.length > 0 ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default AdminRoute;