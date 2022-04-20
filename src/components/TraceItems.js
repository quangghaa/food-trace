import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const TraceItems = (props) => {
    let arr = [];
    for(let i=0; i<props.total; i++) {
        const obj = {
            index: i,
            state: false
        }
        arr.push(obj);
    }

    const [show, setShow] = useState(arr);

    const onShow = (index) => {
        for(let i=0; i<show.length; i++) {
            if(i == index) {
                let temp = [...show];
                temp[i].state = !temp[i].state;
                setShow(temp);
                return;
            }
        }
    }

    console.log("show: ", show);
    console.log("RENDER");

    return (
        <>
            <div className="product-title">
                <span className="bold">{props.title}</span>
                <span>{props.total}</span>
            </div>

            {props.items.map((item, i) => (
                <>
                    <div className="product highlight" onClick={() => onShow(i)}>
                        <span className="drop-icon">
                            {!show[i].state ? <DownOutlined /> : <UpOutlined />}
                        </span>
                        <span className="bold">{item.productName}</span>
                        <span>{item.total} Farm</span>
                    </div>
                    {show[i].state ? item.places.map((place, i) => (
                        <div className="place">
                            <span>{place.id}&nbsp;{place.name}</span>
                        </div>
                    )): <></>}

                </>
            ))}
        </>
    )
}

export default TraceItems;