
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="h-14 border-t">
        <div className="h-full container mx-auto flex justify-center items-center md:justify-start">
                <p>
                    Build by CodeLabs. Visit us on 
                    <Link 
                    href={"https://github.com/code-labs"}
                    className="mx-1 underline"
                    >
                        Github
                    </Link>
                </p>
        </div>
    </div>
  );
};
