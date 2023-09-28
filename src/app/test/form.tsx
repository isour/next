'use client';

import { redirect } from "next/navigation";
import React from "react";

const Form = () =>{
    const click1Handle = () => {
        console.log('before redirect');
        redirect('/');
        console.log('after redirect');
    }

    const click2Handle = () => {
        try {
            console.log('before redirect');
            redirect('/');
            console.log('after redirect');

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <button type="button" onClick={click1Handle}>Click 1 (instant redirect)</button>
            <button type="button" onClick={click2Handle}>Click 2 (redirect inside try)</button>
        </>
    )

}

export default Form;