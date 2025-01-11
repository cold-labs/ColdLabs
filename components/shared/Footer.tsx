
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="h-14 border-t">
        <div className="h-full container mx-auto flex justify-center items-center md:justify-start px-4">
                <p className="text-xs">
                    Build by ColdLabs. Visit us on 
                    <Link 
                    href={"https://github.com/cold-labs"}
                    target="_blank"
                    className="mx-1 underline"
                    >
                        Github
                    </Link>
                </p>
        </div>
    </div>
  );
};
