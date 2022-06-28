import React from 'react';
import Link from 'next/link';

const Navbar = () => {

    return (
        <div className="flex flex-row grow-0.4 justify-between p-5 bg-cyan-600 text-white">
            <div className="text-2xl"> Notes App </div>
            <div className="flex flex-row justify-between">
                <button className="navbar-links mr-10 p-1 ">
                    <Link href="/">
                        Home
                    </Link>
                </button>
                <button className="navbar-links p-1 ">
                    <Link href="/new-note">
                        Add Note
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Navbar;