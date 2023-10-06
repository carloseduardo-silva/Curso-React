
const CarDetails = ({ brand, km, color, newCar}) => {
  return (
    <div>
        <h2> Cars Details</h2>
        <ul>
            <li>Brand: {brand} </li>
            <li>Kilometers: {km}</li>
            <li>Color: {color}</li>
            {newCar && <h3>This car is new!</h3> }
        </ul>
      
    </div>
  )
}

export default CarDetails
