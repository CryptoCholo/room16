import  { SignUp } from  '@clerk/nextjs'

export default function Signup() {
    return (
        <SignUp path="/signup" routing="path" signInUrl="/login" redirectUrl="/login"/>
    )  
}