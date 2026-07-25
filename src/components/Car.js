function Car(props){

    // const {brand} = props
    const {carinfo} = props
    const {brand,color} = carinfo

    const text = `Hi, i am a ${brand} car` ;
    return(
        <div>
            <p>{text}</p>
        </div>
    )
}

export default Car;