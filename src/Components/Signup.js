import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Signup.css'
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import insta from '../Img/Instagram.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { database, storage } from '../firebase';



export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate ();
    const { signup } = useContext(AuthContext);

    const handleClick = async () => {
        if (file == null) {
            setError("Please upload profile image first");
            setTimeout(() => {
                setError('')
            }, 2000)
            return;
        }
        try {
            setError('')
            setLoading(true)
            let userObj = await signup(email, password)
            let uid = userObj.user.uid
            console.log(uid);
            const uploadTask = storage.ref(`/users/${uid}/ProfileImage`).put(file);  //location file will be stored
            uploadTask.on('state_changed', fn1, fn2, fn3);
            function fn1(snapshot) {
                let prog = (snapshot .bytesTransferred / snapshot.totalBytes) * 100;
                console.log(prog + "done")
            }
            function fn2() {
                setError(error);
                setTimeout(() => {
                    setError('')
                }, 2000);
                setLoading(false)
                return;
                console.log('error', error);
            }
            function fn3() {
                uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                    console.log(url);
                    database.users.doc(uid).set({
                        email: email,
                        userId: uid,
                        fullName: name,
                        profileUrl: url,
                        createAt: database.getTimeStamp()
                    })

                })
                setLoading(false);
               navigate('/');
           

            }

        } catch (err) {
            setError(err);
            setTimeout(() => {
                setError('')
            }, 2000)
        }
    }


    return (
        <div className='signupWrapper'>
            <div className='signupCard'>
                <Card variant="outlined">

                    <div className="insta-logo">
                        <img src={insta} alt="" />
                    </div>
                    <CardContent>
                        <Typography className='text' variant="subtitle1">
                            Sign up to see photos and videos from your friends
                        </Typography>
                        {error != '' && <Alert severity="error">{error}</Alert>}

                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small" value={name} onChange={(e) => setName(e.target.value)} />
                        <Button color="secondary" fullWidth={true} variant="outlined" margin="dense" component="label" >
                            Upload Profile Image
                            <input type="file" accept="image/*" hidden onChange={(e) => setFile(e.target.files[0])} />
                        </Button>

                    </CardContent>

                    <CardActions>
                        <Button color="primary" fullWidth={true} variant="contained" disabled={loading} onClick={handleClick}  >
                            Sign up
                        </Button>
                    </CardActions>
                    
                    <CardContent>
                        <Typography className='text' variant="subtitle1">
                            By signing up, you agree to our Terms, Conditions and Cookies policy.
                        </Typography>
                    </CardContent>
                </Card>
                <Card variant="outlined" className='card2'>
                    <CardContent>

                        <Typography className='text' variant="subtitle1">
                            Having an account ? <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>

    );
}
