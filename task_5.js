// Дано 2 массива. Необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
let enAndru = {};
const result = (first, second) => {
    const firstAndSecond = {};
    for (let i = 0; i < first.length; i++) {
        firstAndSecond[first[i]] = second[i];        
    }
    return firstAndSecond;
}

enAndru = result(en, ru);

console.log(enAndru);