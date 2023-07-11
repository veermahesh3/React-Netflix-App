
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Card from './Cards';
import sdata from './sdata';
console.log(sdata);


ReactDOM.render(
<>
<h1>List Of Top 5 Netflix Series in 2023
</h1>
{sdata.map((value)=>{
  return(
  <Card img={value.img}
  title={value.title}
  sname={value.sname}
  link={value.link}
/>)
})}



</> , document.getElementById('root'));