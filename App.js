import Navbar from './components/Navbar'
import MemoTitles from './components/MemoTitles'
import MemoContent from './components/MemoContent'
import NewMemo from './components/NewMemo'
import UpdateMemo from './components/UpdateMemo'
import { useSelector } from 'react-redux'
// import {View, } from 'react-native'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue, query, orderByChild, } from "firebase/database";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnP7biB01sUuxP2gJIXtmb8UA4fP7Addc",
  authDomain: "rsjp-9c64e.firebaseapp.com",
  databaseURL: "https://rsjp-9c64e-default-rtdb.firebaseio.com",
  projectId: "rsjp-9c64e",
  storageBucket: "rsjp-9c64e.appspot.com",
  messagingSenderId: "957566549480",
  appId: "1:957566549480:web:022e801d5aaeba2bd3785d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app)


function saveMemo() {

  let key = Math.random().toString().replace(".", "")
  let memo = "react테스트안녕하세요"

  const db = getDatabase();
  set(ref(db, 'memo/' + key), {
    memo: memo,
    regdate: new Date().toString(),
  });
  
  
}

saveMemo()

function App() {
  const newState = useSelector(state => state)




  let article;
  if (newState.type === 'memo/home' || newState.type === 'memo/read') {
    article = <MemoContent></MemoContent>
  } else if (newState.type === 'memo/newMemo') {
    article = <NewMemo></NewMemo>
  } else if (newState.type === 'memo/updateMemo') {
    article = <UpdateMemo></UpdateMemo>
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      <MemoTitles></MemoTitles>
      {article}
    </div>


  );
}

export default App;
