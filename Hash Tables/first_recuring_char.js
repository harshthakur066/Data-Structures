//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// O(n)

const arr = [2, 5, 5, 2, 3, 5, 1, 2, 4];

function firstRecurringCharacter(input) {
  let map = {};
  for (i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log("map", map);
  }
  return undefined;
}

res = firstRecurringCharacter(arr);

console.log(res);
