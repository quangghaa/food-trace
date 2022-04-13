import React from "react";
import { Row, Col, Card } from 'antd';
import { FileWordOutlined, ArrowRightOutlined } from '@ant-design/icons';

const DBSectionD = () => {
    const orgModuleData = [
        {
            name: "Your organization's modules",
            block: [
                {
                    icon: "I1",
                    name: "Data 1",
                    forwardIcon: "FI1"
                },
                {
                    icon: "I2",
                    name: "Data 2",
                    forwardIcon: "FI2"
                },
                {
                    icon: "I3",
                    name: "Data 3",
                    forwardIcon: "FI3"
                },
                {
                    icon: "I4",
                    name: "Data 4",
                    forwardIcon: "FI4"
                },
                {
                    icon: "I5",
                    name: "Data 5",
                    forwardIcon: "FI5"
                },
                {
                    icon: "I6",
                    name: "Data 6",
                    forwardIcon: "FI6"
                },
            ]
        }
    ]

    return (
        <>
            <div id='dbsd'>
                {orgModuleData.map((data) => (
                    <Row>
                        <Col span={6}>
                            <span>{data.name}</span>
                        </Col>
                        <Col span={18}>
                            <Row gutter={[16, 16]}>
                                {data.block.map((blockdata) => (
                                    <Col span={8}>
                                        <Card>
                                            <span><FileWordOutlined /></span>
                                            <div className='second-row'>
                                                <span>{blockdata.name}</span>
                                                <span><ArrowRightOutlined /></span>
                                            </div>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                ))}
            </div>


        </>
    )
}

export default DBSectionD;