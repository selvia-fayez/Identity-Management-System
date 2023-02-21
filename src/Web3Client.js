import Web3 from "web3";
import IdentityContract from './Identityyyyyyyyy.json';

let selectedAccount;
let smartcontract;
let is_initialized = false;

export const init = async ()=>{
    let provider = window.ethereum;
    if(typeof provider !== 'undefined')
    {
        provider.request({method:'eth_requestAccounts'}).then((accounts)=>{
                  selectedAccount = accounts[0];
                  console.log(selectedAccount);}).catch((err)=>{
                  console.log(err);
                });
    window.ethereum.on('accountsChanged',function(accounts){
        selectedAccount = accounts[0];
        console.log(selectedAccount);
    });
    }
   
    const web3 = new Web3(provider);

    const networkId = await web3.eth.net.getId();
    smartcontract = new web3.eth.Contract(
        IdentityContract.abi,
        IdentityContract.networks[networkId].address
    );
    is_initialized = true;
};


export async function register(name,phone,password,is_admin,email)
{
    if(!is_initialized)
    {
        await init();
    }
    smartcontract.methods.register_user(selectedAccount,name,phone,password,is_admin,email).send({from:selectedAccount});
}

export async function login(username,password){
    if(!is_initialized)
    {
        await init();
    }
  return  smartcontract.methods.login_user(selectedAccount,username,password).call();
}

export async function user_is_admin(){
    if(!is_initialized)
    {
        await init();
    }
    return smartcontract.methods.user_is_Admin(selectedAccount).call();
}

export async function upload_documents(doc_name,doc_ipfshash,doc_index){
    if(!is_initialized)
    {
        await init();
    }
    smartcontract.methods.upload_documents(selectedAccount,doc_name,doc_ipfshash,doc_index).send({from:selectedAccount});
}

export async function register_comp(comp_name,password,email,comm_reg){
    if(!is_initialized)
    {
        await init();
    }
    smartcontract.methods.register_comp(comp_name,password,email,comm_reg).send({from : selectedAccount});
}

export async function login_comp(comp_name,password){
    if(!is_initialized)
    {
        await init();
    }
    return smartcontract.methods.login_comp(comp_name,password).call();
}

export async function get_companies(){
    if(!is_initialized)
    {
        await init();
    }
    return smartcontract.methods.get_companies().call();
}

export async function respond_comp_register(comp_name,status){
    if(!is_initialized)
    {
        await init();
    }
     smartcontract.methods.respond_comp_register(comp_name,status).send({from:selectedAccount})
}

export async function add_request(account,comp_name,requested_docs){
    if(!is_initialized)
    {
        await init();
    }
     smartcontract.methods.add_request(account,comp_name,requested_docs).send({from:selectedAccount})
}

export async function get_user_docs(account){
    if(!is_initialized)
    {
        await init();
    }
    return smartcontract.methods.show_userdocs(account).call();
}

export async function get_user_docs_without_account(){
    if(!is_initialized)
    {
        await init();
    }
    return smartcontract.methods.show_userdocs(selectedAccount).call();
}

export async function get_user_requests(){
    if(!is_initialized)
    {
        await init();
    }
    return smartcontract.methods.show_user_requests(selectedAccount).call();
}

export async function get_comp_requests(comp_name){
    if(!is_initialized)
    {
        await init();
    }
    return smartcontract.methods.show_company_requests(comp_name).call();
}

export async function view_req_docs_user(req_id){
    if(!is_initialized)
    {
        await init();
    }
    return smartcontract.methods.view_requested_docs_user(selectedAccount,req_id).call();
}

export async function view_req_docs_comp(comp_name,req_id){
    if(!is_initialized)
    {
        await init();
    }
    return smartcontract.methods.view_requested_docs_comp(comp_name,req_id).call();

}
export async function respond_comp_request(comp_name,req_id,req_id_comp,respond_arr,expiring_date){
    if(!is_initialized)
    {
        await init();
    }
    smartcontract.methods.respondto_comp_request(selectedAccount,comp_name,req_id,req_id_comp,respond_arr,expiring_date).send({from:selectedAccount});
}

export async function get_username(account){
    if(!is_initialized)
    {
        await init();
    }
    return smartcontract.methods.get_username(account).call();
}