import React, { useState } from 'react';
import { Breadcrumb, Button, Card, Cascader, DatePicker, Divider, Input, Layout, Table, Tooltip } from 'antd';
import { Row, Col } from 'antd';
import { Line } from '@ant-design/charts';
import { FileTextOutlined, LinkOutlined, PlusOutlined, ProfileOutlined, SearchOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';

const { Header, Footer, Content } = Layout;


function DocumentUpload() {
    return (
        <>
            <div className='container'>
                <div className='nav-header'>
                    <Breadcrumb>
                        <Breadcrumb.Item>Document library</Breadcrumb.Item>
                        <Breadcrumb.Item>SQF</Breadcrumb.Item>
                        <Breadcrumb.Item>Edit document</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className='text-box'>
                        <span>Icon </span>
                        <span>Docs: Manage documents</span>
                    </div>
                </div>
                <div className='upload-header'>
                    <span className='upload-title'>Upload document</span>
                    <div className='flex-row'>
                        <div>
                            <span className='text-box'>Document category</span><br />
                            <b>Certificate</b>
                        </div>
                        <div className='mgl-2'>
                            <span className='text-box'>Document type</span><br />
                            <b>SQF</b>
                        </div>
                    </div>
                </div>
                <div className='upload-section'>
                    <Row gutter={16}>
                        <Col span={8}>
                            <div className='pd-20'>
                                <div className='text-box-head'>
                                    <span><FileTextOutlined />&nbsp;<b>File</b></span>
                                </div>

                                <p>Add the pdf, text, or image (PNG, JPEG, or GIF) file of this document (20MB maximum)</p>

                                <Button>Change file</Button>

                                <div className='img-uploaded'>ashdfkk.png</div>
                            </div>
                        </Col>

                        <Col span={8}>
                            <div className='pd-20'>
                                <div className='text-box-head'>
                                    <span><ProfileOutlined />&nbsp;<b>Propertes</b></span>
                                </div>

                                <div className='mgt-1'>
                                    <span className='text-box'>Title (optional)</span><br />
                                    <Input placeholder="Enter title" />
                                </div>

                                <div className='mgt-1 flex-row'>
                                    <div>
                                        <span className='text-box'>Expiration date</span><br />
                                        <DatePicker />
                                    </div>

                                    <div className='mg-left'>
                                        <span className='text-box'>Issue date (optional)</span><br />
                                        <DatePicker />
                                    </div>
                                </div>

                                <div className='mgt-1'>
                                    <span className='text-box'>Notes (optional)</span><br />
                                    <TextArea showCount maxLength={500} style={{ height: 120 }} />
                                </div>
                            </div>
                        </Col>

                        <Col span={8}>
                            <div className='pd-20'>
                                <div>
                                    <div className='text-box-head'>
                                        <b><LinkOutlined />&nbsp;Focus (Optional)</b>
                                        <span className='text-box'>Edit</span>
                                    </div>

                                    <span className='text-box'>Select a facility as the document focus</span><br />

                                    <b>Facility</b><br />
                                    <span className=''>Migilor Formaggio</span>
                                </div>
                                <Divider />
                                <div>
                                    <div className='text-box-head'>
                                            <b>Sharing (Optional)</b>

                                        <span className='text-box'>Edit</span>
                                    </div>

                                    <span className='text-box mg-top'>Select organization to share the document with.</span><br />

                                    <span className='text-box wrap-text mg-top'>Demo Organization</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className='upload-btns'>
                        <Button className='mg-left'>Cancel</Button>
                        <Button>Save</Button>
                    </div>
                </div>
            </div>

        </>
    );
}


export default DocumentUpload;
