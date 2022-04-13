import React from "react";
import logo from '../static/imgs/logo.jpg';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';

const MyHeader = () => {
    return (
        <>
            <div className="header">
                <span>
                    <span><img src={logo} alt="LOGO" height="46" /></span>
                    <span className='title'>
                        <span className='name'>VN Trust Food</span>
                    </span>
                </span>
                <span className='header-icons'>
                    <span><SearchOutlined /></span>
                    <span><UserOutlined className='mg-left' /></span>
                </span>
            </div>
            <hr id="header-hr" />
        </>
    )
}

export default MyHeader;