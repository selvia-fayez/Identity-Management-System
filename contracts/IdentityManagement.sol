// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Identityyyyyyyyy{
    
       struct User{
       string username;
       string phone;
       string password;
       bool is_admin;
       string email;
   }

      struct User_document
      {
       string name;
       string ipfs_hash;
      }

      struct Request{
          uint req_id;
          string requested_by;
          string requested_to;
          /* status
           0 ----- null
           1 ----- requested
           2 ----- approved
           3 ----- rejected
          */
          string expiring_date;
          uint[10] requested_docs; // index => requested docs , value => status of doc
          uint overall_status;  // 1 --> pending   // 2 --> responded
      }

     struct Company{
       string comp_name;         //unique name
       string password;
       string email;
       uint comm_registeration_no; 
       uint comp_status;   //1 pending //2 accepted // 3 rejected
     }
    
    mapping(address => User) user_map;
    mapping(address => User_document[10]) user_docs_map;
    mapping(address => Request[]) user_requests_map;
    mapping(string => Request[]) comp_requests_map;
    Company[] companies;
    uint count_req_id = 0; // ++ to generate req_id

    //user register , address = current log in address in meta mask


   function register_user (address current_add , string memory name , string memory phone , string memory password  , bool is_Admin, string memory email) public
   {    
        user_map[current_add] = User(name,phone,password,is_Admin,email);
   }


   function login_user (address current_add , string memory username , string memory password) public view returns(bool found)
   {
        User memory find_user = user_map[current_add];
        
        // str compare keccak256(bytes(a)) == keccak256(bytes(b));
        if(keccak256(bytes(find_user.username)) == keccak256(bytes(username)) && keccak256(bytes(find_user.password)) == keccak256(bytes(password)))
         return true;
        else
         return false;
   }

   function user_is_Admin(address current_add) public view returns(bool)
   {
       return user_map[current_add].is_admin;
   }

   function upload_documents(address current_add , string memory doc_name , string memory doc_ipfsHash , uint doc_index)public
   {
      // user_docs_map[current_add].push(User_document(doc_name , doc_ipfsHash ));
        user_docs_map[current_add][doc_index] = User_document(doc_name,doc_ipfsHash);
   }
   
   function show_userdocs(address current_add)public view returns(User_document[10] memory docs)
   {   
       for(uint i=0; i<10; i++)
       {
           docs[i] = user_docs_map[current_add][i];
       }
       return docs;
   }

   function add_request(address current_add , string memory comp_name , uint[10] memory requested_docs) public{

       string memory requested_to = user_map[current_add].username;
       user_requests_map[current_add].push(Request(user_requests_map[current_add].length+1,comp_name,requested_to,"",requested_docs,1));
       comp_requests_map[comp_name].push(Request(comp_requests_map[comp_name].length+1,comp_name,requested_to,"",requested_docs,1));
   }

    function show_user_requests(address current_add)public view returns(Request[] memory){
        return user_requests_map[current_add];
   }
   
   function show_company_requests(string memory comp_name)public view returns(Request[] memory){
        return comp_requests_map[comp_name];
   }

   function register_comp(string memory comp_name , string memory password , string memory email , uint  comm_reg )public 
    {
        companies.push(Company(comp_name,password,email,comm_reg,1));
    }
    
    function get_companies() public view returns(Company[] memory)
    {
      return companies;
    }
  

   // admin function

   function respond_comp_register(string memory comp_name , uint status) public{

       for(uint i=0;i<companies.length;i++)
       {
           if(keccak256(bytes(companies[i].comp_name)) == keccak256(bytes(comp_name))){
               companies[i].comp_status = status;
           }
       }
   }

   function login_comp(string memory comp_name , string memory password)public view returns(bool){
     for(uint i=0;i<companies.length;i++)
       {   
           if(keccak256(bytes(companies[i].comp_name)) == keccak256(bytes(comp_name))&&companies[i].comp_status==2){
               if(keccak256(bytes(companies[i].password)) == keccak256(bytes(password)))
               return true;
           }
       }
       return false;
   }

   function view_requested_docs_user(address current_add, uint req_id) public view returns(uint[10] memory){
            return  user_requests_map[current_add][req_id-1].requested_docs;
   }

   function respondto_comp_request(address current_add,string memory comp_name,uint req_id,uint req_id_comp,uint[10] memory respond,string memory expiring_datee)public{
             
            comp_requests_map[comp_name][req_id_comp].requested_docs = respond;
            comp_requests_map[comp_name][req_id_comp].expiring_date = expiring_datee;
             comp_requests_map[comp_name][req_id_comp].overall_status = 2;
             user_requests_map[current_add][req_id-1].requested_docs = respond;           
             user_requests_map[current_add][req_id-1].overall_status = 2;
             user_requests_map[current_add][req_id-1].expiring_date = expiring_datee;
   }

   function view_requested_docs_comp(string memory comp_name, uint req_id) public view returns(uint[10] memory){
            return  comp_requests_map[comp_name][req_id-1].requested_docs;
   }

   function get_ipfs_hash(address current_add , uint index)public view returns(string memory)
   {
       return user_docs_map[current_add][index].ipfs_hash;
   }

   function get_username(address current_add) public view returns(string memory)
   {
       return user_map[current_add].username;
   }
   
}