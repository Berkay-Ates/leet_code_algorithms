#include <stdio.h>
#include <stdlib.h>
#include "solution.h"

int main()
{

    int i, j, k;
    int control = 0;
    int nums[NUMS_LENGTH] = {-1, 0, 1, 2, -1, -4};

    for (i = 0; i < NUMS_LENGTH; i++){
        for (j = i + 1; j < NUMS_LENGTH; j++){
            for (k = j + 1; k < NUMS_LENGTH; k++){
                if(nums[i]+nums[j]+nums[k] == 0)
                printf(" %d , %d , %d \n", nums[i], nums[j], nums[k]);
            }
        }
    }
}