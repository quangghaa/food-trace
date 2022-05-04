import React, { useEffect, useState } from "react";
// import MyHeader from "../components/MyHeader";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { Col, Row, Spin } from "antd";
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

    // const [state, setState] = useState({})

    const [state, setState] = useState({
        farm: [],
        supplier: [],
        manufacturer: [],
        destination: [],
        trace: {}
    })

    // useEffect(() => {
    //     try{
    //         setLoading(true)

    //         const getTrace = async () => {
    //             const res = await getList(`${process.env.REACT_APP_VTF_URL}trace/ingredient/pizza`)

    //             if(res) {
    //                 setState(res.data)
    //                 console.log("RES: ", res.data)
    //             }
    //         }

    //         getTrace()
    //     } finally {
    //         setLoading(false)
    //     }

    // }, [])

    useEffect(() => {
        // farm supplier manufacturer destination
        const pName = 'pizza';

        const farmUrl = `${process.env.REACT_APP_VTF_URL}trace/origin/${pName}`;
        const supUrl = `${process.env.REACT_APP_VTF_URL}trace/supplier/${pName}`;
        const manUrl = `${process.env.REACT_APP_VTF_URL}trace/manufacturer/${pName}`;
        const desUrl = `${process.env.REACT_APP_VTF_URL}trace/destination/${pName}`;
        const traceUrl = `${process.env.REACT_APP_VTF_URL}trace/ingredient/pizza`

        const farmReq = axios.get(farmUrl);
        const supReq = axios.get(supUrl);
        const manReq = axios.get(manUrl);
        const desReq = axios.get(desUrl);
        const traceReq = axios.get(traceUrl)

        setLoading(true)
        axios.all([farmReq, supReq, manReq, desReq, traceReq]).then(axios.spread((...responses) => {
            const newState = {
                farm: responses[0].data,
                supplier: responses[1].data,
                manufacturer: responses[2].data,
                destination: responses[3].data,
                trace: responses[4].data
            }

            setState(newState);

        })).catch(errs => {
            console.log("ERRROR: ", errs);
        }).finally( () => {
            setLoading(false)
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
                <Row gutter={16}>
                    <Col span={4}>
                        <div className="product-title">
                            <span className="bold">Farm</span>
                            <span>{state.farm.length}</span>
                        </div>

                        <div className="product-title">
                            <span className="bold">Supplier</span>
                            <span>{state.supplier.length}</span>
                        </div>

                        <div className="product-title">
                            <span className="bold">Manufacturer</span>
                            <span>{state.manufacturer.length}</span>
                        </div>

                        <div className="product-title">
                            <span className="bold">Store</span>
                            <span>{state.destination.length}</span>
                        </div>
                    </Col>
                    <Col span={20}>
                        {loading ? <Spin size='large' /> : <></>}
                        <TraceGraph data={state.trace}/>
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Tree;