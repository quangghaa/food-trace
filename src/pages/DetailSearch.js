import React, { useState } from "react";
import { Row, Col } from 'antd';
import SearchDate from "../components/SearchDate";
import PageHeader from '../components/PageHeader';
import Lot from '../components/Lot';
import Pallet from '../components/Pallet';
import SerialNumber from "../components/SerialNumber";

const DetailSearch = () => {
    const [state, setState] = useState({
        lot: [],
        pallet: [],
        serial: []
    })

    const [lotState, setLotState] = useState([])

    const [palState, setPalState] = useState([])

    const [serState, setSerState] = useState([])

    const [loading, setLoading] = useState(false)

    const setL = (bool) => {
        setLoading(bool)
    }

    const setLot = (l) => {
        // setState({...state, lot: l})
        setLotState(l)
    }

    const setPallet = (p) => {
        // setState({...state, pallet: p})
        setPalState(p)
    }

    const setSerial = (s) => {
        // setState({...state, serial: s})
        setSerState(s)
    }

    return (
        <>
            <div className="container">
                <PageHeader />
                <div>
                    <span className="suggestion">Next, narrow down the search either by date or by lot, serial, or pallet number</span>
                    <Row gutter={20} className='mt-1'>
                        <Col span={7}>
                            <SearchDate setL={setL} setLot={setLot} setPal={setPallet} setSer={setSerial} />
                        </Col>

                        <Col span={7} className='border'>
                            <Lot loading={loading} data={lotState} />
                        </Col>

                        <Col span={3} className='border-right'>
                            <Pallet loading={loading} data={palState} />
                        </Col>

                        <Col span={7}>
                            <SerialNumber loading={loading} data={serState} />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default DetailSearch;