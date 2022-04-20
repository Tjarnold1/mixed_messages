/* This mixed message is designed to generate meals with unappetizing adjectives for some of my favorite TV show characters. */

function generateAdjective() {
    let selection = Math.floor(Math.random() * 12);
    switch (selection) {
        case 0:
            return 'wet';
            break;
        case 1:
            return 'sloppy';
            break;
        case 2:
            return 'moist';
            break;
        case 3:
            return 'soggy';
            break;
        case 4:
            return 'dry';
            break;
        case 5:
            return 'old';
            break;
        case 6:
            return 'woody';
            break;
        case 7:
            return 'gristly';
            break;
        case 8:
            return 'bland';
            break;
        case 9:
            return 'gray';
            break;
        case 10:
            return 'slimy';
            break;
        case 11:
            return 'hairy';
            break;
        default:
            return 'mysterious';
            break;
    }
}

function generateMeal() {
    let selection = Math.floor(Math.random() * 6);
    switch (selection) {
        case 0:
            return 'waffles';
            break;
        case 1:
            return 'candy';
            break;
        case 2:
            return 'whiskey';
            break;
        case 3:
            return 'steak';
            break;
        case 4:
            return 'sushi';
            break;
        case 5:
            return 'sloppy joe'
            break;
        default:
            return 'cheeseburger';
            break;
    }
}

function generateCharacter() {
    let selection = Math.floor(Math.random() * 6);
    switch (selection) {
        case 0:
            return 'Leslie Knope';
            break;
        case 1:
            return 'Jeremy Jamm';
            break;
        case 2:
            return 'Detective Peralta';
            break;
        case 3:
            return 'Detective Terry Seattle';
            break;
        case 4:
            return 'Michael Scott';
            break;
        case 5:
            return 'Dwight Schrute';
            break;
    }
}

console.log('One order of extra ' + generateAdjective() + ' ' + generateMeal() + ' for ' + generateCharacter() + ' coming right up!');