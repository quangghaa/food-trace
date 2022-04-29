import React, { useEffect, useState } from "react";
// import MyHeader from "../components/MyHeader";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import TraceGraph from "../components/TraceGraph";
import axios from "axios";
import { getList } from "../services/api";

const Tree = () => {
    const navigate = useNavigate();

    const toTrace = () => {
        navigate('/trace');
    }

    const toTree = () => {
        navigate('/tree');
    }

    const [loading, setLoading] = useState(false)

    const [state, setState] = useState({})

    console.log("STATE: ", state)

    useEffect(() => {
        try{
            setLoading(true)

            const getTrace = async () => {
                const res = await getList(`${process.env.REACT_APP_VTF_URL}trace/ingredient/pizza`)

                if(res) {
                    setState(res.data)
                    console.log("RES: ", res.data)
                }
            }

            getTrace()
        } finally {
            setLoading(false)
        }

    }, [])

    

    return (
        <>
            <div className="container">
                <PageHeader />
                <div className="small-nav">
                    <span onClick={toTrace}>Supply chain view</span>
                    <span onClick={toTree}>Product view</span>

                </div>
                <Row gutter={16}>
                    <Col span={4}>
                        <div className="product-title">
                            <span className="bold">Farm</span>
                            <span>5</span>
                        </div>

                        <div className="product-title">
                            <span className="bold">Distribution Center</span>
                            <span>1</span>
                        </div>

                        <div className="product-title">
                            <span className="bold">Supplier</span>
                            <span>1</span>
                        </div>

                        <div className="product-title">
                            <span className="bold">Distributors</span>
                            <span>5</span>
                        </div>

                        <div className="product-title">
                            <span className="bold">Manufacturer of Goods</span>
                            <span>1</span>
                        </div>

                        <div className="product-title">
                            <span className="bold">Store</span>
                            <span>1</span>
                        </div>
                    </Col>
                    <Col span={20}>
                        <TraceGraph data={state}/>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Tree;