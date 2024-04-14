function Random(){
    let number = Math.ceil(Math.random()*100);

    return <h1 style={{'backgroundColor': 'red'}}>
        Random Number : {number}
    </h1>
}

export default Random;