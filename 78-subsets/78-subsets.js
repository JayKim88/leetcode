/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [[]];

  for (let i = 0; i < nums.length; i++) {
    const last = result.length - 1;
    for (let j = 0; j <= last; j++) {
      result.push([...result[j], nums[i]]);
    }
  }
  return result;
};

/*
  아래와 같은 패턴을 보인다.
  []
  i = 0 [][1]
  i = 1 [][1][2][1,2]
  i = 2 [][1][2][1,2][3][1,3][2,3][1,2,3]
  
   wrong solution 2
  
  var subsets = function(nums) {
    const result = [[]]
  
    for(let i=0; i < nums.length; i++) {
        // 아래의 result.length 는 subsets 의 지역변수인 result 를 참고하므로 
        // for 구문이 돌때마다 초기화되어 무제한으로 loop 를 돌게되는 문제가 발생한다. 
        // 따라서 특정 변수에 할당하여 상위의 for구문의 순서가 바뀔때만 새로운 result 값이 적용되도록 한다.
        for(let j=0; j <= result.length - 1; j++) {
            result.push([...result[j], nums[i]])
        }   
    }
   
    return result
  };
  */
