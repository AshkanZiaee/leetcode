var simplifyPath = function (path) {
  path = path.split("/");
  const stack = [];
  for (let i = 0; i <= path.length - 1; i++) {
    let char = path[i];
    if (char === "" || char === ".") continue;
    else if (char === ".." && stack) stack.pop();
    else {
      stack.push(char);
    }
  }
  return "/" + stack.join("/");
};
console.log(simplifyPath("/home/user/Documents/../Pictures"));
