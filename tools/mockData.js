const requestLeaves = [
  {
    id: 1,
    slug: "a",
    name: "a",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    id: 2,
    slug: "b",
    name: "b",
    startDate: new Date(),
    endDate: new Date(),
  },
];

const newRequestLeave = {
  id: null,
  slug: "",
  name: "",
  startDate: new Date(),
  endDate: new Date(),
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newRequestLeave,
  requestLeaves,
};
