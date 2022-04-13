import React from "react";
import { Row, Col, Card } from 'antd';

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

    return (
        <>
            <div id='dbsb'>
                <div className="dbsb-title">Your Organization</div>
                <Row gutter={16}>
                    {orgData.map((data) => (
                        <Col span={6}>
                            <Card size='small' title={data.title}>
                                <span className='count'>{data.number}</span><br />
                                <span>{data.detail}</span>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default DBSectionB;