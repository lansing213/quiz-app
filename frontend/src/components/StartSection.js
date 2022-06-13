function StartSection(props) {
  return (
    <div>
      <div className="startSection"></div>
      <button
        className="startButton"
        onClick={() => {
          props.handleStart(true);
          props.handleCountDownDate(new Date().getTime() + props.passedTime);
        }}
      >
        {" "}
        Click to start
      </button>
    </div>
  );
}

export default StartSection;
