import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="transition-colors duration-200 text-gray-600 hover:text-purple-500"
    >
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <nav className="container flex items-center justify-between px-8 py-4 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/">
          <span className="flex items-center gap-2 shrink-0">
            <Image
              src="/favicon.ico"
              alt="Text.ai"
              width={32}
              height={32}
              className="hover:rotate-12 transform transition duration-200 ease-in-out"
            />
            Text.ai
          </span>
        </NavLink>
      </div>

      <div className="flex lg:justify-center gap-2 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignedIn>
          <NavLink href="/#posts">Your Posts</NavLink>
        </SignedIn>
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        <SignedIn>
          <NavLink href="/dashboard">Upload a Video</NavLink>
        </SignedIn>

        <div className="px-4">
          {" "}
          <SignedOut>
            <SignInButton>
              <NavLink href="/sign-in">SignIn</NavLink>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
