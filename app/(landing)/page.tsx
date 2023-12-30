import {Button} from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return (
        <div>
            <h1>Landing Page</h1>
            <div>
                <Link href={"/sign-in"}>
                    <Button variant="default" size="lg">Sign In</Button>
                </Link>
            </div>
            <div>
                <Link href={"/sign-up"}>
                    <Button variant="default" size="lg">Register</Button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;