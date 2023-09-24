class User{
    constructor(fullName,email,password) {
        this.fullName=fullName;
        this.email=email;
        this.password=password;
    }
}

let userArr=[];
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
const clearAndLoad=(element)=>{

}