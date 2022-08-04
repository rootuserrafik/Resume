import './App.css';
import Header from './content/Header';
import HomePage from './content/HomePage';
import HomeRoot from './content/HomeRoot';
import { BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <HomeRoot />
        </Switch>
      </Router>
    </div>
  );
}
// https://lmpixels.com/demo/breezycv/light/1/index.html#home
// http://exill.dk/demo/kitzu/template/index.html
// http://theme.srbthemes.com/kerri/light/index_1.html
// http://slimhamdi.net/tunis/dark/index.html
// https://lmpixels.com/demo/leven-html-new/dark/index.html
// https://bslthemes.com/myour/demo/index.html
// https://demo.cocobasic.com/ukko-html/#home
// https://paul-themes.com/html/richard/html/index.html#home

export default App;
