import React from "react";

export const metadata = {
  title: "Privacy Policy",
  description: "Our privacy policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="mt-16 md:mt-32 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="w-full h-[70vh] md:h-screen">
        <iframe
          src="/privacy-policy.pdf"
          className="w-full h-full"
          title="Privacy Policy PDF"
        />
      </div>
    </div>
  );
}
