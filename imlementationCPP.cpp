#include<bits/stdc++.h>
using namespace std;

class node{
        public:
        int val;
        node* next;
        node(int val){
            this->val = val;
            this->next = NULL;
        }
    };
    class linkedlist{
        public:
        node* head;
        linkedlist(){
            head=NULL;
        }
        void addattail(int val){
            node* temp= new node(val);
            if(head==NULL){
                head= temp;
                return;
            }
            node* temp1=head;
            while(temp1->next){
                temp1= temp1->next;
            }
            temp1->next=temp;
        }
    };
    // 
    int main(){
        // vector<int> nums{1,3,4,2,2};
        // cout<<findDuplicate(nums);
        return 0;
    }