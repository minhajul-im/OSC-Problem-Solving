/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const sorted = [];
  let p1 = 0;
  let p2 = 0;

  while (nums1.length > p1 && nums2.length > p2) {
    if (nums1[p1] <= nums2[p2]) {
      sorted.push(nums1[p1]);
      p1++;
    } else {
      sorted.push(nums2[p2]);
      p2++;
    }
  }

  if (nums1.length === p1) {
    while (nums2.length > p2) {
      sorted.push(nums2[p2]);
      p2++;
    }
  } else if (nums2.length === p2) {
    while (nums1.length > p1) {
      sorted.push(nums1[p1]);
      p1++;
    }
  }

  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  } else {
    return sorted[mid];
  }
};
