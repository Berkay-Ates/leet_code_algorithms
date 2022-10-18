//* verilmis bir dizide hangi sayıdan kac tane varsa sayacagız ve sonra saydıklarımızı ekrana bastıracagız 
//*[222333366] -> 324326 

const count = (n) => {
    let num2 = [];
    let j = 0;
    let i = 0;
    let count = 1;

    for (i = 0; i < n.length; i++) {
        if ((i + 1) < n.length && n[i] === n[i + 1]) {
            j = i + 1;

            while (j < n.length && n[j] === n[j + 1]) {
                j++;
                count++;
            }
            num2[n[i]] = count;
        }
        count = 1;
    }
    return num2;
}

const say = (n) => {
    for (let i = 0; i < n.length; i++) {
        if (n[i] !== undefined) {
            console.log(n[i] + ' tane ' + i);
        }

    }
}

say(count([2, 2, 2, 4, 4, 4, 4, 7, 7])); //* 32 54 27



//! Still does not working confused actually 