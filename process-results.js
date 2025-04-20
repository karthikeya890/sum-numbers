const fs = require('fs');

try {
  const results = JSON.parse(fs.readFileSync('.results.json', 'utf8'));
  
  const totalTests = results.numTotalTests;
  const passingTests = results.numPassedTests;
  
  console.log(`\n----- TEST RESULTS -----`);
  console.log(`Passed ${passingTests} out of ${totalTests} tests`);
  
  // This format is important for GitHub Classroom
  console.log(`\nPoints: ${passingTests}`);
  
  // Print individual test results
  console.log(`\n----- INDIVIDUAL TEST RESULTS -----`);
  results.testResults.forEach(testFile => {
    testFile.testResults.forEach(testCase => {
      const status = testCase.status === 'passed' ? '✓' : '✗';
      console.log(`${status} ${testCase.title}`);
    });
  });
  
  process.exit(0);
} catch (error) {
  console.error('Error processing test results:', error);
  process.exit(1);
}