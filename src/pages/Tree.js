import React from "react";
// import MyHeader from "../components/MyHeader";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";

const Tree = () => {
    const navigate = useNavigate();

    const toTrace = () => {
        navigate('/trace');
    }

    const toTree = () => {
        navigate('/tree');
    }

    return (
        <>
            <div className="container">
                <PageHeader />
                <div className="small-nav">
                    <span onClick={toTrace}>Supply chain view</span>
                    <span onClick={toTree}>Product view</span>
                    Tree
                </div>
            </div>

        </>
    )
}

export default Tree;