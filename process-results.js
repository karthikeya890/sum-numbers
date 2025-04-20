const fs = require('fs');

// Read the Jest results file
try {
  const results = JSON.parse(fs.readFileSync('.results.json', 'utf8'));
  
  // Calculate the score
  const totalTests = results.numTotalTests;
  const passingTests = results.numPassedTests;
  const score = Math.round((passingTests / totalTests) * 100);
  
  // Output in the format expected by the command-grader
  console.log(`\n----- TEST RESULTS -----`);
  console.log(`Passed ${passingTests} out of ${totalTests} tests`);
  console.log(`Score: ${passingTests}/${totalTests}`);
  
  // This specific format is needed for the GitHub Classroom grader
  console.log(`\n::set-output name=points::${passingTests}`);
  
  // Print individual test results for visibility
  console.log(`\n----- INDIVIDUAL TEST RESULTS -----`);
  results.testResults.forEach(testFile => {
    testFile.testResults.forEach(testCase => {
      const status = testCase.status === 'passed' ? '✓' : '✗';
      console.log(`${status} ${testCase.title}`);
    });
  });
  
  // Exit with appropriate code
  process.exit(results.success ? 0 : 1);
} catch (error) {
  console.error('Error processing test results:', error);
  process.exit(1);
}