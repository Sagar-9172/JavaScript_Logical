function invertedPyramid(num) {
    for (let i = num; i >= 1; i--) {
      let pyramid = '';
  
      // Add spaces before '*' characters
      for (let j = 1; j <= num - i; j++) {
        pyramid += ' ';
      }
  
      // Add '*' characters
      for (let k = 1; k <= 2 * i - 1; k++) {
        pyramid += '*';
      }
  
      // Print each row of the inverted pyramid
      console.log(pyramid);
    }
  }
  
  // Call the function with num = 5
  invertedPyramid(5);
