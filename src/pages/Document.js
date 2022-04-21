import React, { useState } from 'react';
// import '../style/doc_library.css';
import { Button, Card, Cascader, DatePicker, Input, Layout, Table, Tooltip } from 'antd';
import { Row, Col } from 'antd';
import { Line } from '@ant-design/charts';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Document = (props) => {
    const navigate = useNavigate();

    const options = [
        {
            value: "Value",
            label: "Any event date",
        },
        {
            value: "Vlue",
            label: "Other event date",
        }
    ];

    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    const columns = [
        {
            title: 'Owning organization',
            dataIndex: 'owningOrganization',
            width: 150,
        },
        {
            title: 'Document type',
            dataIndex: 'documentType',
            width: 150,
        },
        {
            title: 'Document title',
            dataIndex: 'documentTitle',
            //   width: 150,
        },
        {
            title: 'Focus',
            dataIndex: 'focus',
            // width: 150,
        },
        {
            title: 'Last updated',
            dataIndex: 'lastUpdated',
            // width: 150,
        },
        {
            title: 'Expiration date',
            dataIndex: 'expirationDate',
            // width: 150,
        },
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            owningOrganization: `Owning organization ${i}`,
            documentType: "SQF",
            documentTitle: `Document title ${i}`,
            focus: `ID ${i}`,
            lastUpdated: `12/02/2022`,
            expirationDate: "12/02/2023"
        });
    }

    const toUpload = () => {
        navigate('/upload');
    }

    const toDetail = (value) => {
        console.log("????: ", value);
        navigate('/document/' + value.key);
    }

    return (
        <>
            <div className='container'>
                <div className=''>
                    <div className='document-header'>
                        <span className='doc-title'>Document library</span>
                        <span className='doc'>
                            Docs: Manage Documents
                        </span>
                    </div>

                    <div className='header-boxes'>
                        <div className='mg-left'>
                            <span className='text-box'>Document category</span><br />
                            <Cascader
                                options={options}
                                onChange={onChange}
                                placeholder="Please select"
                            />
                        </div>

                        <div className='mg-left'>
                            <span className='text-box'>Document type</span><br />
                            <Cascader
                                options={options}
                                onChange={onChange}
                                placeholder="Please select"
                            />
                        </div>

                        <div className='mg-left'>
                            <span className='text-box'>Owning organization</span><br />
                            <Cascader
                                options={options}
                                onChange={onChange}
                                placeholder="Please select"
                            />
                        </div>

                        <div className='mg-left'>
                            <span className='text-box'>Facility name</span><br />
                            <Input placeholder="Enter facility name" />
                        </div>

                        <div className='mg-left'>
                            <div className='flex-row'>
                                <div>
                                    <span className='text-box'>Expiration from</span><br />
                                    <DatePicker onChange={onChange} />
                                </div>
                                <div>
                                    <span className='text-box'>To</span><br />
                                    <DatePicker onChange={onChange} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='second-row-doc'>
                        <div className='flex-row'>
                            <div className='mg-left'>
                                <span className='text-box'>Product</span><br />
                                <Input placeholder="Enter product name" />
                            </div>

                            <div className='mg-left'>
                                <span className='text-box'>Lot</span><br />
                                <Input placeholder="First select a product" />
                            </div>
                        </div>

                        <div className='flex-row'>
                            <Button className='mg-right'>Clear</Button>
                            <Button type="primary" icon={<SearchOutlined />}>
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='table-section'>
                    <div className='upload'>
                        <Button type="primary" icon={<PlusOutlined />} onClick={toUpload}>
                            Upload a document
                        </Button>
                    </div>

                    <Table columns={columns} dataSource={data} scroll={{ y: 240 }} onRow={(r) => ({
                        onClick: () => toDetail(r),
                    })} />
                </div>
            </div>

        </>
    );
}


export default Document;
