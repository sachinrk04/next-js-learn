import { useRouter } from 'next/router';

function ClientProjectsPage() {
    const router = useRouter();

    console.log("router-1-->", router.query);

    function loadProjectHandler() {
        // load data...
        // router.push('/clients/sachin/project')
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'sachin', clientprojectid: 'projectA'}
        })
    }

    return (
        <div>
            <h1>The Project of a Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientProjectsPage;