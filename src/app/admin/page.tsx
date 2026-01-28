import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { ShieldAlert, UserPlus } from "lucide-react";
import CreateUserForm from "@/components/CreateUserForm";
import DeleteUserButton from "@/components/DeleteUserButton";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.isAdmin) {
    redirect("/");
  }

  const users = await prisma.user.findMany({
    orderBy: { username: 'asc' }
  });

  return (
    <div className="space-y-8 pb-24">
      <header className="flex items-center gap-4 border-b-4 border-aura-white pb-4">
        <ShieldAlert size={48} className="text-aura-loss" />
        <div>
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">Admin Panel</h1>
          <p className="text-xs font-bold uppercase text-aura-loss">Restricted Access</p>
        </div>
      </header>

      {/* Create User Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-black uppercase flex items-center gap-2">
          <UserPlus size={24} /> Add Recruit
        </h2>
        <CreateUserForm />
      </section>

      {/* User List */}
      <section className="space-y-4">
        <h2 className="text-xl font-black uppercase">Roster ({users.length})</h2>
        <div className="space-y-2">
          {users.map(user => (
            <div key={user.id} className="brutal-card p-3 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-aura-white rounded-full"></div>
                <div>
                  <p className="font-bold">{user.username}</p>
                  <p className="text-[10px] opacity-60 uppercase">Score: {user.auraScore}</p>
                </div>
              </div>
              {user.isAdmin ? (
                <span className="text-xs font-black bg-aura-gain text-aura-black px-2 py-1 uppercase">Admin</span>
              ) : (
                <DeleteUserButton userId={user.id} />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

