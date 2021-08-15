// Code your solution here
function findMatching(driver, string) {
    return driver.filter( maybe =>
      maybe.toLowerCase() === string.toLowerCase()
    )
  }
  
  function fuzzyMatch(driver, arg) {
    return driver.filter(maybe=>
      maybe.toLowerCase().indexOf(arg.toLowerCase()) === 0
    )
  }
  
  function matchName(driver, wanted) {
    return driver.filter( result => result.name === wanted)
  }