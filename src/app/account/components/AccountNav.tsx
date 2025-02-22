'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function AccountNav () {
    const pathname = usePathname()

    return (
        <nav>
            <ul>
                <li>
                    <Link 
                        href='/settings'
                        className={`hover:underline ${pathname === '/settings' ? 'font-bold' : ''}`}
                    >
                    Settings
                    </Link>
                </li>
            </ul>
        </nav>
    )
}