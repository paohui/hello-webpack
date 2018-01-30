/*global document*/
import axios from 'axios'
import * as React from 'react';
import * as ReactDOM from 'react-dom';

axios.get('http://127.0.0.1:8080/access_management/test/ok.hl')
    .then( response=> console.log(response))
    .catch(error=>console.log(error))


const App = () => {
    return (
        <div>
            <p>Hello world!1112221</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))