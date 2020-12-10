import './App.css';
import React from "react";
import MaterialTable from "material-table";

function App() {

    // Initialize states for the json data
    const [data, setData] = React.useState([]);

    // URL to fetch from
    const url = "https://raw.githubusercontent.com/solita/dev-academy-2021/main/names.json"

    // Function
    const getNames = (url) => {
        console.log("getting names");
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json.names))
            .catch(error => console.log(error))
    }

    React.useEffect(() => {
        getNames(url);
    }, []);

    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Amount', field: 'amount' },
    ]

    return (
        <React.Fragment>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <MaterialTable columns={columns}
                           data={data}/>
        </React.Fragment>
    );
}

export default App;
