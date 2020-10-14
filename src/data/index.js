const getRandomArray = (numItems) => {
  const names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(0, numItems).split("");
  return names.map((name) => {
    return { label: name, value: Math.round(20 + 80 * Math.random()) };
  });
};

const getRandomDateArray = (numItems) => {
  let baseTime = new Date("2020-08-01T00:00:00").getTime();
  let dayMs = 24 * 60 * 60 * 1000;
  const data = [];
  for (let i = 0; i < numItems; i++) {
    data.push({
      time: new Date(baseTime + i * dayMs),
      value: Math.round(20 + 80 * Math.random()),
    });
  }
  return data;
};

export default () => {
  return [
    {
      title: "Visits",
      data: getRandomDateArray(150),
    },

    {
      title: "Categories",
      data: getRandomArray(20),
    },

    {
      title: "Data 4",
      data: getRandomArray(6),
    },
    {
      title: "Categories",
      data: getRandomArray(8),
    },
  ];
};
