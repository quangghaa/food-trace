import React, { useEffect, useState } from "react";
import { Spin, Table } from "antd";
import { useDispatch } from "react-redux";
import { updateLot } from "../redux/slice/traceSlice";

const Lot = (props) => {
    const dispatch = useDispatch()

    const columns = [
        {
            title: 'ID',
            dataIndex: 'key',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Expire date',
            dataIndex: 'expire',
        },
        {
            title: 'Production date',
            dataIndex: 'production',
        },
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          dispatch(updateLot(selectedRowKeys))
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
        }),
      };

    return (
        <>
            <div className="search-wrapper">
                <span className="search-title">{props.data ? props.data.length : 0} Lots</span>
                {props.loading == true ? <><br /><Spin size='large' /></> : <></>}
                {props.data && props.data.length > 0 ?
                    <>
                        <Table
                            rowSelection={{
                                type: 'radio',
                                ...rowSelection,
                            }}
                            columns={columns}
                            dataSource={props.data}
                            pagination={false}
                        />
                    </>
                    :
                    <></>
                }
            </div>
        </>
    )
}

export default Lot;