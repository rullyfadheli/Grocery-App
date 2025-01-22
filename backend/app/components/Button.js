function Button({ text, onClick, type, style }) {
  return (
    <button type={type} onClick={onClick} className={style}>
      {text}
    </button>
  );
}

export default Button;
