import './App.css';
import Countries from './componetns/Countries/Countries';
import Person from './componetns/Person/Person';
import Header from './componetns/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}

export default App;

































/* function Countries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    setCountries(data)
  }, [])
  return (
    <div>
      <h1>Traveling Around The World</h1>
      <h4>countries available: {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}
function Country(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Capital: {props.capital}</p>
    </div>
  )
} */