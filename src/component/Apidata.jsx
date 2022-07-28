import React,{useEffect, useState} from 'react';
import './style.css';
const Apidata=() =>{
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=> res.json())
        .then((userData)=>{
            console.log(userData);
            setDatas(userData)
        })
        .catch((err)=>console.log(err.message))

    },[])
return (
    <div className='content'>
      
      <main className='main-con'>
          {
              (function(){
                  let dataArr = []
                  datas.forEach((data)=>{
                      dataArr.push(
                          <section className='data' key={data.id}>
                              <div className='ditels'><b>Rating:</b> {data.rating.rate} Average | {data.rating.count} ratings</div><br></br>
                              <img className='img' src={data.image}/>
                              <div className='ditels'><b>Id:</b> {data.id}</div>
                              <div className='ditels'><b>Title:</b> {data.title}</div>
                              <div className='ditels'><b>Price:</b> {data.price}</div>
                              <div className='ditels'><b>Category:</b> {data.category}</div>
                              <br></br>
                              <button className='add_btn'>Add To Cart</button>
                           
                          </section>
                      )
                  })
                  return dataArr
              })()
          }
      </main>
    </div>
  )
}
export default Apidata;