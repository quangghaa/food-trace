import React from "react";
import { Row, Col, Card } from 'antd';
import { Line } from '@ant-design/charts';
import bigpic from '../static/imgs/big-img.jpg';
import TraceChart from "../charts/TraceChart";

const detailChartData = [   
    {
        name: "Daily trace usage by your organization",
        data: [
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 1 },
            { x: 4, y: 0 },
            { x: 5, y: 0 },
            { x: 6, y: 1 },
            { x: 7, y: 0 },
            { x: 8, y: 0 },
            { x: 9, y: 0 },
            { x: 10, y: 0 },
            { x: 11, y: 0 },
            { x: 12, y: 0 },
            { x: 13, y: 0 },
            { x: 14, y: 0 },
            { x: 15, y: 0 },
            { x: 16, y: 0 },
            { x: 17, y: 0 },
            { x: 18, y: 0 },
            { x: 19, y: 0 },
            { x: 20, y: 0 },
            { x: 21, y: 0 },
            { x: 22, y: 0 },
            { x: 23, y: 0 },
            { x: 24, y: 0 },
            { x: 25, y: 0 },
            { x: 26, y: 0 },
            { x: 27, y: 0 },
            { x: 28, y: 0 },
            { x: 29, y: 0 },
            { x: 30, y: 0 },
        ]
    },
    {
        name: "Daily logins by your organization",
        data: [
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },
            { x: 4, y: 0 },
            { x: 5, y: 0 },
            { x: 6, y: 1 },
            { x: 7, y: 0 },
            { x: 8, y: 0 },
            { x: 9, y: 0 },
            { x: 10, y: 0 },
            { x: 11, y: 0 },
            { x: 12, y: 1 },
            { x: 13, y: 0 },
            { x: 14, y: 0 },
            { x: 15, y: 0 },
            { x: 16, y: 0 },
            { x: 17, y: 0 },
            { x: 18, y: 0 },
            { x: 19, y: 0 },
            { x: 20, y: 0 },
            { x: 21, y: 0 },
            { x: 22, y: 0 },
            { x: 23, y: 0 },
            { x: 24, y: 0 },
            { x: 25, y: 0 },
            { x: 26, y: 0 },
            { x: 27, y: 0 },
            { x: 28, y: 0 },
            { x: 29, y: 0 },
            { x: 30, y: 0 },
        ]
    }
]

const eventUploadData = [
    {
        name: "Event uploads",
        data: [
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 1 },
            { x: 4, y: 0 },
            { x: 5, y: 0 },
            { x: 6, y: 1 },
            { x: 7, y: 0 },
            { x: 8, y: 0 },
            { x: 9, y: 0 },
            { x: 10, y: 0 },
            { x: 11, y: 0 },
            { x: 12, y: 0 },
            { x: 13, y: 0 },
            { x: 14, y: 0 },
            { x: 15, y: 0 },
            { x: 16, y: 0 },
            { x: 17, y: 0 },
            { x: 18, y: 0 },
            { x: 19, y: 0 },
            { x: 20, y: 0 },
            { x: 21, y: 0 },
            { x: 22, y: 0 },
            { x: 23, y: 0 },
            { x: 24, y: 0 },
            { x: 25, y: 0 },
            { x: 26, y: 0 },
            { x: 27, y: 0 },
            { x: 28, y: 0 },
            { x: 29, y: 0 },
            { x: 30, y: 0 },
        ]
    }
]

const DBSectionC = () => {
    return (
        <>
            <div id="dbsc">
                {/* <span className="dbsa-title">Your Organization Details</span> */}
                <Row>
                        <Col span={24}>
                            <Card>
                                {/* <p>{chartData.name}</p> */}
                                <TraceChart />
                            </Card>
                        </Col>
                </Row>

            </div>
        </>
    )
}

export default DBSectionC;