function calculateTotalBarLengthReq(
  gateWidth,
  gateHeight,
  rowHeightPercentage,
  barThickness
) {
  const verticalBarCount = 2;
  const horizontalBarCount = 100 / rowHeightPercentage + 1;
  const verticalGap = (gateHeight * rowHeightPercentage) / 100;
  //   console.log("horizontal bar count: " + horizontalBarCount);
  //   console.log("Vertical gap: " + verticalGap);

  if (horizontalBarCount % 2 !== 0) {
    // console.log("Vertical gap is even");
    return false;
  }

  const totalCircleBarsInRaw = gateWidth / verticalGap;
  //   console.log("Total circle bars in raw: " + totalCircleBarsInRaw);

  const totalBarLength = (
    horizontalBarCount * gateWidth +
    verticalBarCount * gateHeight +
    Math.PI *
      verticalGap *
      totalCircleBarsInRaw *
      ((horizontalBarCount - 2) / 2) -
    horizontalBarCount * 2 * barThickness
  ).toFixed(2);

  console.log("Total bar length requirement = " + totalBarLength + "cm.");

  return "Total bar length requirement = " + totalBarLength + "cm.";
}

const ironBarThickness = 10;
calculateTotalBarLengthReq(500, 500, 20, ironBarThickness);
