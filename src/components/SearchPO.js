import React, { useEffect, useState } from 'react';
import { Button, Input, DatePicker, Spin } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { openNotification } from '../utils/Notification';
import { useDispatch } from 'react-redux';
import { updateId, updateName } from '../redux/slice/traceSlice';

const SearchPO = () => {

    const { Search } = Input;

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    const [search, setSearch] = useState([]);

    useEffect(() => {
        const json = require('../dummy.json')
        setData(json)
    }, [])

    const onSearch = value => {
        if (Object.keys(value.trim()).length == 0) openNotification('Warning', 'Please enter PO')

        else {
            if (Array.isArray(data)) {
                setLoading(true)

                setTimeout(() => {
                    let res = data.filter((d) => {
                        return d.po == value.trim()
                    })

                    if (res.length > 0) {
                        setSearch(res)
                        setLoading(false)
                    } else {
                        setSearch(res)
                        setLoading(false)
                        openNotification('Warning', 'No product found with the PO')
                    }

                }, 800)
                
            }
        }
    }

    const onChange = value => {
        console.log(value)
    }

    const toDetail = () => {
        dispatch(updateId(search[0].id.trim()))
        dispatch(updateName(search[0].name.trim()))
            navigate(`/product-search/${search[0].id}`);
    }

    return (
        <>
            <div className='search-wrapper'>
                <span className='search-type'>Purchase order</span>
                <Search
                    placeholder="Enter PO number"
                    allowClear
                    enterButton="Search"
                    // size="large"
                    onSearch={onSearch}
                />
                <div className='sm-section'>
                    <div className='hint'>
                        <span><InfoCircleOutlined />&nbsp;</span>
                        <span>To trace a lot number for a shipped product and known PO number</span>
                    </div>
                    <span className='more-hint'>
                        If you do not have a PO number, use a date range to search for POs by expected delivery dates
                    </span>
                    <br />

                    {loading ? <Spin size="large"  /> : <></>}

                    {search.length > 0 ?
                        <>
                            <div className='total-found'>{search.length} product found with the PO above. </div>
                            <hr className='found-hr' />
                            {search.map((v, i) => (
                                <>
                                    <span className='id'>{v.id}</span>
                                    <br />
                                    <span className='name'>{v.name}</span>
                                    <br />
                                    <span className='owner'>{v.owner}</span>
                                    <br />
                                    <br />
                                    <Button onClick={toDetail}>Use this product</Button>
                                </>
                            ))}
                        </> : <></>}

                    {/* <div className='st-ed'>
                        <span>
                            Start date <br />
                            <DatePicker onChange={onChange} />
                        </span>
                        <span>
                            End date <br />
                            <DatePicker onChange={onChange} />
                        </span>
                    </div> */}

                </div>

                {/* <Button>Find purchase orders</Button> */}
            </div>

        </>
    )
}

export default SearchPO;