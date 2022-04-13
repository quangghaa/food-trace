import React from "react";
import { Select, DatePicker, Button } from 'antd';

const SearchDate = () => {
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

    const { Option } = Select;

    const onChange = () => {
        
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
                        <DatePicker onChange={onChange} />
                    </span>
                    <span>
                        End date <br />
                        <DatePicker onChange={onChange} />
                    </span>
                </div>

                <div className="buttons">
                    <Button>Use this date range</Button>
                    <Button className='clear'>Clear this date range</Button>
                </div>

            </div>
        </>
    )
}

export default SearchDate;