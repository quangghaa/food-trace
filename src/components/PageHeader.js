import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const PageHeader = () => {
    const navigate = useNavigate();
    const toTrace = () => {
        navigate('/trace');
    }

    return (
        <>
            <div id="page-header">
                <span className="name">Trace</span>
                <span className="buttons">
                    <Button className="clear">Clear</Button>
                    <Button className="trace" onClick={toTrace}>Trace</Button>
                </span>
            </div>
            <hr className="hr"/>
        </>
    )
}

export default PageHeader;