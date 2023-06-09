// Smallest Range I

var smallestRangeI = function (nums, k) {
  if (nums.length < 2) return 0;

  let small = Infinity;
  let large = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < small) {
      small = nums[i];
    }

    if (nums[i] > large) {
      large = nums[i];
    }
  }

  small = small + k;

  large = large - k;

  const dis = large - small;

  if (dis > 0) {
    return dis;
  } else {
    return 0;
  }
};

let nums = [0, 10],
  k = 2;

console.log(smallestRangeI(nums, k));
