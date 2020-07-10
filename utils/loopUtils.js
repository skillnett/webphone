export const getNumbersString = array => {
    let numbersString;

    if (!!array.length) {
        for (let i = 0; i < array.length; i++) {
            numbersString = i > 0 ? `${numbersString}, ${array[i].number}` : array[i].number;
        }
    }

    return numbersString;
}