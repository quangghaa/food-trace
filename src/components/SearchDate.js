import React, { useEffect, useState } from "react";
import { Select, DatePicker, Button } from 'antd';
import { formatDate, revertDate } from "../utils/Func";
import { useDispatch, useSelector } from "react-redux";
import { updateEnd, updateEvent, updateStart } from "../redux/slice/traceSlice";
import { openNotification } from "../utils/Notification";
import useSelection from "antd/lib/table/hooks/useSelection";
import { getList } from "../services/api";

const SearchDate = (props) => {

    const dispatch = useDispatch()

    const trace = useSelector(state => state.trace)

    const [se, setSe] = useState({
        start: '',
        end: ''
    })

    const [clear, setClear] = useState(true)

    const onChangeStart = (value) => {
        const date = new Date(value)
        const nice = revertDate(date)

        console.log(nice)
        setSe({ ...se, start: nice })
    }

    const onChangeEnd = (value) => {
        const date = new Date(value)
        const nice = revertDate(date)

        console.log(nice)

        setSe({ ...se, end: nice })
    }

    const onSelect = (value) => {
        dispatch(updateEvent(value))
        console.log(value)
    }

    const onUseDateRange = () => {
        if (se.start.length == 0 || se.end.length == 0) openNotification('warning', 'Please select date range first')
        else {
            dispatch(updateStart(se.start))
            dispatch(updateEnd(se.end))

            console.log("NOW fetch some api")

            try {
                props.setL(true)
                const body = {
                    transportId: trace.id,
                    from: se.start,
                    to: se.end
                }
                console.log("body??? ", body)
                const getDetail = async () => {
                    const res = await getList(`trace/batch`, body)
                    console.log("response: ", res.data[0].Lot)

                    if (res) props.setLot(res.data[0].Lot)

                    if (res && res.data.length == 0) openNotification('Warning', 'No product found with the infos above')
                }

                getDetail()

            } catch (err) {
                console.log("Some thing wrong")
            } finally {
                props.setL(false)
            }
        }
    }

    const onClear = () => {
        console.log("CLICK")
        setClear(true)
    }

    return (
        <>
            <div className="search-wrapper">
                <span className="search-type">Date type<br /></span>
                {clear && (
                    <div className='st-ed'>
                        <span>
                            Start date <br />
                            <DatePicker onChange={onChangeStart} />
                        </span>
                        <span>
                            End date <br />
                            <DatePicker onChange={onChangeEnd} />
                        </span>
                    </div>
                )}

                <div className="buttons">
                    <Button onClick={onUseDateRange}>Use this date range</Button>
                    <Button className='clear' onClick={onClear}>Clear this date range</Button>
                </div>

            </div>
        </>
    )
}

export default SearchDate;