"use strict";
console.log("Hello world");

let Grades;

do {
    Grades = prompt("Enter today's grade\n or enter 999 to quit.", 999);
    Grades = parseInt(Grades);

    if (Grades == 999) {
        break;
    }
    else if (Number.isNaN(Grades)) {
        alert("Please enter a real number");
    }
else if (Grades <= 69) {
    document.write(`<br><p>Grade:${Grades} = F </p>`);
}
else if (Grades <= 77) {
    document.write(`<br><p>Grade:${Grades} = D </p>`);
}
else if (Grades <= 84) {
    document.write(`<br><p>Grade:${Grades} = C </p>`);
}
else if (Grades <= 92) {
    document.write(`<br><p>Grade:${Grades} = B </p>`);
}
else if (Grades <= 100) {
    document.write(`<br><p>Grade:${Grades} = A </p>`);
}



} while (Grades !== 999);

document.write(`<br><p style='text-indent:25px;'>Have a nice day!</p>`);