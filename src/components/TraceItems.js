import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import colors from "../utils/Color";

const TraceItems = (props) => {
    const [show, setShow] = useState([]);
    let arr = [];

    useEffect(() => {
        console.log("PROPS: ", props);
        for(let i=0; i<props.data.length; i++) {
            const obj = {
                index: i,
                state: false
            }
            arr.push(obj);
        }
        setShow(arr);

        // Set color

    }, [props.data])

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

    return (
        <>
            <div className="product-title">
                <span className="bold">{props.title}</span>
                <span>{props.data.length}</span>
            </div>

            {props.data.map((item, i) => (
                <>
                    <div id="item" className="product highlight" onClick={() => onShow(i)} style={{borderLeft: `3px solid ${colors[item.Color]}`}}>
                        <span className="drop-icon">
                            {show.length > 0 && !show[i].state ? <DownOutlined /> : <UpOutlined />}
                        </span>
                        <span className="bold">{item.Product}</span>
                        <span>{item.Unit.length} {item.Unit.length > 1 ? props.title + 's' : props.title}</span>
                    </div>
                    {show.length > 0 && show[i].state ? item.Unit.map((place, i) => (
                        <div className="place">
                            <span>{place}</span>
                        </div>
                    )): <></>}

                </>
            ))}
        </>
    )
}

export default TraceItems;