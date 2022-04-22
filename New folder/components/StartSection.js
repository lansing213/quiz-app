



function StartSection(props){


    return(
        <div>
            <div className='startSection'></div><button className='startButton' onClick={() =>{props.handleStart(true);props.handleCountDownDate(new Date().getTime() + (30*1000));}}> Click to begin</button>

        </div>
    );

}

export default StartSection;