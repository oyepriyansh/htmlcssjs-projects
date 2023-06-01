function changeColor() {
    var colors = [
      "#ff9999",
      "#99ff99",
      "#9999ff",
      "#ffff99",
      "#ffcc99",
      "#ccff99",
      "#99ccff",
      "#ff99cc",
      "#99ffcc",
      "#cc99ff",
      "#ffffcc",
      "#ccffff",
      "#ffcccc",
      "#ccccff",
      "#ccffcc",
      "#ffccff",
      "#cccc99",
      "#cc99cc",
      "#99cccc",
      "#ffcc99",
      "#99ff99",
      "#9999cc",
      "#ffff66",
      "#66ffcc"
    ];
    
    var inputValue = document.querySelector("input[type=text]").value.trim();
    
    if (inputValue === "") {
      document.body.style.backgroundColor = "#fff";
    } else {
      var randomIndex = Math.floor(Math.random() * colors.length);
      document.body.style.backgroundColor = colors[randomIndex];
    }
  }