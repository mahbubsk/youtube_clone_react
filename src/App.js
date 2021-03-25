// import logo from './logo.svg';
import Components from '../src/components/Components'

import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Tags from './components/tag/Tags';

function App () { 
  // let tags = [ 
  //   { id: 1, name: 'all' },
  //   { id: 2, name: 'Live' },
  //   { id: 3, name: 'Motivation' },
  //   { id: 4, name: 'JavaScript' },
  //   { id: 5, name: 'Music' },
  // ] 
  return (
    <div>
      <Components />
      {/* <h1>All Tags</h1>
      {
        tags.map(tag => {
          return (
            <> 
              <Tags tag={tag} /> 
            </> 
          )
        })
      } */}
    </div>
  );
}

export default App;
