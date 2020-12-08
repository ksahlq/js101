function oddNumbers() {
  for (let i = 1; i < 100; i += 2){    
    console.log(i);    
  }
}

oddNumbers();

function oddNumbers_2(startFrom) {
  while (startFrom < 100) {
    console.log(startFrom);
    startFrom += 2;
  }
}

oddNumbers_2(1)