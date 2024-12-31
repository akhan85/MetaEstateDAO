export function reportWebVitals(metric) {
  if (process.env.NODE_ENV !== 'production') return;

  // Log Core Web Vitals
  console.log(metric);

  // You can send these metrics to your analytics service
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}