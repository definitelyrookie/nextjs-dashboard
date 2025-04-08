import AcmeLogo from "../ui/acme-logo";
import LoginForm from "../ui/login-form";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};
export default function LoginPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-50 p-4 md:p-0">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex max-h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36 lg:h-20">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
