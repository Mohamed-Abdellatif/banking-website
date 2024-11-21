'use client';
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Sidebar = ({user}:SiderbarProps) => {
    const pathName=usePathname();
  return (
    <section className='sidebar'>
        <nav className="flex flex-col gap-4">
            <Link href="/" className='mb-12 flex cursor-pointer items-center gap-2'>
            <Image alt='wolf bank logo' src="/icons/logo.svg"
            width={34}
            height={34}
            className='size-[24px] max-xl:size-14'/>
            <h1 className='sidebar-logo'>Wolf Bank</h1>
            </Link>
            {sidebarLinks.map((item)=>{
                const isActive = pathName===item.route || pathName.startsWith(`${item.route}/`)
                return (<Link href={item.route} key={item.label} className={cn("sidebar-link",{"bg-bank-gradient":isActive})}>
                    <div className="relative size-6">
                        <Image alt={item.label} src={`${item.imgURL}`} fill className={cn({"brightness-[3] invert-0":isActive})}/>
                        
                    </div>
                    <p className={cn("sidebar-label",{"!text-white":isActive})}>
                        {item.label}
                    </p>
                    
                </Link>)
            })}
            {/* TODO: USER */}
        </nav>
        {/* TODO: footer */}
    </section>
  )
}

export default Sidebar