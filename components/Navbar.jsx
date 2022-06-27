import React from 'react';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div class="flex flex-row grow-0.4 justify-between p-5 ">
            <div> Notes App </div>
            <div class="flex flex-row justify-between">
                <button class="navbar-links mr-10 p-2 hover:border-b-2 hover:border-solid hover:border-black ">
                    <Link href="/">
                        Home
                    </Link>
                </button>
                <button class="navbar-links p-2 hover:border-b-2 hover:border-solid hover:border-black ">
                    <Link href="/new-note">
                        Add Note
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Navbar;