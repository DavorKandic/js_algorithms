// Merge two given sorted arrays into one, also sorted e.g. -> msa([1,3,5], [2,4,6] => [1,2,3,4,5,6])

function msa(arr1, arr2) {
    let i = 0;
    const length = Math.min(arr1.length, arr2.length);
    let mixed = [...arr1, ...arr2];
    return mixed.sort();
}


let first = [1,3,5];
let second = [2,3,3,4,6];

console.log(msa(first, second))