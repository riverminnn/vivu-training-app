import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <section>
            <button type="button" onClick={() => navigate('/about')}>
                Continue to About
            </button>
        </section>
    )
}

export default Home;