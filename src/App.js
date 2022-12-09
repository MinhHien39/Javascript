
import './App.css';
import {useState} from 'react'

const orders = [100, 200 , 300]



function App() {

  // const [info , setInfo] =useState({
  //   name : 'Trần Minh Hiển',
  //   age : 21,
  //   address :'Đà Nẵng , Việt Nam'
  // })

  // const handleUpdate = () => {
  //   setInfo({
  //     ...info,
  //     bio :'Màu đỏ'
  //   })
  // }

  // const total = orders.reduce((total , cur)=> total + cur);

  // const [counter , setCouter] = useState(()=>{
  //   const total = orders.reduce((total , cur)=> total + cur)
  //   console.log(total);
  //   return total;
  // })

  // const handleIncrease = () =>  {
  //   setCouter(prevState => prevState +1 )
  //   setCouter(prevState => prevState +1 )
  //   setCouter(prevState => prevState +1 )

  // }
  const giftList =['CPU i9 ' ,'Ram 32 GB RGB' ,'RGB KeyBoard']

  const [gift , setGift]= useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * giftList.length)
    console.log(index);

    setGift(giftList[index])
    }
  return (
    <div className="App" style={{padding :20}}>
      <h1>{gift || 'Chưa có phần thưởng'}</h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  )
}
export default App;
