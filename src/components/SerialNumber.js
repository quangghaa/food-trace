import React, { useState } from "react";
import { Input, Radio, Space, Spin } from 'antd';

const SerialNumber = (props) => {
    const data = [
        {
            number: 6183,
            totalFound: 4
        },
        {
            number: 7183,
            totalFound: 4
        },
        {
            number: 8183,
            totalFound: 4
        },
        {
            number: 9183,
            totalFound: 4
        }
    ]

    const [value, setValue] = useState('');

    const { Search } = Input;

    const onSearch = (value) => {
        console.log(value)
    }

    const onChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }



    return (
        <>
            <div className="search-wrapper">
                <span className="search-title">{props.data ? props.data.length : 0} Serial numbers <br /></span>
                {props.loading ? <Spin size='large' /> : <></>}

                {props.data && props.data.length > 0 ?
                    <>
                        <div className="mt-1">
                            <Search placeholder="input search text" onSearch={onSearch} />
                        </div>

                        <Radio.Group onChange={onChange} value={value}>
                            <Space direction="vertical">
                                {props.data.map((v, i) => {
                                    return (
                                        <>
                                            <Radio key={i} value={v.number}>{v.number}</Radio>
                                        </>
                                    )
                                })}
                            </Space>
                        </Radio.Group>
                    </>
                    : 
                    <></> 
            }
            </div>
        </>
    )
}

export default SerialNumber;