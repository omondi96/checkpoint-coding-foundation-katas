function zipStrings(strA, strB) {
  //splitten, if & loop, returnen nicht console log!
  let strAMerge = strA.split("");
  let strBMerge = strB.split("");

  let stringLength = undefined;
  let mergedStringCheck = "";
  if (strAMerge < strBMerge) {
    stringLength = strBMerge.length;
  } else {
    stringLength = strAMerge.length;
  }

  for (let i = 0; i < stringLength; i++) {
    if (strAMerge[i] === "" || strAMerge[i] === undefined) {
      mergedStringCheck += strBMerge[i];
    } else if (strBMerge[i] === "" || strBMerge[i] === undefined) {
      mergedStringCheck += strAMerge[i];
    } else {
      mergedStringCheck += strAMerge[i] + strBMerge[i];
    }
  }

  return mergedStringCheck;
}
