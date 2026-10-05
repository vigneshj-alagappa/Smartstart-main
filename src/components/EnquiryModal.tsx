import { ArrowRight, Check, Sparkles, X } from 'lucide-react';
import { FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';
import { programmes } from '../data';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY;

const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

interface EnquiryModalProps {
  submitted: boolean;
  submitting: boolean;
  formError: string;
  onClose: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

export function EnquiryModal({
  submitted,
  submitting,
  formError,
  onClose,
  onSubmit,
}: EnquiryModalProps) {
  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
        <button className="modal-close" onClick={onClose} aria-label="Close enquiry form">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="success-state">
            <span className="success-icon"><Check size={30} /></span>
            <h2>We received your note.</h2>
            <p>Thank you for reaching out. Our admissions team will call you soon to plan your little one's next happy step.</p>
            <button className="button button-red" onClick={onClose}>
              Back to the site <ArrowRight size={17} />
            </button>
          </div>
        ) : (
          <>
            <span className="eyebrow"><Sparkles size={14} /> Let's get to know you</span>
            <h2 id="enquiry-title">Start their happy beginning.</h2>
            <p className="modal-intro">Tell us a little about your child and we'll help you find the right programme.</p>

            <form className="enquiry-form" onSubmit={onSubmit}>
              <label>
                Parent's name
                <input name="parent_name" required minLength={2} placeholder="e.g. Priya Raman" />
              </label>
              <label>
                Phone number
                <input name="phone" required minLength={7} type="tel" placeholder="e.g. +91 98765 43210" />
              </label>
              <div className="form-row">
                <label>
                  Child's age
                  <select name="child_age" required defaultValue="">
                    <option value="" disabled>Select age</option>
                    <option>1.5 – 2.5 years</option>
                    <option>2.5 – 3.5 years</option>
                    <option>3.5 – 4.5 years</option>
                    <option>4.5 – 6 years</option>
                  </select>
                </label>
                <label>
                  Programme
                  <select name="programme" required defaultValue="">
                    <option value="" disabled>Select programme</option>
                    {programmes.map((item) => (
                      <option key={item.name}>{item.name}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label>
                Anything you'd like to ask? <span className="optional">Optional</span>
                <textarea name="message" maxLength={1000} rows={3} placeholder="Tell us what's on your mind..." />
              </label>
              {formError && <p className="form-error">{formError}</p>}
              <button className="button button-red form-submit" disabled={submitting} type="submit">
                {submitting ? 'Sending...' : 'Send my enquiry'} <ArrowRight size={18} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export { supabase };
