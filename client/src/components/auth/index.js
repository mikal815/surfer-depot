import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import AuthForm from './authForm';
import PreventSignInRoute from 'hoc/preventSignInRoute'


const RegisterLogin = (props) => {
    const [formType, setFormType] = useState(false);


    const toogleFormType = () => {
        setFormType(!formType);
    }


    return (
        <PreventSignInRoute >
            <div className="page_wrapper">
                <div className="container">
                    <div className="register_login_container">
                        <div className="left">
                            {formType ?
                                <>
                                    <h1>New customers</h1>
                                    <p>Register with your email. **For demo purposes and to enter admin view go back to 'Log In' form and use provided email: admin-demo@gmail.com and password: testing123</p>
                                </>
                                :
                                <>
                                    <h1>Welcome back</h1>
                                    <p>**For demo purposes and to enter admin view use provided email: admin-demo@gmail.com and password: testing123</p>
                                </>
                            }

                            <Button
                                variant="contained"
                                color="default"
                                size="small"
                                onClick={() => toogleFormType()}
                            >
                                {formType ? "Already registered ?" : "Need to register"}
                            </Button>

                        </div>
                        <div className="right">
                            <h2>{formType ? 'Register' : 'Sign in'}</h2>
                            <AuthForm
                                formType={formType}
                                {...props}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PreventSignInRoute>
    )


}

export default RegisterLogin;