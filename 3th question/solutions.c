#include<stdio.h>


int main(){

    int numbers[10] = { 4, 4, 4, 4, 7, 7, 8,8,8,8};
    int numbersLength = 10;
    int numbersCheck[10] = {0,0,0,0,0,0,0,0,0,0};
    int i=0,j = 0;
    int count = 1;

    for(i = 0;i<numbersLength;i++){
        j = i;
        count = 1;
        while(j < numbersLength && numbers[j] == numbers[j+1]){
            j++;
            count++;
        }
        if(numbersCheck[numbers[i]] == 0){
            numbersCheck[numbers[i]] = count;
        }
    }

    for(j=0;j<numbersLength;j++){
            if(numbersCheck[j] != 0){
                printf("%d sayisindan %d tane var \n",j,numbersCheck[j]);
            }
    }
}