import React from "react";
// import MyHeader from "../components/MyHeader";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import TraceItems from "../components/TraceItems";

const Trace = () => {
    const navigate = useNavigate();

    const toTrace = () => {
        navigate('/trace');
    }

    const toTree = () => {
        navigate('/tree');
    }

    const title = 'Farm';
    const total = 3;
    const data = [
        {
            productName: 'P1',
            total: 1,
            places: [
                {
                    id: 'ID',
                    name: 'Places'
                }
            ]
            
        },
        {
            productName: 'P1',
            total: 2,
            places: [
                {
                    id: 'ID',
                    name: 'Places'
                },
                {
                    id: 'ID',
                    name: 'Places'
                }
            ]
        },
        {
            productName: 'P1',
            total: 3,
            places: [
                {
                    id: 'ID',
                    name: 'Places'
                },
                {
                    id: 'ID',
                    name: 'Places'
                },
                {
                    id: 'ID',
                    name: 'Places'
                }
            ]
        },
    ]

    return (
        <>
            <div className="container">
                <PageHeader />
                <div className="small-nav">
                    <span onClick={toTrace}>Supply chain view</span>
                    <span onClick={toTree}>Product view</span>
                </div>

                <div className="trace-section">
                    <Row gutter={8}>
                        <Col span={4}>
                            <TraceItems title='Farm' total={total} items={data} />
                        </Col>
                        <Col span={4}>
                            2
                        </Col>
                        <Col span={4}>
                            3
                        </Col>
                        <Col span={4}>
                            4
                        </Col>
                        <Col span={4}>
                            5
                        </Col>
                        <Col span={4}>
                            6
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    )
}

export default Trace;