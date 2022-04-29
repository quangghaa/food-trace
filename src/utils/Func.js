const formatDate = (date) => {
    let y = date.getFullYear()+''
    let m = date.getMonth()+ 1 + ''
    let d = date.getDate()+''

    if(m.length == 1) m = '0' + m
    if(d.length == 1) d = '0' + d

    return d + '-' + m + '-' + y
}

export {formatDate}