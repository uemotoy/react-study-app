import Child from "./Child";

function Parent(){
  const childrenNames = ["Taro","Hanako","Jiro"]
  
  function callChild(name){
    alert(`Hey ${name}`);
  }

  return(
  <div>
    <h1>Parent</h1>
      {childrenNames.map(childName => 
        <Child name={childName} callFunc={()=>callChild(childName)}/>
      )}
  </div>)
}

export default Parent;