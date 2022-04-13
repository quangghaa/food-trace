import React from "react";
import { Input } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { openNotification } from "../utils/Notification";

const a = [
    '14 digit GS-1 Global Trade Item Number (GTIN)',
    '12 digit Universal Product Code (UPC)',
    '8 digit Universal Product Code (UPC)',
    'VN Food Trust assigned product ID.'
]

const SearchID = () => {
    const navigate = useNavigate();

    const { Search } = Input;
    const onSearch = value => {
        console.log(value);
        if(Object.keys(value.trim()).length == 0) openNotification('Warning', 'Please enter a product ID');
        else navigate(`/product-search/${value.trim()}`);
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
                                <li key={i}>{v}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SearchID;