class User{
    constructor(fullName,email,password) {
        this.fullName=fullName;
        this.email=email;
        this.password=password;
    }
}
class Customer{
    constructor(name,address,salary,nic) {
        this.name=name;
        this.address=address;
        this.salary=salary;
        this.nic=nic;
    }
}
let userArr=[];
let customerArr=[];
/*=======User Management*/
const createUser=()=>{
    const fullName=$('#fullName').val();
    const email=$('#register-email').val();
    const password=$('#register-password').val();

    // const hash = bcrypt.hashSync(password, bcrypt.getSaltSync(10));
    // console.log(hash);
    let createdUser=new User(fullName,email,password);
    let existsUserData=userArr.find(e=>e.email===email);
    if(existsUserData){
        alert('User email already exists!');
        return;
    }
    userArr.push(createdUser);
    console.log(userArr);
}
const login = ()=>{
    const email=$('#email').val();
    const password=$('#password').val();
    let existsUserData=userArr.find(e=>e.email===email);

    if(existsUserData){
        if(existsUserData.password===password){
            console.log("Welcome "+email);
        }else {
            alert('Password does not match!');
        }
    }else {
        alert('User email does not exists!');
    }
}
//
/*Customer*/
const createCustomer=()=>{
    const customer = new Customer(
        $('#name').val(),
        $('#address').val(),
        parseFloat($('#salary').val()),
        $('#nic').val()
    );

    let existsData = customerArr.find(e=>e.nic===customer.nic);
    if(existsData){
        alert('Customer NIC already exists!');
        return;
    }
    customerArr.push(customer);
}
const findCustomer=(id)=>{
    // promise
    let selectedCustomer = customerArr.find(e=>e.id===id);
    if(selectedCustomer){
        return selectedCustomer;
    }
    return null;
}
const updateCustomer=(id)=>{
    let customer=findCustomer(id);
    if(customer){
        $('#name').val(customer.name);
        $('#address').val(customer.address);
        parseFloat($('#salary').val(customer.salary));
        $('#nic').val(customer.nic);
    }else {
        alert('Customer not found!');
    }
}
const deleteCustomer=(id)=>{}
const getAllCustomers=()=>{}

/*Customer*/
const clearAndLoad=(element)=>{
}