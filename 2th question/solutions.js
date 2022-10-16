const nums = [1, 2, 3, 49];

const largerstContainer = (bounds) => {
    //* in 2 loops possibly for or one for and one while loops we would loop 
    //* then we should update our results for each result when we get the bigger results
    var i = 0;
    var j = 0;
    var result = 0;
    var tempResult = 0;

    for (i = 0; i < bounds.length; i++) {
        j = i + 1;
        while (j <= bounds.length) {
            if (bounds[i] <= bounds[j]) {
                tempResult = bounds[i] * (j - i);
            } else {
                tempResult = bounds[j] * (j - i);
            }
            if (tempResult > result) {
                result = tempResult;
            }
            j++;
        }
    }

    console.log(result);
}

largerstContainer(nums);

