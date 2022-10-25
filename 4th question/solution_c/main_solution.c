#include<stdio.h>
#include<stdlib.h>
#include "solution.h"
 
int main(){
//int nums[NUMS_LENGTH] = {-1,0,1,5,2,-1,-4,10,6,-16};
int nums[NUMS_LENGTH] = {-16,6,10,-4,-1,2,5,1,0,-1};

int i,j,k;

//? her eleman tek seferlik kullanılabilir 
//? toplamı sıfır olan ucluler icerisinde tekrar eden eleman olmamalı
//? 3 <= nums.length <= 3000
//? -10^5 <= nums[i] <= 10^5 100000

for(i=0;i<NUMS_LENGTH;i++){
    j=0;
    while(j<NUMS_LENGTH && nums[i] != nums[j]){
        k=0;
        while(k<NUMS_LENGTH && nums[i] != nums[k] && nums[j] != nums[k]){
            if(nums[i] + nums[j] + nums[k] == 0){
                printf("the triple detected which has zero sum, 1st:%d ,2nd:%d ,3th:%d \n",nums[i],nums[j],nums[k]);
                nums[i] =100001;
                nums[j] = 100001;
                nums[k] = 100001;
            }
            k++;
        }
        j++;
    }
}

}