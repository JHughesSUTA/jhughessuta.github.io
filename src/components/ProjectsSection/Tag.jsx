const Tag = ({ text }) => {
  const getColor = (text) => {
    const colors = {
      typescript: "#3077C6",
      react: "#57c4dc",
      "react router": "#F44250",
      html: "#E54B20",
      css: "#653398",
      sass: "#BF4080",
      javascript: "#FCDC00",
      tailwind: "#36BCFF",
      api: "red",
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
