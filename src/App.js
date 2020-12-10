import './App.css';
import React from "react";
import { Paper } from "@material-ui/core";
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
                           data={data}
                           title="Solita Dev Academy 2021 exercise"
            />
            <Paper elevation={10}>
                <div class="textcontainer">
                    <p>1. List names and amounts, order by amount, most popular first - click on the column title "amount" on top of the table</p>
                    <p>2. List names in alphabetical order - click on the column title "names" on top of the table</p>
                    <p>3. Return the total amount of all the names - shown in the lower right hand corner of the table</p>
                    <p>4. Return the amount of the name given as a parameter - search field in the upper right hand corner of the table</p>
                </div>
            </Paper>
        </React.Fragment>
    );
}

export default App;
