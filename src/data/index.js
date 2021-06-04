const getRandomArray = (numItems) => {
  const names = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".substr(0, numItems).split("");
  return names.map((name) => {
    return { label: name, value: Math.round(20 + 80 * Math.random()) };
  });
};

const getRandomDateArray = (numItems, day, max) => {
  // Get time.
  let baseTime = new Date("2021-05-15T00:00:00").getTime();
  let t_1s = 1000;
  let t_15m = 15 * 60 * t_1s;
  let t_1d = 86400 * t_1s;
  baseTime += day * t_1d;

  let unshaved = 0;
  let shaved = 0;
  let target = 0;
  let capacity = 40;
  let charge = 40;
  const data = [];
  for (let i = 0; i < numItems; i++) {
    // Calculate demand.
    let demand = Math.round(20 * Math.random() + max * Math.random()**10);
    if (demand > unshaved) {
      unshaved = demand;
    }
    
    // Charge the battery. 
    if (demand <= target) {
      charge += Math.max(target - demand, 20);
      shaved = target;
    }
    if (demand > target) {
      let deficit = demand - target;
      if (deficit > charge) {
        charge = 0;
        target = demand;
        shaved = demand - charge;
      }
      else {
        shaved = demand - target;
      }
    }
    data.push({
      time: new Date(baseTime + i * t_15m),
      demand: demand,
      unshaved: unshaved,
      target: target 
    });
  }

  return data;
};

const getMonthlyPerformance = (dataIn) => {
  let data = [];
  let unshaved = 0;
  let target = 0;
  for (let i = 0; i < dataIn.length; i++) {
    let pt = dataIn[i];
    let last = pt[pt.length - 1];
    unshaved = Math.max(unshaved, last.unshaved);
    target = Math.max(target, last.target);
    data.push({
      time: last.time,
      unshaved: unshaved,
      target: target 
    });
  }
  
  return data;
};

export default () => {
  let demand = []
  for (let i = 0; i < 30; i++) {
    demand.push(getRandomDateArray(60 * 24 / 15, i, 150 * Math.random()));
  }

  return [
    {
      title1: "Demand (kW)",
      title2: "Unshaved Peak (kW)",
      title3: "Shaved Peak (kw)",
      data: demand[29]
    },
    {
      title1: "Unshaved Peak (kW)",
      title2: "Unshaved Peak (kW)",
      title3: "Shaved Peak (kw)",
      data: getMonthlyPerformance(demand)
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
