import Car from './Car';
import Apple from './Apple';

function Garage() {
    // const brand = "BMW"
    const carinfo = {
        brand: "BMW",
        model: "X5",
        year: 2018,
        color: "Black"
    }
    const appleinfo = {
        type: "fuji",
        color: "red",
        size: "small"
    }
    const carlist = [
        {brand: "BMW",color: "Black"},
        {brand: "Audi",color: "White"},
        {brand: "Ford",color: "Red"}
    ]

    return (
        <div>
            <h1>Who lives insides my Garage ?</h1>
            {/* <Car brand={brand}/> */}
            <Car carinfo={carinfo} />
            <Apple appleinfo={appleinfo} />
            <ul>
                {carlist.map((carinfo, index) => <li key={index}><Car carinfo={carinfo}/></li>)}
            </ul>
        </div>
    )
}

export default Garage;