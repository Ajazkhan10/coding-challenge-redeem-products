import Link from "next/link";
import Icon from "../Icon/Icon";

const Footer = () => {
  return (
    <footer className="w-full py-20">
      <Link
        href="https://github.com/Ajazkhan10/coding-challenge-redeem-products"
        target="_blank"
        className="w-full max-w-sm mx-auto text-center  flex items-center justify-center px-4 gap-2"
      >
        <Icon icon="github-icon" width={32} height={32} />
        <p className="body font-medium">View this repository</p>
      </Link>
    </footer>
  );
};

export default Footer;
