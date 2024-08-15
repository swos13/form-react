"use client"

import Form from "../components/form/Form"
import List from "../components/list/List"
import { User as UserInterface } from "../components/list/User";
import { useState } from "react"; 


interface UsersList {
    users: UserInterface[],
    id: number
}

const mockUser: UserInterface = {
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@example.com",
    phone: "123456789",
    id: 0
}

export default function Users() {

  const [usersList, setUsers] = useState<UsersList>({users: [mockUser], id: 1});

  const handleAdd = (newUser: UserInterface) => {
    newUser.id = usersList.id;
    setUsers((prev) => {
      return { users: [...prev.users, newUser], id: prev.id+1 } 
    });
  }

  return (
    <section className="grid grid-cols-2">
      <Form addUser={handleAdd} />
      <List users={usersList.users} />
    </section>
  );
}
