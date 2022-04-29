import React, { useEffect, useState } from "react";
import { Select, DatePicker, Button } from 'antd';
import { formatDate } from "../utils/Func";
import { useDispatch, useSelector } from "react-redux";
import { updateEnd, updateEvent, updateStart } from "../redux/slice/traceSlice";
import { openNotification } from "../utils/Notification";
import useSelection from "antd/lib/table/hooks/useSelection";

const SearchDate = (props) => {
    const { Option } = Select

    const dispatch = useDispatch()

    const trace = useSelector(state => state.trace)


    const [data, setData] = useState([])

    const [loading, setLoading] = useState(false)

    const [search, setSearch] = useState([])

    useEffect(() => {
        const json = require('../dummy.json')
        setData(json)
    }, [])

    const events = [
        {
            label: 'Event 1',
            value: 'Value 1'
        },
        {
            label: 'Event 2',
            value: 'Value 2'
        },
    ]

    const [se, setSe] = useState({
        start: '',
        end: ''
    })

    const onChangeStart = (value) => {
        const date = new Date(value)
        const nice = formatDate(date)

        console.log(nice)
        setSe({...se, start: nice })
    }

    const onChangeEnd = (value) => {
        const date = new Date(value)
        const nice = formatDate(date)

        console.log(nice)

        setSe({...se, end: nice })
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

            if (Array.isArray(data)) {
                props.setL(true)

                setTimeout(() => {
                    let res = data.filter((d) => {
                        return d.id == trace.id
                    })
                    props.setLot(res[0].lot)
                    props.setPal(res[0].pallet)
                    props.setSer(res[0].serial)
                    props.setL(false)

                    if (res.length == 0) {
                        openNotification('Warning', 'No product found with the infos above')
                    }

                }, 800)

            }
        }
    }

    return (
        <>
            <div className="search-wrapper">
                <span className="search-type">Date type<br /></span>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Search to Select"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                    }
                    onSelect={onSelect}
                >
                    {events.map((v, i) => {
                        return (
                            <>
                                <Option key={i} value={v.value}>{v.label}</Option>
                            </>
                        )
                    })}
                </Select>

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

                <div className="buttons">
                    <Button onClick={onUseDateRange}>Use this date range</Button>
                    <Button className='clear'>Clear this date range</Button>
                </div>

            </div>
        </>
    )
}

export default SearchDate;