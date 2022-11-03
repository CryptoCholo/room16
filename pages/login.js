
import { SignIn } from  '@clerk/nextjs'

export default function Login() {
    return (
    <SignIn path="/login" routing="path" signUpUrl="/signup" redirectUrl="" />
    )
}