class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let dict = new Map([
            ["(" , ")"],

            [ "["  ,"]"],

            ["{",   "}"]

        ]);


        let stack = [];
        

        for (let bracket of s) {
  if (dict.has(bracket)) {
    // 1. Opening bracket: push to stack
    stack.push(bracket);
  } else {
    // 2. Closing bracket: pop ONCE and store it
    let top = stack.pop();

    // If popped element doesn't match current closing bracket
    if (bracket !== dict.get(top)) {
      return false;
    }
  }
}
    return stack.length ==0}
}
