var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""
  let prefix = ""
  for (let i = 0; i < strs[0].length; i++) {
    let character = strs[0][i]
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) return prefix
    }
    prefix += character
  }
  return prefix
}
longestCommonPrefix(["flower", "flow", "flight"])
