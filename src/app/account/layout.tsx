import AccountNav from "./components/AccountNav";

export default function AccountLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    

    return (
        <>
        <header className="p-[20px] flex flex-row justify-between mb-[3.125rem]">
            <h1>Sims 4 Tracker</h1>
            <AccountNav />
        </header>
        <main className="relative">
            {children}
        </main>
        </>
    );
  }
  