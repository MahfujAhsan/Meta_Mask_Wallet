import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/oneobit.png';
import './Navbar.css';
import { ethers } from 'ethers';

const Navbar = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const requestAccount = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
            } catch (error) {
                console.log('Error connecting...');
            }
        } else {
            alert('Meta Mask not detected');
        }
    }
    
    async function disconnectWallet() {
        setWalletAddress()
    }
    return (
        <nav className='lg:flex justify-between items-center px-3 lg:px-32'>
            <div className='w-6/12 mx-auto lg:mx-0 lg:w-2/12'>
                <img src={logo} alt="site-logo" />
            </div>
            <div className='nav-items-container lg:w-6/12 border my-6 lg:my-0'>
                <ul className='lg:flex justify-between text-white font-semibold nav-items text-center'>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Feature</Link></li>
                    <li><Link to="#">Team</Link></li>
                </ul>
            </div>
            <div className='sign-btn-container w-4/12 mx-auto lg:mx-0 lg:w-auto'>
                {!walletAddress ? <button onClick={requestAccount} className='sign-btn font-semibold text-white'>
                    {!walletAddress ? <>Sign In</> : ""}
                </button> : <button onClick={disconnectWallet} className='sign-btn font-semibold text-white'>
                        <p>{walletAddress ? <>{walletAddress}</> : ""}</p>
                    </button>}
            </div>
        </nav>
    );
};

export default Navbar;