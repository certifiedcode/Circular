const _circularScript = document.createElement("script");
_circularScript.src =
  "https://cdn.jsdelivr.net/gh/peterhry/CircleType/dist/circletype.min.js";
document.head.appendChild(_circularScript);

window.addEventListener("message", (event) => {
  if (event.data.circularId) {
    // Store the event data to be executed after the script is loaded
    const eventData = event.data;

    // Check if CircleType is already loaded
    if (typeof CircleType !== "undefined") {
      executeCircleType(eventData);
    } else {
      // Wait for the script to load
      _circularScript.addEventListener("load", () => {
        executeCircleType(eventData);
      });
    }
  }
});

function executeCircleType(eventData) {
  // Get the element from the DOM
  const element = document.getElementById(eventData.circularId).children[0];

  // Create a new CircleType instance and set the radius
  const circleType = new CircleType(element);

  // Use the template specified in the object data
  switch (eventData.template) {
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
  }
}
