var minCostClimbingStairs = function (cost) {
  let prev2 = cost[0];
  let prev1 = cost[1];

  for (let i = 2; i < cost.length; i++) {
    let curr = cost[i] + Math.min(prev1, prev2);

    prev2 = prev1;
    prev1 = curr;
  }

  return Math.min(prev1, prev2);
};
