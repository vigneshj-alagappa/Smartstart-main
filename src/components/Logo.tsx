import { asset } from '../data';

export function Logo() {
  return (
    <a href="#top" className="brand" aria-label="Smart Start Play School home">
      <img src={asset('images/smartstartLogo.png')} alt="Smart Start Play School" className="brand-logo" />
    </a>
  );
}
