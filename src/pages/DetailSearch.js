import React from "react";
import { Row, Col } from 'antd';
import SearchDate from "../components/SearchDate";
import PageHeader from '../components/PageHeader';
import Lot from '../components/Lot';
import Pallet from '../components/Pallet';
import SerialNumber from "../components/SerialNumber";

const DetailSearch = () => {
    return (
        <>
            <div className="container">
                <PageHeader />
                <div>
                    <span className="suggestion">Next, narrow down the search either by date or by lot, serial, or pallet number</span>
                    <Row gutter={20} className='mt-1'>
                        <Col span={7}>
                            <SearchDate />
                        </Col>

                        <Col span={7} className='border'>
                            <Lot />
                        </Col>

                        <Col span={3} className='border-right'>
                            <Pallet />
                        </Col>

                        <Col span={7}>
                            <SerialNumber />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default DetailSearch;