import React, { useEffect, useState } from "react";
// import MyHeader from "../components/MyHeader";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import TraceItems from "../components/TraceItems";
import axios from "axios";

const Trace = () => {
    const navigate = useNavigate();

    const toTrace = () => {
        navigate('/trace');
    }

    const toTree = () => {
        navigate('/tree');
    }

    const [state, setState] = useState({
        farm: [],
        supplier: [],
        manufacturer: [],
        destination: []
    })

    useEffect(() => {
        // farm supplier manufacturer destination
        const pName = 'pizza';

        const farmUrl = `${process.env.REACT_APP_VTF_URL}trace/origin/${pName}`;
        const supUrl = `${process.env.REACT_APP_VTF_URL}trace/supplier/${pName}`;
        const manUrl = `${process.env.REACT_APP_VTF_URL}trace/manufacturer/${pName}`;
        const desUrl = `${process.env.REACT_APP_VTF_URL}trace/destination/${pName}`;

        const farmReq = axios.get(farmUrl);
        const supReq = axios.get(supUrl);
        const manReq = axios.get(manUrl);
        const desReq = axios.get(desUrl);

        axios.all([farmReq, supReq, manReq, desReq]).then(axios.spread((...responses) => {
            const newState = {
                farm: responses[0].data,
                supplier: responses[1].data,
                manufacturer: responses[2].data,
                destination: responses[3].data
            }

            setState(newState);

        })).catch(errs => {
            console.log("ERRROR: ", errs);
        })

    }, [])

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
                        <Col span={6}>
                            <TraceItems title='Farm' data={state.farm} />
                        </Col>
                        <Col span={6}>
                            <TraceItems title='Supplier' data={state.supplier} />
                        </Col>
                        <Col span={6}>
                            <TraceItems title='Manufacturer' data={state.manufacturer} />
                        </Col>
                        <Col span={6}>
                            <TraceItems title='Store' data={state.destination} />
                        </Col>
                        {/* <Col span={4}>
                            5
                        </Col>
                        <Col span={4}>
                            6
                        </Col> */}
                    </Row>
                </div>
            </div>

        </>
    )
}

export default Trace;