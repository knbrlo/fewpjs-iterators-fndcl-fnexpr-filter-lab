function findMatching(arrayDrivers, driverName) {
    let matchedDrivers = [];
      matchedDrivers = arrayDrivers.filter(driver => {
          if (driver.toLowerCase() == driverName.toLowerCase()) {
            return driver;
          }
      })
    return matchedDrivers;
}


function fuzzyMatch(arrayDrivers, providedString) {
    let matched = arrayDrivers.filter(driver => {
        return driver.startsWith(providedString)
    });
    return matched;
}

function matchName(drivers, name) {
    let matched = drivers.filter(driver => {
        return driver.name == name;
    })
    return matched;
}