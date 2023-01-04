console.log('task 1');

let arr = [7, 3, 2, 5, 1, 8];
let n = arr.length;
function CountingEvenOdd(arr, arr_size) {
    let even_count = 0;
    let odd_count = 0;
    for (let i = 0; i < arr_size; i++) {
        if (arr[i] & 1 == 1)
            odd_count++;
        else
            even_count++;
    }
    document.write("Number of even elements = " + even_count
        + "<br>" + "Number of odd elements = " + odd_count);
}

CountingEvenOdd(arr, n);