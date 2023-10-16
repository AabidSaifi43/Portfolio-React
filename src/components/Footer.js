import React, { Component } from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export default class Footer extends Component {
    render() {
        return (
            <section className='h-[80px] w-full' id='footer'>
                <h1 className='text-sm uppercase text-gradient font-medium mb-2 tracking-wide text-center'>Copyright © 2023 by Aabid Saifi<span className='text-gradien text-lg'> || All Rights Reserved.</span></h1>
            </section>
        )
    }
}
