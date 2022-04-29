import React, { useEffect, useRef, useState } from 'react';
import { Input, Radio, Space, Button, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { openNotification } from '../utils/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { updateId, updateName, updateTrace } from '../redux/slice/traceSlice';

const SearchName = () => {
    const { Search } = Input;

    const navigate = useNavigate();

    const trace = useSelector(state => state.trace)

    const dispatch = useDispatch()

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

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(false)

    const [search, setSearch] = useState([])

    useEffect(() => {
        const json = require('../dummy.json')
        setData(json)
    }, [])

    // const [select, setSelect] = useState('');
    const [value, setValue] = React.useState('');

    // const select = useRef('');

    const onSearch = value => {
        if (Object.keys(value.trim()).length == 0) openNotification('Warning', 'Please enter a product name')

        else {
            if (Array.isArray(data)) {
                setLoading(true)

                setTimeout(() => {
                    let res = data.filter((d) => {
                        return d.name.includes(value.trim())
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
    }

    const onChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);

    }

    const toDetail = () => {
        if (Object.keys(value.trim()).length == 0) {
            openNotification('Warning', 'You should select a product first');
        } else {
            const find = search.filter((v) => {
                return v.id == value.trim()
            })

            if(find != null) {
                dispatch(updateId(find[0].id))
                dispatch(updateName(find[0].name))

                navigate(`/product-search/${find[0].id}`)
            } else {
                openNotification('Warning', 'Something went wrong');
            }
        }
    }

    useEffect(() => {
        console.log("check render");
    }, [])

    return (
        <>
            <div className='search-wrapper'>
                <span className='search-type'>Product name</span>
                <Search placeholder="Enter product name" allowClear onSearch={onSearch} />

                {loading ? <Spin size='large' /> : <></>}

                <div className='sm-section'>
                    {search.length > 0 ?
                        <>
                            <div className='total-found'>{search.length} product found with the name above. </div>
                            <hr className='found-hr' />
                            <div className='list-rs'>
                                <Radio.Group onChange={onChange} value={value}>
                                    <Space direction='vertical'>
                                        {search.map((v, i) => {
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
                        </> : <></>}
                </div>

            </div>
        </>
    )
}

export default SearchName;