import React, { useState} from 'react';
import CKEditor from 'ckeditor4-react';
import '../CSS/adminpage.css';
import FormInput from './forms/FormInput';
import Button from './forms/Button';
import { useSelector, useDispatch } from 'react-redux';
import {signOutUserStart} from '../redux/User/user.actions';
import { useHistory } from 'react-router-dom';

const mapState = (state) => ({
    currentUser: state.user.currentUser,

});


const AdminPage = props => {

    const { currentUser} = useSelector(mapState);
    const dispatch = useDispatch();
    const history = useHistory();

    const [hoursDestination, setHoursDestination] = useState('third-place'); 
    const [monOpen, setMonOpen] = useState('');
    const [monClose, setMonClose] = useState('');
    const [tuesHours, setTuesHours] = useState('');
    const [wedHours, setWedHours] = useState('');
    const [thursHours, setThursHours] = useState('');
    const [friHours, setFriHours] = useState('');
    const [satHours, setSatHours] = useState('');
    const [sunHours, setSunHours] = useState('');

    const signOut = () => {
        goBack();
        dispatch(signOutUserStart());
        
       
    }

    const goBack = () => {
        history.push('./admin')
    }

    return (
        <div className='admin-page'>
            <div className='admin-container'>
                <div className='change-hours'>
                    <h1>Change Hours</h1>
                    <select >
                        <option>
                            Third Place
                        </option>
                        <option>
                            The Lounge
                        </option>
                        <option>
                            Stevie's
                        </option>
                    </select>
                    <div className='hours-input'>
                        <h1>
                            Monday
                        </h1>
                        <FormInput 
                            label='Monday Open'
                            type='text'
                            value={monOpen}
                            handleChange={e => setMonOpen(e.target.value)} />
                        <FormInput 
                            label='Monday Close'
                            type='text'
                            value={monClose}
                            handleChange={e => setMonClose(e.target.value)} />

                    </div>
                    <div className='hours-input'>
                        <h1>
                            Tuesday
                        </h1>
                        <FormInput type='text'></FormInput>
                        <FormInput type='text'></FormInput>

                    </div>
                    <div className='hours-input'>
                        <h1>
                            Wednesday
                        </h1>
                        <FormInput type='text'></FormInput>
                        <FormInput type='text'></FormInput>

                    </div>
                    <div className='hours-input'>
                        <h1>
                            Thursday
                        </h1>
                        <FormInput type='text'></FormInput>
                        <FormInput type='text'></FormInput>

                    </div>
                    <div className='hours-input'>
                        <h1>
                            Friday
                        </h1>
                        <FormInput type='text'></FormInput>
                        <FormInput type='text'></FormInput>

                    </div>
                    <div className='hours-input'>
                        <h1>
                            Saturday
                        </h1>
                        <FormInput type='text'></FormInput>
                        <FormInput type='text'></FormInput>

                    </div>
                    <div className='hours-input'>
                        <h1>
                            Sunday
                        </h1>
                        <FormInput type='text'></FormInput>
                        <FormInput type='text'></FormInput>

                    </div>

                </div>
                
                <div className='add-photos'>
                <h1>Add Photos</h1>
                    <select >
                        <option>
                            Third Place
                        </option>
                        <option>
                            The Lounge
                        </option>
                        <option>
                            Stevie's
                        </option>
                    </select>
                    <div className='photo-input'>
                        <h1>
                            Name
                        </h1>
                        <FormInput type='text' className='photo-input-box'/>
                    </div>
                    <div className='photo-input'>
                        <h1>
                            Url
                        </h1>
                        <FormInput type='text' className='photo-input-box'/>
                    </div>

                </div>

                <div className='add-menus'>
                    <h1>Add Menus</h1>
                    <select >
                        <option>
                            Third Place
                        </option>
                        <option>
                            The Lounge
                        </option>
                        <option>
                            Stevie's
                        </option>
                    </select>
                    <div className='menu-input'>
                        <h1>
                            Name
                        </h1>
                        <FormInput type='text' className='photo-input-box'/>
                    </div>
                    <div className='menu-input'>
                        <h1>
                            Url
                        </h1>
                        <FormInput type='text' className='menu-input-box'/>
                    </div>


                </div>
                <div className='change-description'>
                    <h1>Change Description</h1>
                    <select >
                        <option>
                            Third Place
                        </option>
                        <option>
                            The Lounge
                        </option>
                        <option>
                            Stevie's
                        </option>
                    </select>
                    <CKEditor />

                </div>
                <Button onClick={() => signOut()}>Sign Out</Button>
            </div>

        </div>
    )
};

export default AdminPage;
