import './App.css';
import React from "react";
import MaterialTable from "material-table";

function App() {

    // Initialize states for the json data
    const [data, setData] = React.useState([]);

    // URL to fetch from
    const url = "https://raw.githubusercontent.com/solita/dev-academy-2021/main/names.json"

    // Fetch names on first render
    React.useEffect(() => {
        console.log("getting names");
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json.names))
            .catch(error => console.log(error))
    }, []);

    // Columns for the table
    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Amount', field: 'amount' },
    ]

    return (
        <React.Fragment>
            <MaterialTable columns={columns}
                           data={data}/>
        </React.Fragment>
    );
}

export default App;
