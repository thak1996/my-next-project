import { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace("/splash/splash.screen");
    }, [router]);

    return null;
};

export default Index;
