function drowPattern(x) {
  var pattern = [];
  var startIndex = Math.floor(x / 2);
  var endIndex = Math.floor(x / 2);
  var isEnlarging = true;
  for (var i = 0; i < x; i++) {
    var row = [];
    for (var j = 0; j < x; j++) {
      if (j >= startIndex && j <= endIndex) row.push("x");
      else row.push("o");
    }
    pattern.push(row);
    if (
      startIndex === endIndex ||
      (startIndex > 0 && endIndex < x - 1 && isEnlarging)
    ) {
      startIndex--;
      endIndex++;
    } else {
      startIndex++;
      endIndex--;
      isEnlarging = false;
    }
  }
  console.log(pattern);
  return pattern;
}

drowPattern(5);
