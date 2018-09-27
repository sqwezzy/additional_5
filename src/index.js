module.exports = function check (str, bracketsConfig) {
  var arr = []
  var open = []
  var close = []
  bracketsConfig.forEach(x => {
    open.push(x[0])
    close.push(x[1])
  })
  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i])) {
      if (close.includes(str[i]) && arr.includes(str[i]))
        arr.pop()
      else
        arr.push(str[i])
    }
    else if (close.includes(str[i]) && arr[arr.length - 1] == open[close.indexOf(str[i])])
      arr.pop()
  }
  return arr.length == 0
}
