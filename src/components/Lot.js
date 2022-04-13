import React from "react";
import { Table } from "antd";

const Lot = () => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
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

    const data = [
        {
            key: '324',
            expire: '01/01/2023',
            production: '---',
            totalFound: 2
        },
        {
            key: '325',
            expire: '01/01/2023',
            production: '---',
            totalFound: 2
        }
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
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
                <span className="search-title">{data ? data[0].totalFound : 0} Lots</span>

                {data && data[0].totalFound > 0 ?
                    <>
                        <Table
                            rowSelection={{
                                type: 'radio',
                                ...rowSelection,
                            }}
                            columns={columns}
                            dataSource={data}
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