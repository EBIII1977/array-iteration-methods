
// Append the katas to this element:
const main = document.querySelector('main')

// main.append(JSON.stringify(usersWithGreenEyes))

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// Kata 1 - filter() method

    const activeUsers = users
        .filter(users => users.isActive)  
        printKata(1, activeUsers)

// Kata 2 - map() method

    const emails = users
        .map(users => users.email)
        printKata(2, emails)

// Kata 3 - some() method

    const company = users
        .some(users => users.company === 'OVATION')
        printKata(3, company)

// Kata 4 - find() method

    const plus38 = users
        .find(users => users.age > 38)
        printKata(4, plus38.name + " is age " + plus38.age)

// Kata 5 - filter() & find() methods

    const active38PlusActive = users
        .filter(users => users.isActive)
        .find(users => users.age > 38)
        printKata(5, active38PlusActive)

// Kata 6 - filter() & map() methods

    const companyBal = users
        .filter(users => users.company === 'ZENCO')
        .map(users => users.balance)
        printKata(6, companyBal)

// Kata 7 - filter(), includes() and map() methods

    const ageOfTag = users
        .filter(users => users.tags.includes('fugiat'))
        .map(users => users.age)
        printKata(7, ageOfTag)
