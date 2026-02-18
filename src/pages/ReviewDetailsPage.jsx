import { Link, useParams } from 'react-router-dom';
import SectionCard from '../components/SectionCard';
import SectionHeader from '../components/SectionHeader';
import { getReviewById } from '../utils/reviewsStorage';

const primaryButtonClass =
  'inline-flex items-center rounded-xl bg-gradient-to-br from-[#2141a0] to-[#365ecf] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_18px_rgba(33,65,160,0.28)] transition hover:-translate-y-0.5';

const secondaryButtonClass =
  'inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#2141a0] transition hover:-translate-y-0.5';

function formatDate(value) {
  return new Date(value).toLocaleString();
}

function ReviewDetailsPage() {
  const { reviewId } = useParams();
  const review = getReviewById(reviewId);

  if (!review) {
    return (
      <SectionCard>
        <SectionHeader
          badge="Details"
          description="The selected review does not exist in Local Storage. It may have been removed from the browser."
          title="Review Not Found"
        />
        <div className="mt-5">
          <Link className={primaryButtonClass} to="/reviews">
            Back to Comments
          </Link>
        </div>
      </SectionCard>
    );
  }

  return (
    <SectionCard>
      <SectionHeader badge="Details" title="Review Details" />

      <article className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{review.name}</h2>
            <p className="mt-1 text-slate-600">Role: {review.role}</p>
          </div>
          <p className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700">
            Rating: {review.rating}/5
          </p>
        </div>

        <p className="mt-3 text-sm text-slate-500">Submitted: {formatDate(review.createdAt)}</p>
        <p className="mt-3 leading-7 text-slate-700">{review.message}</p>
      </article>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link className={primaryButtonClass} to="/reviews">
          Back to Comments
        </Link>
        <Link className={secondaryButtonClass} to="/reviews/new">
          Write Another
        </Link>
      </div>
    </SectionCard>
  );
}

export default ReviewDetailsPage;
