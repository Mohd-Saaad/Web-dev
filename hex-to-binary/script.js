function convert() {
  const hexInput = document.getElementById("hexInput").value.toUpperCase();
  const binaryResult = document.getElementById("binaryResult");
  if (isHexValidInput(hexInput)) {
    const binaryVal = parseInt(hexInput, 16).toString(2).padStart(4, "0");
    binaryResult.textContent = `Binary ${binaryVal}`;
  } else {
    binaryResult.textContent = "Invalid Hexadecimal Number";
  }
}

function isHexValidInput(input) {
  const validHex = "0123456789ABCDEF";
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    if (validHex.indexOf(char) === -1) return false;
  }
  return input.length > 0;
}
