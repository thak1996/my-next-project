import { useEffect } from "react";
import { useRouter } from "next/router";

const useSplashController = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/login/login.screen");
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return {};
};

export default useSplashController;
