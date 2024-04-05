// #include <stdio.h>

// // Function to execute SJF preemptive scheduling algorithm
// void sjf_preemptive(int pid[], int at[], int bt[], int n) {
//     int currentTime = 0; 
//     int remaining_bt[n];
//     int completed = 0; 
//     float totalWT = 0, totalTAT = 0; 
//     for (int i = 0; i < n; i++) {
//         remaining_bt[i] = bt[i];
//     }
//   printf("Process Execution Order:\n");
//   while (completed != n) {
//         int shortest = -1; 
//         int shortest_bt = 9999; 
//         for (int i = 0; i < n; i++) {
            
//             if (at[i] <= currentTime && remaining_bt[i] < shortest_bt && remaining_bt[i] > 0) {
//                 shortest_bt = remaining_bt[i];
//                 shortest = i;
//             }
//         }
//         if (shortest == -1) {
//             currentTime++;
//             continue;
//         }
//         printf("Executing Process %d from time %d to %d\n", pid[shortest], currentTime, currentTime + 1);
//         remaining_bt[shortest]--;
//         if (remaining_bt[shortest] == 0) {
//             completed++;
//             int completionTime = currentTime + 1; 
//             int waitingTime = completionTime - at[shortest] - bt[shortest]; 
//             int turnaroundTime = completionTime - at[shortest]; 
//             totalWT += waitingTime; 
//             totalTAT += turnaroundTime;
//             printf("Process %d completed at time %d.\n", pid[shortest], completionTime);
//             printf("Waiting Time for Process %d: %d\n", pid[shortest], waitingTime);
//             printf("Turnaround Time for Process %d: %d\n", pid[shortest], turnaroundTime);
//         }
//     currentTime++;
//     }
// float avgWT = totalWT / n;
//     float avgTAT = totalTAT / n;
//  printf("\nAverage Waiting Time: %.2f\n", avgWT);
//     printf("Average Turnaround Time: %.2f\n", avgTAT);
// }
// int main() {
// int n;
//     printf("Enter the number of processes: ");
//     scanf("%d", &n);
//  int pid[n], at[n], bt[n];
//  for (int i = 0; i < n; i++) {
//         printf("Enter Arrival Time and Burst Time for Process %d: ", i + 1);
//         scanf("%d %d", &at[i], &bt[i]);
//         pid[i] = i + 1;
//     }
// sjf_preemptive(pid, at, bt, n);
//  return 0;
// }
// Online C++ compiler to run C++ program online
#include <iostream>
#include <queue>
using namespace std;
 void firstNegative(int arr[],int k){
 for(int i=0;i<6;i++){
     int ind=i;
     int a=5;
     while(ind<=i+1){
         if(arr[ind]<0){
             a=arr[ind];
             break;
         }
         ind++;
     }
     if(a<0){
         cout<<a;
     }
     else{
         cout<<"0";
     }
 }   
}

int main() {
   
  
    int arr[7]={2,3,4,-2,2,-1,0};
    firstNegative(arr,2);

    return 0;
}