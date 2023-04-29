import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import "./breadcrumbs.css"
import { capitalize } from '@mui/material';

function handleClick(event) {
  // event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator({Get,name}) {
  if(Get==="Men"){
    const breadcrumbs = [
      <Link  key="1" href="/" onClick={handleClick}> Home </Link>,
      <Link key="2" href="Men" onClick={handleClick}> Men </Link>,
    ];

    return (
      <div className='container-content container-fluid'>
        <div className='container breadcrumbs'>
            <Stack spacing={1}>
            <Breadcrumbs separator="/" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            </Stack>
        </div>
      </div>
    );
  }else if(Get==="Women"){
    const breadcrumbs = [
      <Link  key="1" href="/" onClick={handleClick}> Home </Link>,
      <Link key="2" href="Women" onClick={handleClick}> Women </Link>,
    ];

    return (
      <div className='container-content container-fluid'>
        <div className='container breadcrumbs'>
            <Stack spacing={1}>
            <Breadcrumbs separator="/" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            </Stack>
        </div>
      </div>
    );
  }else if(Get==="Accessories"){
    const breadcrumbs = [
      <Link  key="1" href="/" onClick={handleClick}> Home </Link>,
      <Link key="2" href="Accessories" onClick={handleClick}> Accessories </Link>,
    ];

    return (
      <div className='container-content container-fluid'>
        <div className='container breadcrumbs'>
            <Stack spacing={1}>
            <Breadcrumbs separator="/" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            </Stack>
        </div>
      </div>
    );
  }else if(Get==="signIn"){
    const breadcrumbs = [
      <Link  key="1" href="/" onClick={handleClick}> Home </Link>,
      <Link key="2" href="register" onClick={handleClick}> Account </Link>,
      <Typography key="3" color="inherit" fontSize="7px" fontFamily='Hind'>
        Create Account
      </Typography>,
    ];

    return (
      <div className='container-content container-fluid'>
        <div className='container breadcrumbs'>
            <Stack spacing={1}>
            <Breadcrumbs separator="/" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            </Stack>
        </div>
      </div>
    );
  }else if(Get==="login"){
    const breadcrumbs = [
      <Link  key="1" href="/" onClick={handleClick}> Home </Link>,
      <Link key="2" href="login" onClick={handleClick}> Account </Link>,
      <Typography key="3" color="inherit" fontSize="7px" fontFamily='Hind'>
        Account
      </Typography>,
    ];

    return (
      <div className='container-content container-fluid'>
        <div className='container breadcrumbs'>
            <Stack spacing={1}>
            <Breadcrumbs separator="/" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            </Stack>
        </div>
      </div>
    );
  }else if(Get==="cart"){
    const breadcrumbs = [
      <Link  key="1" href="/" onClick={handleClick}> Home </Link>,
      <Typography key="3" color="inherit" fontSize="7px" fontFamily='Hind'>
        Your Shopping Cart
      </Typography>,
    ];
    return (
      <div className='container-content container-fluid'>
        <div className='container breadcrumbs'>
            <Stack spacing={1}>
            <Breadcrumbs separator="/" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            </Stack>
        </div>
      </div>
    );
  }else if(Get==="wishlist"){
    const breadcrumbs = [
      <Link  key="1" href="/" onClick={handleClick}> Home </Link>,
      <Typography key="3" color="inherit" fontSize="7px" fontFamily='Hind'>
        Wishlist
      </Typography>,
    ];
    return (
      <div className='container-content container-fluid'>
        <div className='container breadcrumbs'>
            <Stack spacing={1}>
            <Breadcrumbs separator="/" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            </Stack>
        </div>
      </div>
    );
  }else if(Get==="account"){
    const breadcrumbs = [
      <Link  key="1" href="/" onClick={handleClick}> Home </Link>,
      <Typography key="3" color="inherit" fontSize="7px" fontFamily='Hind'>
        Your Account
      </Typography>,
    ];
    return (
      <div className='container-content container-fluid'>
        <div className='container breadcrumbs'>
            <Stack spacing={1}>
            <Breadcrumbs separator="/" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            </Stack>
        </div>
      </div>
    );
  }else if(Get==="manageYourProfiel"){
    const breadcrumbs = [
      <Link  key="1" href="/" onClick={handleClick}> Home </Link>,
      <Link  key="1" href="/account" onClick={handleClick}>Your Account </Link>,
      <Typography key="3" color="inherit" fontSize="7px" fontFamily='Hind'>
        Manage your profiel
      </Typography>,
    ];
    return (
      <div className='container-content container-fluid'>
        <div className='container breadcrumbs'>
            <Stack spacing={1}>
            <Breadcrumbs separator="/" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            </Stack>
        </div>
      </div>
    );
  }else if(Get==="product"){
    const breadcrumbs = [
      <Link  key="1" href="/" onClick={handleClick}> Home </Link>,
      <Typography key="3" color="inherit" fontSize="7px" fontFamily='Hind' textTransform="capitalize">
        {name}
      </Typography>,
    ];
    return (
      <div className='container-content container-fluid'>
        <div className='container breadcrumbs'>
            <Stack spacing={1}>
            <Breadcrumbs separator="/" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
            </Stack>
        </div>
      </div>
    );
  }
}
