function Child(props){

  return(
    <div>
      <h2>{props.name}</h2>
      <button onClick={props.callFunc}>call me</button>
    </div>
  )
}

export default Child;