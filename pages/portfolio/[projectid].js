import { useRouter } from 'next/router';

function ProtfolioProjectPage() {
    const router = useRouter();

    console.log("router--->", router);

    // send a request to some backend server
    // to fetch the piece of data with an id of router.query.projectid

    return (
        <div>
            <h1>The Protfolio Project Page</h1>
        </div>
    );
}

export default ProtfolioProjectPage;
