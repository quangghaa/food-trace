import React from "react";
import PageHeader from "../components/PageHeader";
import { Row, Col } from 'antd';
import SearchID from '../components/SearchID';
import SearchName from '../components/SearchName';
import SearchPO from "../components/SearchPO";

const ProductSearch = () => {
    

    return (
        <>
            <div className="container">
                <PageHeader />
                <div>
                    <span className="suggestion">Choose the product to trace using one of the options below</span>
                    <Row gutter={20} className='mt-1'>
                        <Col span={8}>
                            <SearchID />
                        </Col>

                        <Col span={8} className='border'>
                            <SearchName />
                        </Col>

                        <Col span={8}>
                            <SearchPO />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default ProductSearch;