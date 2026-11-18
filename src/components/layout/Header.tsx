"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/config/navigation";
import { images } from "@/config/images";
export default function Header(){
 const [scrolled,setScrolled]=useState(false),[open,setOpen]=useState(false); const path=usePathname();
 useEffect(()=>{const fn=()=>setScrolled(window.scrollY>24);fn();window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn)},[]);
 return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled||open?"bg-white/95 text-navy shadow-sm backdrop-blur-md":"bg-gradient-to-b from-black/35 to-transparent text-white"}`}><div className="container-wide flex h-[82px] items-center justify-between">
 <Link href="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}><span className="grid size-11 place-items-center border border-gold/50 bg-white p-1"><Image src={images.logo} alt="Siddhivinayak Builders logo mark" width={44} height={44} priority className="size-full object-contain"/></span><span className="leading-tight"><b className="block font-heading text-sm tracking-wide">SIDDHIVINAYAK</b><small className="text-[9px] tracking-[.23em] opacity-70">BUILDERS PVT. LTD.</small></span></Link>
 <nav className="hidden items-center gap-8 lg:flex">{navigation.map(item=><Link key={item.href} href={item.href} className={`text-[12px] font-semibold transition hover:text-gold ${path===item.href?"text-gold":""}`}>{item.label}</Link>)}<Link href="/contact" className="bg-gold px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-navy transition hover:bg-white">Contact Us</Link></nav>
 <button className="grid size-11 place-items-center lg:hidden" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
 {open&&<nav className="border-t border-black/5 bg-paper px-6 py-5 text-navy lg:hidden">{navigation.map((item,i)=><Link key={item.href} href={item.href} onClick={()=>setOpen(false)} className="block border-b border-navy/10 py-4 text-sm font-semibold">0{i+1} <span className="ml-3">{item.label}</span></Link>)}</nav>}</header>
}
