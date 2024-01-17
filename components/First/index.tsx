"use client";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import { useSession } from "next-auth/react";

export const metadata: Metadata = {
    title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
    description: "This is Home for Solid Pro",
    // other metadata
};

function First() {
    const { data: session } = useSession();
    return (
        <>
            {session ? <CTA /> : <Hero />}
        </>
    );
}

export default First;