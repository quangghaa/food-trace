import React, { useState } from "react";
import { Radio, Space } from 'antd';

const Pallet = () => {
    const data = [
        {
            number: 2116,
            totalFound: 2
        },
        {
            number: 2118,
            totalFound: 2
        }
    ]

    const [value, setValue] = useState('');

    const onChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }

    return (
        <>
            <div className="search-wrapper">
                <span className="search-title">{data ? data[0].totalFound : 0} Pallets <br /></span>

                {data && data.length > 0 ?
                    <>
                        <div className="pallet-table-title">Pallet numbers found</div>

                        <Radio.Group onChange={onChange} value={value}>
                            <Space direction="vertical">
                                {data.map((v, i) => {
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

export default Pallet;