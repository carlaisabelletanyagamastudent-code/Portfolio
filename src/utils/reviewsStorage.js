const STORAGE_KEY = 'portfolio_reviews_v1';

function parseReviews(rawValue) {
  if (!rawValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(rawValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch {
    return [];
  }
}

export function getReviews() {
  if (typeof window === 'undefined') {
    return [];
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);
  const reviews = parseReviews(rawValue);

  return reviews.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getReviewById(reviewId) {
  return getReviews().find((review) => review.id === reviewId);
}

export function addReview(review) {
  const reviews = getReviews();
  const updatedReviews = [review, ...reviews];

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReviews));

  return updatedReviews;
}
