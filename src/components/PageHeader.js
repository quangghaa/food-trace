import React from "react";
import { Button } from "antd";

const PageHeader = () => {
    return (
        <>
            <div id="page-header">
                <span className="name">Trace</span>
                <span className="buttons">
                    <Button className="clear">Clear</Button>
                    <Button className="trace">Trace</Button>
                </span>
            </div>
            <hr className="hr"/>
        </>
    )
}

export default PageHeader;