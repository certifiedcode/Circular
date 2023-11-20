const script = document.createElement("script");
script.src =
  "https://cdn.jsdelivr.net/gh/peterhry/CircleType/dist/circletype.min.js";
document.head.appendChild(script);

window.addEventListener("message", (event) => {
  if (event.data.circularId) {
    // Get the element from the DOM
    const element = document.getElementById(event.data.circularId)
      .children[0];

    // Create a new CircleType instance and set the radius
    const circleType = new CircleType(element);

    // Use the template specified in the object data
    switch (event.data.template) {
      // case "basicArc":
      //   circleType.radius(384);
      //   break;
      case "reversedArc":
        circleType.dir(-1).radius(element.offsetWidth / 2);
        window.addEventListener("resize", () => {
          circleType.radius(element.offsetWidth / 2);
        });
        break;
      case "autoRadius":
        circleType.radius();
        break;
      case "basicArc":
        circleType.radius(element.offsetWidth / 2);
        window.addEventListener("resize", () => {
          circleType.radius(element.offsetWidth / 2);
        });
        break;
      // case "usingFitText":
      //   circleType.radius(180);
      //   $(element).fitText();
      //   break;
      // case "destroy":
      //   circleType.destroy();
      //   break;
      // case "emojis":
      //   // Use a GraphemeSplitter to split emojis correctly
      //   const splitter = new GraphemeSplitter();
      //   circleType = new CircleType(
      //     element,
      //     splitter.splitGraphemes.bind(splitter)
      //   );
      //   break;
    }
  }
});
