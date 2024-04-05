
function sum(a, b) {
    return a + b
} ;

function subtraction(a, b) {
    return a - b
} ;

function multiplication(a, b) {
    return a * b
} ;

function division(a, b) {
    return a / b
} ;

function percentage(a, b) {
    const c = (b / 100) * a;
    return c
}

function potentiation(a, b) {
    return a ** b
}

function division2(a, b) {
    return a / b
} ;

function percentage2(a, b) {
    const c = (b / 100) * a;
    return c
}

function potentiation2(a, b) {
    return a ** b
}


module.exports = {
    sum: sum,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division,
    percentage: percentage,
    potentiation: potentiation,
    division2:division2,
    percentage2:percentage2,
    potentiation2:potentiation2
} ;
