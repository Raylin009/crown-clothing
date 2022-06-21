import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async() => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  return (
    <div>
      <h1>This is Sign In</h1>
      <butoon onClick={logGoogleUser}>
        Sign in with Google Popup
      </butoon>
    </div>
  )
}

export default SignIn;
