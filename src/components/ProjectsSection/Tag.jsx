const Tag = ({ text }) => {
  const getColor = (text) => {
    const colors = {
      typescript: "#3077C6",
      react: "#57c4dc",
      html: "#E54B20",
      css: "#653398",
      scss: "#BF4080",
      javascript: "#FCDC00",
    };
    return colors[text.toLowerCase()] || "black";
  };

  return (
    <span className="tag" style={{ backgroundColor: getColor(text) }}>
      {text}
    </span>
  );
};

export default Tag;
