import { Link } from 'react-router-dom';
import { asset } from '../data';

export function Logo() {
  return (
    <Link to="/" className="brand" aria-label="Smart Start Play School home">
      <img src={asset('images/smartstartLogo.png')} alt="Smart Start Play School" className="brand-logo" />
    </Link>
  );
}
