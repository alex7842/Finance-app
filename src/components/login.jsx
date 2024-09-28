
import { auth,provider } from "../../firebase";
import { Link,useNavigate } from "react-router-dom";
import { collection,getDocs,query} from 'firebase/firestore'
import { db } from "../../firebase";
import { signInWithPopup } from 'firebase/auth'
import { useState } from "react";


function Login(){


  const date = new Date();
const messageref=collection(db,"users")
const navigate = useNavigate();
provider.setCustomParameters({
  prompt: 'select_account'
});
const [user,setuser]=useState([])
const signin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const userData = {
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName.toUpperCase(),
      photoURL: result.user.photoURL,
      date
    };
    setuser(userData);
      
    navigate('/App');
 
    console.log(userData); // Set the correct user object
    
 
    const userQuery = query(messageref, where("uid", "==", result.user.uid));
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.empty) {
      const userDocRef = doc(db, 'users', userData.uid);
      await setDoc(userDocRef, userData);
      console.log("New user document written with UID:", result.user.uid);
    } else {
      console.log("User already exists with UID:", result.user.uid);
    }

  
  } catch (error) {
    console.error("Error during sign-in:", error);
  }
};
const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  margin: 0,
};

const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '40px',
  boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  textAlign: 'center',
};

const logoStyle = {
  width: '150px',
  marginBottom: '30px',
};

const headingStyle = {
  marginBottom: '20px',
  fontSize: '24px',
  color: '#333',
};

const buttonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: '#4285f4',
  color: '#ffffff',
  padding: '12px 25px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  textDecoration: 'none',
  fontFamily: 'Arial, sans-serif',
  transition: 'background-color 0.3s ease',
};

const iconStyle = {
  width: '20px',
  marginRight: '10px',
};

const linkStyle = {
  marginTop: '20px',
  fontSize: '14px',
  color: '#333',
};

const textLinkStyle = {
  color: '#4285f4',
  textDecoration: 'none',
  fontWeight: 'bold',
};
 return(
    <>
    <div onClick={signin} style={containerStyle}>
  <div style={cardStyle}>
    <h3>NEC Finance</h3>
    <h2 style={headingStyle}>Sign In / Sign Up</h2>
    <a href="#" style={buttonStyle}>
      Sign in with Google
    </a>
    
    <p style={linkStyle}>
      Already have an account? <a href="#" style={textLinkStyle}>Sign in</a>
    </p>
  </div>
</div>
    </>
 );
}
export default Login;