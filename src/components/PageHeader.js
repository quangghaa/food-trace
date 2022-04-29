import React, { useEffect } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../redux/slice/traceSlice";

const PageHeader = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const state = useSelector(state => state.trace)

    const clearState = () => {
        dispatch(clear())
        navigate('/product-search')
    }

    const toTrace = () => {
        navigate('/trace');
    }

    return (
        <>
            <div id="page-header">
                <span className="name">Trace</span>

                <span className="buttons">
                    <Button className="clear" onClick={clearState}>Clear</Button>
                    <Button className="trace" onClick={toTrace} disabled={state.name.length == 0 ? true : false}>Trace</Button>
                </span>
            </div>
            <div className="info-section">
                {Object.keys(state.id).length > 0 ? <span className="pretty">{state.name}&nbsp;({state.id})</span> : <></>}
                {Object.keys(state.start).length > 0 && Object.keys(state.end).length > 0 ? <span className="pretty">Date range: {state.start} - {state.end}</span> : <></>}
                {Object.keys(state.event).length > 0 ? <span className="pretty">{state.event}</span> : <></>}
                {state.lot > 0 ? <span className="pretty">Lot: {state.lot}</span> : <></>}
                {state.pallet > 0 ? <span className="pretty">Pallet: {state.pallet}</span> : <></>}
                {state.serial > 0 ? <span className="pretty">Serial number: {state.serial}</span> : <></>}
            </div>
            <hr className="hr" />
        </>
    )
}

export default PageHeader;