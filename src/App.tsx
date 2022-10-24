import React, {useState, useEffect} from 'react'

import { API, graphqlOperation } from 'aws-amplify'

// import query definition
import { listUsers as ListUsers } from './graphql/queries'

import { withAuthenticator } from 'aws-amplify-react'

const App = () => {

  const [list, setList] = useState<any[]>([])

  async function getList() {
    try {
      const userData : any = await API.graphql(graphqlOperation(ListUsers)) 
      console.log('userData:', userData.data.listUsers.items)
      setList(userData.data.listUsers.items)
    } catch (err) {
      console.log('error fetching users...', err)
    }
  }

  useEffect(() => {
    getList()
  
   
  }, [])
  

  return (<>
    {
      list.map((user, index) => (
        <div key={index}>
          <h3>{user.id}</h3>
          <h3>{user.name}</h3>
          <h3>{user.address}</h3>
          <h3>{user.phone}</h3>
          <h3>{user.speakerName}</h3>
          
        </div>
      ))
    }
    </>
  )
}

// export default App
export default withAuthenticator(App)








// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
