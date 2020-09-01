import { useState } from 'react';
import { useRouter } from 'next/router'
import NavBar from "../../components/nav";
import axios from 'axios';

const Login = () => {
    const router = useRouter();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    const onSubmitForm = e => {
        e.preventDefault()
        
        axios
            .post(`http://127.0.0.1:4000/users/login`, { email: email, password: password })
            .then((res) => {
                console.log(res);
                if (res.data.message == "Auth successful") {
                    router.push({pathname:'/', query:{token:res.data.token, email:email}});
                }
            }).catch((err) => {
                console.error(err);
                router.push({ pathname: "/login" })
            })
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <form onSubmit={onSubmitForm}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" value={email} onChange={onChangeEmail} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" value={password} onChange={onChangePassword} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Log in</button>
                </form>
            </div>
        </>
    )
}
export default Login;