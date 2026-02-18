import { Link } from 'react-router-dom';
import SectionCard from '../components/SectionCard';
import SectionHeader from '../components/SectionHeader';

const primaryButtonClass =
  'inline-flex items-center rounded-xl bg-gradient-to-br from-[#2141a0] to-[#365ecf] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_18px_rgba(33,65,160,0.28)] transition hover:-translate-y-0.5';

function NotFoundPage() {
  return (
    <SectionCard>
      <SectionHeader
        badge="404"
        description="The route you requested is not available. Use the navigation bar to open an existing page."
        title="Page Not Found"
      />
      <div className="mt-5">
        <Link className={primaryButtonClass} to="/">
          Return Home
        </Link>
      </div>
    </SectionCard>
  );
}

export default NotFoundPage;
