

const Dates = ()=>{

    const todayDate = new Date().toDateString()
    return(
        <div class="form">
            <h1 >{todayDate}</h1>
            <input type="date"></input>
        </div>
    )
}
export default Dates