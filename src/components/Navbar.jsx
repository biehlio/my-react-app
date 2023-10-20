'use client';

import React, { useState } from 'react';
import { Flex, IconButton, Heading, Avatar, Link } from '@radix-ui/themes';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <Flex position='fixed' width='100%' justify='between' align='center' style={
            {
                background: 'var(--gray-1)'
            }
        } >
            <Flex align='center' gap='4' m='4'>
                <Avatar fallback="A" />
                <Heading size=''>Your Brand</Heading>
            </Flex>

            <div className="md:hidden m-8">
                <IconButton variant='ghost' onClick={() => setMenuOpen(true)}>
                    <HamburgerMenuIcon />
                </IconButton>
            </div>


            {/* Mobile Menu Overlay */}
            {isMenuOpen ? (
                <div className="fixed inset-0 z-40 bg-black md:hidden">
                    <div className="container mx-auto ">
                        <div className="rounded-lg p-4 space-y-4">
                            <Flex justify='end'>
                                <IconButton variant='ghost' onClick={() => setMenuOpen(false)} className="m-4">
                                    <Cross1Icon />
                                </IconButton>
                            </Flex>
                            <Link underline='hover'>Home</Link>
                            <Link href="#">About</Link>
                            <Link href="#">Services</Link>
                            <Link href="#">Contact</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} m-4`}>
                    <Link underline='hover'>Home</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">Contact</Link>
                </div>
            )}
        </Flex>
    );
}