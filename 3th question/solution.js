//* verilmis bir dizide hangi sayıdan kac tane varsa sayacagız ve sonra saydıklarımızı ekrana bastıracagız 
//*[2,2,2,3,3,3,3,6,6] -> 32 43 26 

const count = (num) => {
    var num2 = [];
    var j = 0;
    var i = 0;
    var count = 1;

    for (i = 0; i < num.length; i++) {
        j = i;
        count = 1;
        while ((j + 1) < num.length && num[j] === num[j + 1]) {
            j++;
            count++;
        }
        if (num2[num[i]] === 0) {
            num2[num[i]] = count;
        }
    }
    return num2;
}

const say = (n) => {
    var i = 0;
    console.log('say function');
    for (i = 0; i < n.length; i++) {
        console.log('say function working');
        if (n[i] !== undefined) {
            console.log(n[i] + ' tane ' + i);
        }
    }
}

var res = count([2, 2, 2, 4, 4, 4, 4, 7, 7, 8]);
say(res); //* 32 54 27 18



//! Still does not working confused actually 