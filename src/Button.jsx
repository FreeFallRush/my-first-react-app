function Button({
  text = "Click Me!",
  color = "blue",
  fontSize,
  handleClick = 12,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default Button;
