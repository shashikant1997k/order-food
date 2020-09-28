import React from 'react'
import '../css/Offers.css';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { IconButton } from '@material-ui/core';

function Offers() {
    return (
        <div className="offers">
            <div className="offers_head">
                <h4>Karan</h4>
                <h6>Let's explore this evening</h6>
            </div>

            <div className="offers__icons">
                <div className="percentage">
                    <IconButton className="percentage__icons">
                        <LocalOfferIcon />
                    </IconButton>
                    <p>Offer</p>
                </div>

                <div className="wallet">
                    <IconButton className="wallet__icons">
                        <AccountBalanceWalletIcon />
                    </IconButton>
                    <p>Wallet</p>
                </div>
                
            </div>
        </div>
    )
}

export default Offers
