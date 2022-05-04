import React, { useEffect, useRef, useState } from 'react';
import { Input, Radio, Space, Button, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { openNotification } from '../utils/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { updateId, updateName, updateTrace } from '../redux/slice/traceSlice';
import { getOne } from '../services/api';

const SearchName = () => {
    const { Search } = Input;

    const navigate = useNavigate();

    const trace = useSelector(state => state.trace)

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    const [search, setSearch] = useState([])

    const [value, setValue] = React.useState('');

    const onSearch = value => {
        let temp = value.trim()
        let inp = temp.toLowerCase()

        if (Object.keys(inp).length == 0) openNotification('Warning', 'Please enter a product name')

        else {
            setLoading(true)
            try {
                const getByName = async () => {
                    const res = await getOne("trace/productName", inp)

                    if(res) setSearch(res.data)

                    if(res && res.data.length == 0) openNotification('Warning', 'No product found with the name above')
                }

                getByName()

            } catch (err) {
                console.log("Some thing wrong: ", err)
            } finally {
                setLoading(false)
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
                return v.Id == value.trim()
            })

            if(find != null) {
                dispatch(updateId(find[0].Id))
                dispatch(updateName(find[0].Product))

                navigate(`/product-search/${find[0].Id}`)
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
                                                    <Radio key={i} value={v.Id}>
                                                        <span className='id'>{v.Id}</span>
                                                        <br />
                                                        <br />
                                                        <span className='name'>{v.Product}</span>
                                                        <br />
                                                        <span className='owner'>{v.Owner}</span>

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