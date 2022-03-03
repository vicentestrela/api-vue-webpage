export function getAge(date) {
    var diff = Date.now() - new Date(date).getTime(); // cálculo da diferença entre as duas datas (a atual x data de nascimento do pet)
    var age = new Date(diff); // criar nova data a partir da diferença
    return Math.abs(age.getUTCFullYear() - 1970);
}