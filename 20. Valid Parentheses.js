// 20. Valid Parentheses

var isValid = function (paren) {
  let stack = [];

  for (let i = 0; i < paren.length; i++) {
    if (paren[i] === "(" || paren[i] === "{" || paren[i] === "[") {
      stack.push(paren[i]);
    } else {
      let pop = stack.pop();

      if (pop === "(" && paren[i] === ")") {
        continue;
      } else if (pop === "{" && paren[i] === "}") {
        continue;
      } else if (pop === "[" && paren[i] === "]") {
        continue;
      } else return false;
    }
  }

  return stack.length === 0;
};

let s = "()[]{}";

console.log(isValid(s));
