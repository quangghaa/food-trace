import React, { useEffect, useState } from "react";
import { Button, Input, Spin } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { openNotification } from "../utils/Notification";
import { useDispatch } from "react-redux";
import { updateId, updateName } from "../redux/slice/traceSlice";
import { getOne } from "../services/api";

const a = [
    '14 digit GS-1 Global Trade Item Number (GTIN)',
    '12 digit Universal Product Code (UPC)',
    '8 digit Universal Product Code (UPC)',
    'VN Food Trust assigned product ID.'
]

const SearchID = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const [search, setSearch] = useState([]);

    const { Search } = Input;

    const onSearch = value => {

        let temp = value.trim()
        let inp = temp.toLowerCase()

        if (Object.keys(inp).length == 0) openNotification('Warning', 'Please enter a product ID')

        else {
            setLoading(true)
            try {
                const getById = async () => {
                    const res = await getOne("trace/productId", inp)

                    if(res) setSearch(res.data)

                    if(res && res.data.length == 0) openNotification('Warning', 'No product found with the ID above')
                }

                getById()

            } catch (err) {
                console.log("Some thing wrong: ", err)
            } finally {
                setLoading(false)
            }
        }

    }

    const toDetail = () => {
        dispatch(updateId(search[0].Id.trim()))
        dispatch(updateName(search[0].Product.trim()))
        navigate(`/product-search/${search[0].Id}`)
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
                                    <span className='id'>{v.Id}</span>
                                    <br />
                                    <span className='name'>{v.Product}</span>
                                    <br />
                                    <span className='owner'>{v.Owner}</span>
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