function Background(props) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-purple-500 ">
      {props.children}
    </div>
  );
}

export default Background;
