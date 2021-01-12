function triangle(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}

// upside-down triangle
function triangle_2(size) {
  let rows = size;
  let output = '';

  while (rows > 0) {
    for (let columns = 0; columns < rows; columns += 1) {
      output += '*';
    }
    rows -= 1;
    output += '\n';
  }
  console.log(output);
}

triangle(5);