/*
Understand the problem
  - Input:
    - three numbers representing length of sides
  - Output:
    - string classifying triangle
  Rules:
   - Valid triangle:
    - sum of the length of the two shortest sides must be > length of longest side
      and every side must have a length > 0.

    1. Equilateral if all inputs are same
    2. Isosceles if two sides are of equal length, while third is different
    3. all three sides are of different lengths

Test case 

triangle(1, 2, 3)
a = 1
b = 2
c = 3

a < b < c => c
b < a < c => c

a < c < b => b
c < a < b => b

b < c < a => a
c < b < a => a
----

(a > b) && (a > c) => is largest
b > c 

(b > a) && (b > c) ==> b  is largest
a > c 


  Algorithm:
  1. first validate the triangle
  2.  if not invalid then classify it  

  # validate triangle
  1. all arguments must be > 0
  2. if (a <= b < c)
    let c = a + b;
    if (c > a + b)
    
*/

function triangle(side1, side2, side3) {
  let perimeter = side1 + side2 + side3;
  let longest = Math.max(side1, side2, side3);
  let shortest = Math.min(side1, side2, side3);
  let middle = perimeter - longest - shortest;

  if (isValid(shortest, middle, longest)) {
    return getTriangleType(side1, side2, side3);
  } else {
    return "invalid";
  }
}

function isValid(shortest, middle, longest) {
  return shortest > 0 && shortest + middle > longest;
}

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return "equilateral";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "isosceles";
  } else {
    return "scalene";
  }
}
console.log(
  triangle(3, 3, 3),
  triangle(3, 3, 1.5),
  triangle(3, 4, 5),
  triangle(0, 3, 3),
  triangle(0, 3, 3)
);