
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PasswordProtectedProps {
  password: string;
  message: string;
  children: React.ReactNode;
}

const PasswordProtected: React.FC<PasswordProtectedProps> = ({
  password,
  message,
  children,
}) => {
  const [inputPassword, setInputPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsAuthorized(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Restricted Access</h2>
        <p className="text-center text-gray-700 mb-6">{message}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              placeholder="Enter password"
              className={error ? "border-red-500" : ""}
            />
            {error && (
              <p className="mt-2 text-sm text-red-500">
                Incorrect password. Please try again.
              </p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Access
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtected;
