const Events = () => {
  
  const handleClick = ( ) => {
    alert("Hi")
    console.log(e)
  }
  
    return (
    <div>
        <button onClick={handleClick }>Click</button>
        <button onClick={() => alert("Deneme")}>Save</button>
    </div>
  )
}

export default Events