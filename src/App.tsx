import { FormEvent, useEffect, useState } from "react";
import { Link, Routes, Route, useSearchParams } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <img src="/logo.png" alt="Cope Tactical Logo" className="home-logo" />

      <p className="subtitle">Custom Paracord Slings &amp; Tactical Gear</p>
      <p className="subtitle">Website coming soon.</p>

      <div className="contact">
        <Link to="/contact?to=support@copetactical.com">
          support@copetactical.com
        </Link>
        <br />
        <Link to="/contact?to=sales@copetactical.com">
          sales@copetactical.com
        </Link>
      </div>

      <div className="footer">
        &copy; 2026 Cope Tactical. All rights reserved.
      </div>
    </div>
  );
}

function ContactPage() {
  const [searchParams] = useSearchParams();

  const [to, setTo] = useState("sales@copetactical.com");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const toParam = searchParams.get("to");

    if (
      toParam === "sales@copetactical.com" ||
      toParam === "support@copetactical.com"
    ) {
      setTo(toParam);
    }
  }, [searchParams]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = `${body}\n\nFrom: ${from}`;
    const url =
      `mailto:${to}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(text)}`;

    window.location.href = url;
  };

  return (
    <div className="page">
      <div className="layout">
        <div className="side left">
          <img src="/logo-mono.png" alt="Cope Tactical Logo" />
        </div>

        <div className="form-card">
          <h1>Contact Cope Tactical</h1>

          <div className="subtitle contact-subtitle">
            Fill out the form below to draft your email.
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="to">To:</label>
              <select
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              >
                <option value="sales@copetactical.com">
                  sales@copetactical.com
                </option>
                <option value="support@copetactical.com">
                  support@copetactical.com
                </option>
              </select>
            </div>

            <div className="form-row">
              <label htmlFor="from">From:</label>
              <input
                id="from"
                type="email"
                required
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>

            <div className="form-row">
              <label htmlFor="subject">Subject:</label>
              <input
                id="subject"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="form-row">
              <label htmlFor="body">Body:</label>
              <textarea
                id="body"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>

            <div className="button-row">
              <button className="send-button" type="submit">
                Send
              </button>

              <Link to="/" className="cancel-link">
                Cancel
              </Link>
            </div>
          </form>

          <div className="note">Clicking Send will open your email app.</div>
        </div>

        <div className="side">
          <img src="/logo-mono.png" alt="Cope Tactical Logo" />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}