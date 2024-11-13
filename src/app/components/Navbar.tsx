"use client";
import React from "react";
import Link from "next/link";

export default function Navbar(){
    return(
        <div className="bg-black text-white min-h-12 w-auto pl-5 pr-5 pt-3">
            <nav className="flex justify-between">
                <Link className="hover:underline" href="/">Home</Link>
                <Link className="hover:underline" href="/about">About</Link>
                <Link className="hover:underline" href="/services">Services</Link>
                <Link className="hover:underline" href="/jobs">Jobs</Link>
                <Link className="hover:underline" href="/jobs/part-time-job">Part Time Jobs</Link>
                <Link className="hover:underline" href="/contact">Contact</Link>

            </nav>
        </div>
    );
};