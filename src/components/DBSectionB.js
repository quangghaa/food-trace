import React, { useEffect, useState } from "react";
import { Row, Col, Card } from 'antd';
import axios from 'axios';

const DBSectionB = () => {
    const orgData = [
        {
            title: "VN Food Trust Organizations",
            number: "37",
            detail: "Organization"
        },
        {
            title: "VN Food Trust Users",
            number: "11",
            detail: "Users"
        },
        {
            title: "VN Food Trust facilities",
            number: "16",
            detail: "Facilities"
        },
        {
            title: "VN Food Trust Products",
            number: "9",
            detail: "Products"
        }
    ]

    const [state, setState] = useState([]);

    useEffect(() => {
        const accUrl = `${process.env.REACT_APP_VTF_URL}account/total`;
        const blockUrl = `${process.env.REACT_APP_VTF_URL}block/total`;
        const tranUrl = `${process.env.REACT_APP_VTF_URL}transaction/total`;
        const diaUrl = `${process.env.REACT_APP_VTF_URL}diary/total`;
        const cerUrl = `${process.env.REACT_APP_VTF_URL}certificate/total`;

        const accReq = axios.get(accUrl);
        const blockReq = axios.get(blockUrl);
        const tranReq = axios.get(tranUrl);
        const diaReq = axios.get(diaUrl);
        const cerReq = axios.get(cerUrl);

        axios.all([accReq, blockReq, tranReq, diaReq]).then(axios.spread((...responses) => {
            const accRes = responses[0];
            const blockRes = responses[1]
            const tranRes = responses[2];
            const diaRes = responses[3];
            const cerRes = responses[4];

            const newState = [
                {
                    title: "VN Food Trust Accounts",
                    number: responses[0].data,
                    detail: "Accounts"
                },
                {
                    title: "VN Food Trust Blocks",
                    number: responses[1].data,
                    detail: "Blocks"
                },
                {
                    title: "VN Food Trust Transactions",
                    number: responses[2].data,
                    detail: "Transactions"
                },
                {
                    title: "VN Food Trust Diaries",
                    number: responses[3].data,
                    detail: "Diaries"
                },
                // {
                //     title: "VN Food Trust Certificates",
                //     number: responses[4].data,
                //     detail: "Certificates"
                // }
            ];

            setState(newState);
        })).catch(errs => {
            console.log("SOME ERROR", errs);
        })

    }, [])

    return (
        <>
            <div id='dbsb'>
                <div className="dbsb-title">Your Organization</div>
                <Row gutter={16}>
                    {state.length > 0 ? state.map((data) => (
                        <Col span={6}>
                            <Card size='small' title={data.title}>
                                <span className='count'>{data.number}</span><br />
                                <span>{data.detail}</span>
                            </Card>
                        </Col>
                    )) : <>NO DATA FOUND</>}
                </Row>
            </div>
        </>
    )
}

export default DBSectionB;