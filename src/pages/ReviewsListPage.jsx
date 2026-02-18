import { Link } from 'react-router-dom';
import SectionCard from '../components/SectionCard';
import SectionHeader from '../components/SectionHeader';
import { getReviews } from '../utils/reviewsStorage';

const primaryButtonClass =
  'inline-flex items-center rounded-xl bg-gradient-to-br from-[#2141a0] to-[#365ecf] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_18px_rgba(33,65,160,0.28)] transition hover:-translate-y-0.5';

function formatDate(value) {
  return new Date(value).toLocaleString();
}

function previewComment(comment) {
  if (comment.length <= 130) {
    return comment;
  }

  return `${comment.slice(0, 130)}...`;
}

function ReviewsListPage() {
  const reviews = getReviews();

  return (
    <SectionCard>
      <SectionHeader
        badge="Comments"
        description="Click any review card to open the details page and view the complete feedback."
        title="Comments List"
      />

      <div className="mt-5 flex flex-wrap gap-3">
        <Link className={primaryButtonClass} to="/reviews/new">
          Add New Review
        </Link>
      </div>

      {reviews.length === 0 ? (
        <div className="mt-5 rounded-xl border border-dashed border-blue-300 bg-white p-4 text-slate-600">
          No reviews yet. Submit one on the Reviews page and it will appear here.
        </div>
      ) : (
        <div className="mt-5 grid gap-3">
          {reviews.map((review) => (
            <Link
              className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_10px_22px_rgba(33,65,160,0.10)]"
              key={review.id}
              to={`/reviews/${review.id}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h2 className="text-base font-semibold text-slate-900">{review.name}</h2>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
                <span className="rounded-full bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700">
                  {review.rating}/5
                </span>
              </div>

              <p className="mt-2 leading-7 text-slate-600">{previewComment(review.message)}</p>
              <p className="mt-2 text-xs text-slate-500">
                Submitted: {formatDate(review.createdAt)}
              </p>
            </Link>
          ))}
        </div>
      )}
    </SectionCard>
  );
}

export default ReviewsListPage;
