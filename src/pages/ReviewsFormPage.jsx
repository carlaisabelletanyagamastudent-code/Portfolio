import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SectionCard from '../components/SectionCard';
import SectionHeader from '../components/SectionHeader';
import { addReview } from '../utils/reviewsStorage';

const initialForm = {
  name: '',
  role: '',
  rating: '5',
  message: '',
};

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-[#2141a0] focus:ring-2 focus:ring-blue-100';

const primaryButtonClass =
  'inline-flex items-center rounded-xl bg-gradient-to-br from-[#2141a0] to-[#365ecf] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_18px_rgba(33,65,160,0.28)] transition hover:-translate-y-0.5';

const secondaryButtonClass =
  'inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#2141a0] transition hover:-translate-y-0.5';

function createReviewId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `review-${Date.now()}`;
}

function ReviewsFormPage() {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const role = formData.role.trim();
    const message = formData.message.trim();

    if (!name || !message) {
      setError('Name and comment are required.');
      return;
    }

    addReview({
      id: createReviewId(),
      name,
      role: role || 'Visitor',
      rating: Number(formData.rating),
      message,
      createdAt: new Date().toISOString(),
    });

    navigate('/reviews');
  };

  return (
    <SectionCard>
      <SectionHeader
        badge="Reviews"
        description="Submit your feedback using the form below. Entries are saved in Local Storage only and shown on the comments page."
        title="Write a Review"
      />

      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        {error ? (
          <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-1.5" htmlFor="name">
            <span className="text-sm font-semibold text-slate-800">Name</span>
            <input
              className={inputClass}
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="Your full name"
              value={formData.name}
            />
          </label>

          <label className="grid gap-1.5" htmlFor="role">
            <span className="text-sm font-semibold text-slate-800">Role</span>
            <input
              className={inputClass}
              id="role"
              name="role"
              onChange={handleChange}
              placeholder="Student, Client, Team Lead..."
              value={formData.role}
            />
          </label>
        </div>

        <label className="grid gap-1.5" htmlFor="rating">
          <span className="text-sm font-semibold text-slate-800">Rating</span>
          <select
            className={inputClass}
            id="rating"
            name="rating"
            onChange={handleChange}
            value={formData.rating}
          >
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Very Good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>
            <option value="1">1 - Needs Improvement</option>
          </select>
        </label>

        <label className="grid gap-1.5" htmlFor="message">
          <span className="text-sm font-semibold text-slate-800">Comment</span>
          <textarea
            className={`${inputClass} min-h-36 resize-y`}
            id="message"
            name="message"
            onChange={handleChange}
            placeholder="Write your review here..."
            value={formData.message}
          />
        </label>

        <div className="flex flex-wrap gap-3">
          <button className={primaryButtonClass} type="submit">
            Save Review
          </button>
          <Link className={secondaryButtonClass} to="/reviews">
            View Comments
          </Link>
        </div>
      </form>
    </SectionCard>
  );
}

export default ReviewsFormPage;
