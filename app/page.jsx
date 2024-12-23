import React from "react";
import LoginForm from "./components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function app() {
  const session = await getServerSession(authOptions);

  if(session) redirect("/Home");

  return (
    <div>
      <LoginForm />
    </div>
  );
}
