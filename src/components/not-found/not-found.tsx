import { Link } from 'react-router-dom';
import './not-found.css';
export function NotFoundPage(): JSX.Element {
    return (
        <section>
            <div className="not-found">
                <h1>404. Page not found</h1>
                <Link to="/">Вернуться на главную</Link>
            </div>
        </section>
    );
}
export default NotFoundPage;