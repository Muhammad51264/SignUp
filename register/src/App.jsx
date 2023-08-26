import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import './app.css'




const Register_input = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
const [errorMessage,setErrorMessage] = useState("");
  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleRepasswordChange = (e) => {
  //   setRepassword(e.target.value);
  // };

  // // const navigate = useNavigate();
  // var savedData = localStorage.getItem("userData");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!username || !email || !password || !repassword) {
  //     // alert('Please fill in all fields');
  //     setErrorMessage("Please fill in all fields.");
  //   }else{
  //     setErrorMessage("");
  //     if (password !== repassword) {
  //       // alert('Passwords do not match');
  //       setErrorMessage("Passwords do not match.");
  //     }else{
  //       setErrorMessage("");
  //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //       if (!emailRegex.test(email)) {
  //         // alert('Invalid email format');
  //         setErrorMessage("Invalid email format.");
  //       }else{
  //         setErrorMessage("")
  //         let similerEmails=false;
  //         var users;
  //         if (savedData!=null)
  //         {users = JSON.parse(savedData);}
  //         else{
  //           users=[]
  //         }
  //         for (var i = 0; i < users.length; i++) {
  //           if (users[i].email === email) {
  //               similerEmails=true;
  //           }
  //         }
  //         if (similerEmails) {
  //           setErrorMessage("Email already taken.")
  //         }else{
  //           setErrorMessage("")

  //           var parsedData = JSON.parse(savedData);
  
//   let user = [];
//   let userData = {};
//   let lastUserID=0;
//   user.push.apply(user, parsedData);

// if(user.length>0){
//   const lastObject = user[user.length - 1];
//    lastUserID = lastObject.userId;
// }

//   let userId=lastUserID+1;
//   userData.email = email;
//   userData.username = username;
//   userData.password = password;
//   userData.userId = userId;


//   user.push(userData);
//   localStorage.setItem("userData", JSON.stringify(user));


//   setUsername('');
//   setEmail('');
//   setPassword('');
//   setRepassword('');

  // navigate('/');
  // sessionStorage.setItem("username", userData.username);
  // sessionStorage.setItem("login", true);

    //       }
    //     }
    //   }
      
    // }





    

   

    




    // const userData = {
    //   username,
    //   email,
    //   password
    // };
    // localStorage.setItem('userData', JSON.stringify(userData));



  

  // };

  return (
    <div className="login_container">
      <form className="login-form">
        <div className="column">
          <div className="input-groups_title">
            <h1>Sign up</h1>
          </div>
          <div className="d-flex flex-row gap-5 flex-wrap">
          <div className="input-groups">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Username"
              required=""
              value={username}

            />

          </div>

          <div className="input-groups ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required=""
              value={email}
            />
          </div>

          </div>


          <div className="d-flex flex-row gap-5 flex-wrap">
          <div className="input-groups">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Username"
              required=""
              value={username}

            />

          </div>

          <div className="input-groups ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required=""
              value={email}
            />
          </div>

          </div>

          <div className="d-flex flex-row gap-5 flex-wrap">
          <div className="input-groups">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Username"
              required=""
              value={username}

            />

          </div>

          <div className="input-groups ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required=""
              value={email}
            />
          </div>

          </div>

          <div className="d-flex flex-row gap-5 flex-wrap">
          <div className="input-groups">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Username"
              required=""
              value={username}

            />

          </div>

          <div className="input-groups ">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required=""
              value={email}
            />
          </div>

          </div>
          <h6 className='error__message mt-3 text-danger'>{errorMessage}</h6>

          <div className="input-groups">
            <button className="btn-login m-auto" type="submit">
              Sign up
            </button>
          </div>
          <div className="checkbox signup-link">
            <p style={{ fontSize: 18 }}>
              Already have an account? <a to="/login">Sign In</a>
            </p>
          </div>
 

        </div>
        <div className="registration_column_img"></div>
      </form>
    </div>
  );
};

export default Register_input;
