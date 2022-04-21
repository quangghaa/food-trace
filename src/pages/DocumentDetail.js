import React, { useState } from 'react';
import { Breadcrumb, Button, Card, Cascader, DatePicker, Divider, Image, Input, Layout, Table, Tooltip } from 'antd';
import { Row, Col } from 'antd';
import { Line } from '@ant-design/charts';
import { DownloadOutlined, FileTextOutlined, LinkOutlined, PlusOutlined, ProfileOutlined, SearchOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

import certificate from '../static/imgs/certificate.jpg';

const { Header, Footer, Content } = Layout;


function DocumentDetail() {
    return (
        <>
            <div className='container'>
                <div className=''>
                    <div className='nav-header-detail'>
                        <h3>Migilor Formiggi SQF Level 2</h3>
                        <div className=''>Last updated 12/02/2021, 6:19pm</div>
                    </div>

                    <div className='header-detail'>
                        <div className='flex-row'>
                            <div className='text-box'>
                                <div className='text-box'>Owning Organization</div>
                                <b>Brandega foods</b>
                            </div>
                            <div className='mg-left text-box'>
                                <div className='text-box'>Document category</div>
                                <b>Certificate</b>
                            </div>
                            <div className='mg-left text-box'>
                                <div className='text-box'>Document type</div>
                                <b>SQF</b>
                            </div>
                        </div>
                        <div className='flex-row'>
                            <Button>Delete</Button>
                            <Button className='mg-left'>Edit</Button>
                        </div>
                    </div>
                </div>
                <div className='detail-section'>
                    <Row gutter={16}>
                        <Col span={18}>
                            <div className='pd-10'>
                                <div className='download-bar'>
                                    <span className='text-box'>
                                        <FileTextOutlined />&nbsp;
                                        <b>File</b>
                                    </span>

                                    <span className='text-box'>
                                        <b>Download</b>&nbsp;
                                        <DownloadOutlined />
                                    </span>
                                </div>

                                <div className='bg-white mg-top mg-bot'>asdfasdfsadf78asdf0.jpg</div>

                                <div className='img-section'>
                                    <Image
                                        height={600}
                                        src={certificate}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div>
                                <div className='flex-between'>
                                    <span className='text-box'>
                                        <LinkOutlined />&nbsp;
                                        <b>Focus (Optional)</b>
                                    </span>

                                    <span className='text-box'>Edit</span>
                                </div>

                                <div className='text-box mg-top'>Select a facility as the document focus</div>

                                <b>Facility</b>
                                <div className='text-box radius bg-grey color-grey wrap-text'>Migilor Formaggio</div>
                            </div>
                            <Divider />
                            <div>
                                <div className='flex-between'>
                                    <span className='text-box'>
                                    <UsergroupAddOutlined />&nbsp;
                                        <b>Sharing (Optional)</b>
                                    </span>

                                    <span className='text-box'>Edit</span>
                                </div>

                                <div className='text-box mg-top'>Select organization to share the document with.</div>

                                <div className='text-box wrap-text mg-top'>Demo Organization</div>
                            </div>
                            <Divider />
                            <div>
                                <div className='text-box'>
                                <ProfileOutlined />&nbsp;
                                    <b>Property</b>
                                </div>

                                <div className='text-box mg-top'>
                                    <div>Title</div>
                                    <div>Migigglo SQF Level 2</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    );
}


export default DocumentDetail;
