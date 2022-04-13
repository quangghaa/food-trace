import React, { useEffect, useRef } from 'react';
import { Input, Radio, Space, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { openNotification } from '../utils/Notification';

const SearchName = () => {
    const total = 1;
    const found = [
        {
            id: '1000900098.bkNA',
            name: "Product A",
            owner: 'Food Org A',
            totalFound: 2
        },
        {
            id: '1000900099.bkNA',
            name: "Product B",
            owner: 'Food Org B',
            totalFound: 2
        }
    ]

    // const [select, setSelect] = useState('');
    const [value, setValue] = React.useState('');

    // const select = useRef('');

    const { Search } = Input;

    const navigate = useNavigate();

    const onSearch = value => {

    }

    const onChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);

    }

    const toDetail = () => {
        if(Object.keys(value.trim()).length == 0) {
            openNotification('Warning', 'You should select a product first');
        } else {
            navigate(`/product-search/${value.trim()}`);
        }
    }

    useEffect(() => {
        console.log("check render");
    },[])

    return (
        <>
            <div className='search-wrapper'>
                <span className='search-type'>Product name</span>
                <Search placeholder="Enter product name" allowClear onSearch={onSearch} />
                <div className='sm-section'>
                    <div className='total-found'>{found[0].totalFound} product found with the name above. </div>
                    <hr className='found-hr' />
                    <Radio.Group onChange={onChange} value={value}>
                        <Space direction='vertical'>
                            {found.map((v, i) => {
                                return (
                                    <>
                                        <Radio key={i} value={v.id}>
                                            <span className='id'>{v.id}</span>
                                            <br />
                                            <br />
                                            <span className='name'>{v.name}</span>
                                            <br />
                                            <span className='owner'>{v.owner}</span>

                                        </Radio>
                                    </>
                                )
                            })}
                        </Space>
                    </Radio.Group>
                </div>
                <Button onClick={toDetail}>Use this product</Button>
            </div>
        </>
    )
}

export default SearchName;