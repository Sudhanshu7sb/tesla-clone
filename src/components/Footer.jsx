import React from "react"

function Footer() {
    return <footer className="my-8">
        <ul className="w-[100%] flex flex-col items-center font-medium text-gray-600 space-y-3 space-x-3 md:flex-row md:justify-center ">
        <li className="md:self-end">Tesla © 2022</li>
        <li>Privacy & Legal</li>
        <li>Vehicle Recalls</li>
        <li className="hidden md:block">Contact</li>
        <li>Careers</li>
        <li> News</li>
        <li className="hidden md:block">Engage</li>
        <li className="hidden md:block">Locations</li>

        </ul >
    </footer >
}

export default Footer;