// 27. Remove Element

var removeElement = function (nums, val) {
  let start = 0;

  let end = nums.length - 1;

  while (start <= end) {
    if (nums[start] === val) {
      nums[start] = nums[end];

      end--;
    } else start++;
  }
  return start;
};
