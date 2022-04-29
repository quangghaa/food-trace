import React, { useEffect, useState } from "react";
import { Button, Input, Spin } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { openNotification } from "../utils/Notification";
import { useDispatch } from "react-redux";
import { updateId, updateName } from "../redux/slice/traceSlice";

const a = [
    '14 digit GS-1 Global Trade Item Number (GTIN)',
    '12 digit Universal Product Code (UPC)',
    '8 digit Universal Product Code (UPC)',
    'VN Food Trust assigned product ID.'
]

const SearchID = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    const [search, setSearch] = useState([]);

    useEffect(() => {
        const json = require('../dummy.json')
        setData(json)
    }, [])

    const { Search } = Input;

    const onSearch = (value, e) => {

        if (Object.keys(value.trim()).length == 0) openNotification('Warning', 'Please enter a product ID')

        else {
            if (Array.isArray(data)) {
                setLoading(true)

                setTimeout(() => {
                    let res = data.filter((d) => {
                        return d.id == value.trim()
                    })

                    if (res.length > 0) {
                        setSearch(res)
                        setLoading(false)
                    } else {
                        setSearch(res)
                        setLoading(false)
                        openNotification('Warning', 'No product found with the ID')
                    }

                }, 800)

            }
        }

        // else navigate(`/product-search/${value.trim()}`);
    }

    const toDetail = () => {
        dispatch(updateId(search[0].id.trim()))
        dispatch(updateName(search[0].name.trim()))
        navigate(`/product-search/${search[0].id}`)
    }

    return (
        <>
            <div className="search-wrapper">
                <span className="search-type">Product Identification Number</span>
                <Search
                    placeholder="Enter product ID"
                    allowClear
                    enterButton="Search"
                    // size="large"
                    onSearch={onSearch}
                />

                <div className="sm-section">
                    <span className="hint">
                        <span><InfoCircleOutlined />&nbsp;</span>
                        <span>Accepted product identifiers:</span>
                    </span>
                    <ul>
                        {a.map((v, i) => {
                            return (
                                <li key={i} className='more-hint'>{v}</li>
                            )
                        })}
                    </ul>

                    {loading ? <Spin size="large" /> : <></>}

                    {search.length > 0 ?
                        <>
                            <div className='total-found'>{search.length} product found with the ID above. </div>
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
                </div>
            </div>
        </>
    )
}

export default SearchID;