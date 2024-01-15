import FeaturesTab from "@/components/FeaturesTab/";
import Blog from "@/components/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Feature Page - Solid SaaS Boilerplate",
    description: "This is Login page for Startup Pro",
    // other metadata
};

const FeaturePage = () => {
    return (
        <>
            <Blog />
        </>
    );
};

export default FeaturePage;