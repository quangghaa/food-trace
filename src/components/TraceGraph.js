import React, { useEffect, useState } from "react";
import { FlowAnalysisGraph } from "@ant-design/charts";

const TraceGraph = (props) => {
    const [data, setData] = useState({});

    const [config, setConfig] = useState({})

    const convertData = (data) => {
        let nodes = []
        let edges = []

        if (data.Ingredient.length > 0) {
            data.Ingredient.map((d, i) => {
                const obj = {
                    id: d.Name,
                    value: {
                        title: d.Name
                    }
                }
                nodes.push(obj)
            })
        }

        if (data.Edges.length > 0) {
            data.Edges.map((e, i) => {
                const obj = {
                    source: e.Source,
                    target: e.Target
                }

                edges.push(obj)
            })
        }

        return { nodes: nodes, edges: edges }
    }

    useEffect(() => {
        if(props.data.Edges && props.data.Ingredient) {
            setData(convertData(props.data))
        }
        
    }, [props.data])

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            setConfig({
                data,
                nodeCfg: {
                    size: [140, 25],
                    autoWidth: true,
                    badge: {
                        style: (cfg) => {
                            const ids = ['-3', '-2', '-1'];
                            const fill = ids.includes(cfg.id) ? '#c86bdd' : '#5ae859';
                            return {
                                fill,
                                radius: [2, 0, 0, 2],
                            };
                        },
                    },
                    items: {
                        padding: 6,
                        containerStyle: {
                            fill: '#fff',
                        },
                        style: (cfg, group, type) => {
                            const styles = {
                                icon: {
                                    width: 12,
                                    height: 12,
                                },
                                value: {
                                    fill: '#f00',
                                },
                                text: {
                                    fill: '#aaa',
                                },
                            };
                            return styles[type];
                        },
                    },
                    nodeStateStyles: {
                        hover: {
                            stroke: '#1890ff',
                            lineWidth: 2,
                        },
                    },
                    title: {
                        containerStyle: {
                            fill: 'transparent',
                        },
                        style: {
                            fill: '#000',
                            fontSize: 12,
                        },
                    },
                    style: {
                        fill: '#E6EAF1',
                        stroke: '#B2BED5',
                        radius: [2, 2, 2, 2],
                    },
                },
                edgeCfg: {
                    label: {
                        style: {
                            fill: '#aaa',
                            fontSize: 12,
                            fillOpacity: 1,
                        },
                    },
                    style: (edge) => {
                        const stroke = edge.target === '0' ? '#c86bdd' : '#5ae859';
                        return {
                            stroke,
                            lineWidth: 1,
                            strokeOpacity: 0.5,
                        };
                    },
                    edgeStateStyles: {
                        hover: {
                            lineWidth: 2,
                            strokeOpacity: 1,
                        },
                    },
                },
                markerCfg: (cfg) => {
                    const { edges } = data;
                    return {
                        position: 'right',
                        show: edges.find((item) => item.source === cfg.id),
                        collapsed: !edges.find((item) => item.source === cfg.id),
                    };
                },
                behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
            })
        }
    }, [data])

    return (
        <>
            {config && Object.keys(config).length > 0 ? (
                <FlowAnalysisGraph {...config} style={{ height: 600 }} />
            ) : <>Loading...</>}
        </>
    )
}

export default TraceGraph;