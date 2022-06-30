import React from 'react';
import '@style/MyAccount.scss';

const MyAccount = () => {
    return (
        <div className="MyAccount">
            <div className="MyAccount-container">
                <h1 className="title">My account</h1>

                <form action="/" className="form">
                    <div>
                        <label for="name" className="label">Name</label>
                        <p className="value">Edith Balbouze</p>
                
                        <label for="email" className="label">Email address</label>
                        <p className="value">edithbalbouze@example.com</p>

                        <label for="password" className="label">Password</label>
                        <p className="value">*********</p>
                    </div>
                    <input type="submit" value="Edit" className="secondary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default MyAccount;