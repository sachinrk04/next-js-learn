import Link from "next/link";

function ClientsPage() {
    const clients = [
        { id: "sachin", name: "Sachin" },
        { id: "rishabh", name: "Rishabh" }
    ];

    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        {/* <Link href={`/clients/${client.id}`} >{client.name}</Link> */}
                        <Link 
                            href={{
                                pathname: "clients/[id]",
                                query: { id: client.id }
                            }} 
                        >
                            {client.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClientsPage;