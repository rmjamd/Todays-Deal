import logo from './logo.svg';
import './App.css';
import   {useState}  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react-bootstrap';
function MyList(props)
{
  return (
    <>
       <ul className="ml-5 btn-outline-info shadow p-1 my-2 col-sm-9">{props.value}</ul>
        <button className="btn btn-danger my-2 col-sm-2 offset-1" onClick={()=>{props.onItemDelete(props.index)}}> X</button>
    </>
    )
}
function App() {
  var [text,setText]=useState('');
  var [list,setList]=useState([]);
  const onButtonClick = (e) => {
    // const myList=list;
    if(text!=="")
    {
      list.push(text);

      setText('')
    }
     
     
  }
  const onTextChange =(e)=>
    {
   //   settext(e.target.value);
  // 
        setText(e.target.value);
     //   alert(text)
    }
  const onItemDelete=(e)=>
  {
      const oldlist=[...list];
      list=oldlist.filter((element,i)=>{
        return i!=e}
      )
      setList(list)
  }
  return (
    <>
    <React.Row id="headingcontainer">
      <React.Row/>
      <React.Col id="heading">
      <label for="html" id="heading"> Your Deal </label>
      </React.Col> 
      <React.Col>
      <React.Form.Control type="input" value={text} placeholder="Todays Deal" onChange={onTextChange}/>
      </React.Col> 
  
      <React.Col>
      <React.Button variant="primary" id="submit" onClick={onButtonClick}>Add Deal</React.Button> 
      </React.Col> 
     
      {/* <React.Form.Control type="text" placeholder="Todays Deal" id="heading" /> */}
    </React.Row>
    <React.Row id="listitem">
      {
      list.map((value,i)=>
      {
        return <MyList value={value} index={i} onItemDelete={onItemDelete}></MyList>
      })
      
    }
      </React.Row> 
  </>

  );
}

export default App;
