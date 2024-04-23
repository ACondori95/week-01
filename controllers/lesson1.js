const helloRoute = (req, res) => {
  res.send("Hello");
};

const hiThereRoute = (req, res) => {
  res.send("Hi there!");
};

const alvaroRoute = (req, res) => {
  res.send("I am Alvaro!");
};

module.exports = {helloRoute, hiThereRoute, alvaroRoute};
