import React from 'react';
import { Button, Input, DatePicker } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { openNotification } from '../utils/Notification';

const SearchPO = () => {

    const { Search } = Input;

    const navigate = useNavigate();

    const onSearch = value => {
        if(Object.keys(value.trim()).length == 0) {
            openNotification('Warning', 'Please enter PO');
        } else {
            navigate(`/product-search/${value}`);
        }
    }

    const onChange = value => {
        console.log(value)
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
                    <div className='st-ed'>
                        <span>
                            Start date <br />
                            <DatePicker onChange={onChange} />
                        </span>
                        <span>
                            End date <br />
                            <DatePicker onChange={onChange} />
                        </span>
                    </div>

                </div>

                <Button>Find purchase orders</Button>
            </div>

        </>
    )
}

export default SearchPO;