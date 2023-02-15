// exporting our google analytics measurement id from our .env file
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

// records data on each page visited
export const pageView = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// handles any custom event we want to track. For eg. how many clicks has our subscribe button
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
