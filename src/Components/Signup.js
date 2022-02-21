import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Signup.css';
import insta from '../Img/Instagram.jpg'
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { Link } from 'react-router-dom'

export default function Signupd() {
    return (
        <div className='signupWrapper' >
            <div className='signupCard'  >
                <Card variant='outlined' >
                    <div className='insta-logo' >
                        <img src={insta} alt="" />
                    </div>
                    <CardActionArea>

                        <CardContent>
                            <Typography className='text' variant="subtitle1">
                                Sign up to see photos and videos from your friends
                            </Typography>
                            {true && <Alert severity="error">error</Alert>}
                            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" />
                            <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" />
                            <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small" />
                            <Button color="secondary" fullWidth={true} variant="outlined" margin="dense" component="label" startIcon={<CloudUploadIcon />} >
                                Upload Profile Image
                                <input type="file" accept="image/*" hidden />
                            </Button>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button color="primary" fullWidth={true} variant="contained" >
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
