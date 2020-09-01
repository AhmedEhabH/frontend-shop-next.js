import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import Head from '../../components/head';
import NavBar from "../../components/nav";

const AddPost = () => {
    const router = useRouter()

    const [name, setName] = useState("")
    const [price, setPrice] = useState(0.0)
    const [image, setImage] = useState()
    const [token, setToken] = useState('')

    useEffect(() => {
        if (localStorage) {
            setToken(localStorage.getItem('token'))
        }
    }, [])

    const onChangeName = e => {
        setName(e.target.value)
    }

    const onChangePrice = e => {
        setPrice(e.target.value)
    }

    const onChangeImage = e => {
        setImage(e.target.files);
    }

    const onSubmitForm = e => {
        e.preventDefault();

        console.log(token);

        const data = new FormData();

        data.append('name', name);
        data.append('price', price);
        data.append('productImage', image[0]);


        fetch(`http://127.0.0.1:4000/products`, {
            method: "POST",
            headers: {
                "Authorization": token
            },
            body: data
        })
            .then(res => res.json())
            .then(res => {
                router.push('/products')
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <>
            <Head title="Add post" />
            <NavBar />
            <div className="container">
                <form onSubmit={onSubmitForm}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" value={name} onChange={onChangeName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input type="number" min="0.00" step="0.01" value={price} onChange={onChangePrice} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="file" name="file" placeholder="Upload an image" onChange={onChangeImage} className="form-control-file" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add post
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddPost; 