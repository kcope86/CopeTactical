import "../styles/contact.css";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const SALES_EMAIL = "sales@copetactical.com";
const SUPPORT_EMAIL = "support@copetactical.com";
const DESIGN_EMAIL = "design@copetactical.com";

type ContactRecipient =
  | typeof SALES_EMAIL
  | typeof SUPPORT_EMAIL
  | typeof DESIGN_EMAIL;

type ContactTemplate = {
  subject: string;
  body: string;
};

const CONTACT_TEMPLATES: Record<ContactRecipient, ContactTemplate> = {
  [SALES_EMAIL]: {
    subject: "Custom sling inquiry",
    body:
      "Hi,\n\nI'm interested in a custom sling and would like more information about options, pricing, and lead time.\n\nThanks,",
  },
  [SUPPORT_EMAIL]: {
    subject: "Question about an existing order",
    body:
      "Hi,\n\nI'm reaching out with a question about an existing order, existing product, or support issue.\n\nThanks,",
  },
  [DESIGN_EMAIL]: {
    subject: "Custom design request",
    body:
      "Hi,\n\nI have a custom sling idea and would like to discuss the design, colors, hardware, and overall configuration.\n\nThanks,",
  },
};

function isValidRecipient(value: string | null): value is ContactRecipient {
  return value === SALES_EMAIL || value === SUPPORT_EMAIL || value === DESIGN_EMAIL;
}

export default function ContactPage() {
  const [searchParams] = useSearchParams();

  const [to, setTo] = useState<ContactRecipient>(DESIGN_EMAIL);
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const currentTemplate = useMemo(() => CONTACT_TEMPLATES[to], [to]);

  useEffect(() => {
    const toParam = searchParams.get("to");

    if (isValidRecipient(toParam)) {
      setTo(toParam);
      return;
    }

    setTo(DESIGN_EMAIL);
  }, [searchParams]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const finalSubject =
      subject.trim() === "" ? currentTemplate.subject : subject;

    const finalBody =
      body.trim() === "" ? currentTemplate.body : body;

    const text = `${finalBody}\n\nFrom: ${from}`;
    const url =
      `mailto:${to}` +
      `?subject=${encodeURIComponent(finalSubject)}` +
      `&body=${encodeURIComponent(text)}`;

    window.location.href = url;
  };

  const handleToChange = (value: string) => {
    if (!isValidRecipient(value)) {
      return;
    }

    setTo(value);
  };

  return (
    <div className="page contact-page">
      <div className="container contact-container">
        <div className="contact-form-zone">
          <div className="contact-logo-bg" aria-hidden="true">
            <img src="/logo-mono.png" alt="" className="contact-logo-image" />
          </div>

          <div className="form-card">
            <h1>Let's Make Something!</h1>

            <div className="subtitle contact-subtitle">
              Fill out the form below to get in touch. <br />
              Expect a response within a couple business days.
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="to">To:</label>
                <select
                  id="to"
                  value={to}
                  onChange={(e) => handleToChange(e.target.value)}
                >
                  <option value={DESIGN_EMAIL}>{DESIGN_EMAIL}</option>
                  <option value={SALES_EMAIL}>{SALES_EMAIL}</option>
                  <option value={SUPPORT_EMAIL}>{SUPPORT_EMAIL}</option>
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
                  value={subject}
                  placeholder={currentTemplate.subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="form-row">
                <label htmlFor="body">Body:</label>
                <textarea
                  id="body"
                  value={body}
                  placeholder={currentTemplate.body}
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

            <div className="note">
              Clicking Send will open your email app.
            </div>
          </div>
        </div>

        <div className="contact-copy">
          <p className="subtitle">
            Custom Paracord Slings, Sling Hardware, <br />
            Gear &amp; Accessories.
          </p>

          <p className="subtitle">
            Website with storefront coming soon!
          </p>

          <p className="contact-copy-text">
            Reach out for custom sling requests,
            <br />
            questions, or pricing.
            <br />
            I'll get back to you as soon as I can!
          </p>
        </div>
      </div>
    </div>
  );
}