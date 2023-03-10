import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const nayoks = ['Sahkib Khan', 'Bapparaz', 'SalmanSah', 'Kazi-Suvo', 'Omith Hasan']
  // const products = [
  //   {name:'Photoshop', prise:'$60.98'},
  //   {name:'Illastator', prise:'$35.59'},
  //   {name:'Adobe Reader', prise:'$5.99'},
  //   {name:'Adobe Premier Pro', prise:'$589.99'}
  // ];
  const friends = [
    {name: 'Rahim Badsha', age: 22},
    {name: 'Alomgir Hossain', age: 25},
    {name: 'Alamin Islam', age: 23},
    {name: 'Monzurul Islam', age: 24},
    {name: 'Bokul Mia', age: 27},
    {name: 'Ariful Islam', age: 23}
  ]

  return (
    <div className="App">
      <header className="App-header" >
        <p>toomaro work learn React Event list</p>
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {friends.map(friend => <li>{friend.name}</li>)}
        </ul>
        {friends.map(friend => <Friend friend = {friend}></Friend>)}
        {/* <ul>
          {nayoks.map(nayok => <li>{nayok}</li>)}
          {products.map(product => <li>{product.name}</li>)}
        </ul>
        {products.map(product => <Product product={product}></Product>)}
        <Product product= {products[0]}></Product>
        <Product product= {products[1]}></Product>
        <Product product= {products[2]}></Product>
        <Person name='Arif Mia' job= 'Junior Computer Operator' boss= 'Salim Ahmed'></Person>
        <Person name='Salim Ahmed' job= 'Sinior Incharg' boss= 'Kamal Hossain'></Person>
        <Person name='Kamal Hossain' job= 'Production Manager(P.M)' boss= 'Sayem Sarker'></Person> */}
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h2>Dynamic Users: {users.length} </h2>
      {
        users.map(user => <li>{user.title} {user.id}</li>)
      }
      {console.log(users)}
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10);
  return( 
  <div>
    <h2> Count: {count} </h2>
    <button onMouseMove={()=> setCount(count + 1)}>Increase</button>
    <button onClick={()=> setCount(count - 1)}>Decrease</button>
  </div>
  )
}

function Friend(props){
    const friendStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '300px',
    width: '250px',
    float: 'left',
    color:'#000',
    margin:'15px'
  }
  return(
    <div style={friendStyle}>
      <h2>{props.friend.name} </h2>
      <h3> I'm {props.friend.age} Years Old</h3>
    </div>
  )
}
// function Product(props){
//   const productStyle = {
//     border: '1px solid gray',
//     borderRadius: '5px',
//     backgroundColor: 'lightgray',
//     height: '300px',
//     width: '250px',
//     float: 'left',
//     color:'#000',
//     margin:'15px'
//   }
//   const {name, prise} = props.product;
//   return(
//     <div style={productStyle}>
//       <h3>{name} </h3>
//       <h2>{prise}</h2>
//       <button>Bye now</button>
//     </div>
//   )
// }
// function Person(props){
//   return(
//         <div style={{border: '2px solid purple', margin: '10px', width: '600px' }}>
//           <h3>My Name: {props.name} </h3>
//           <h5>My job: {props.job} </h5>
//           <h5>My Boss: {props.boss} </h5>
//     </div>
//   )
// }
export default App;
