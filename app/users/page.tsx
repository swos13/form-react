"use client"

import Form from "../components/form/Form"
import List from "../components/list/List"
import { User as UserInterface } from "../components/list/User";
import { useState } from "react"; 

const mockUser: UserInterface = {
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@example.com",
    phone: "123456789"
}

export default function Home() {

  const [users, setUsers] = useState<UserInterface[]>([mockUser, mockUser]);

  return (
    <section className="grid grid-cols-2">
      <Form />
      <List users={users} />
    </section>
  );
}
