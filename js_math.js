function zero_negativity(arr){
    for (i in arr){
        if (arr[i] < 0){
            return false;
        }
    }
    return true;
}

let test1 = zero_negativity([0, 3]);
console.log(test1);

function is_even(num){
    if (num % 2 === 0){
        return true;
    }
    return false; 
}

let test2 = is_even(3);
console.log(test2);

function how_many_even(arr){
    let count = 0;
    for (i in arr){
        if (is_even(arr[i])){
            count += 1;
        }
    }
    return count;
}

let test3 = how_many_even([1, 2, 3, 4, 5, 6])
console.log(test3);

function create_dummy_array(num){
    let arr = [];
    for (var i = 0; i < num; i++){
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}

let test4 = create_dummy_array(7);
console.log(test4);

function random_choice(arr){
    let len = arr.length;
    let i = Math.floor(Math.random() * len);
    return arr[i];
}

let test5 = random_choice([0, 1, 2, 3, 4]);
console.log(test5);