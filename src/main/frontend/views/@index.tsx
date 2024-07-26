import "../styles/styles.css"
import "bootstrap/dist/css/bootstrap.min.css"
export default function Index() {
    return (
        <div className="bg-light text-dark" >
            <div className="container mt-5 p-0">
                <header className="jumbotron bg-white">
                    <h1 className="display-4">Welcome to RAG Chatbot</h1>
                    <p className="lead my-4">Utilizing Retrieval-Augmented Generation (RAG), our advanced technology combines generative models with a retrieval component to provide accurate and contextually relevant answers, enhancing chatbot interactions for a superior user experience.</p>
                    <a className="btn btn-secondary btn-lg" href="/chat" role="button">Start Chatting</a>
                </header>
            </div>
        </div>


    );
}