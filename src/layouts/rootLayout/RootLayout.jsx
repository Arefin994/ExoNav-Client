import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import { assets } from "../../assets/assets";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <div className="rootLayout">
          <header className="nav">
            <div className="logo">
              <Link
                className="fullLogo"
                to="/"
                style={{ textDecoration: "none" }}
              >
                <img src={assets.AI_icon} alt="" />
              </Link>
              <p>ExoNav </p>
            </div>
            {/* user */}
            <div className="">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
