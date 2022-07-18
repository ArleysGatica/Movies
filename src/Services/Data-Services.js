import { useEffect, useState } from 'react';

const API = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json")
            .then(res => {
                return res.json();
            }).then(data => {
                setData(data.entries);
            })
    }, []);
    data.map((item,) => {
        console.log(item.title);
    })
    return data;
}

export default API;