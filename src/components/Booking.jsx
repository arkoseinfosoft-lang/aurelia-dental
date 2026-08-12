import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Lock,
  ShieldCheck,
  Loader2,
  CalendarCheck,
  PartyPopper,
} from "lucide-react";
import { packages, studio } from "../data/content";
import Reveal from "./Reveal";

const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID || "";

function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const existing = document.getElementById("razorpay-checkout-js");
    if (existing) {
      existing.addEventListener("load", () => resolve(true));
      existing.addEventListener("error", () => resolve(false));
      return;
    }
    const script = document.createElement("script");
    script.id = "razorpay-checkout-js";
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

const emptyForm = { name: "", email: "", phone: "", date: "", notes: "" };

export default function Booking() {
  const [selected, setSelected] = useState(
    packages.find((p) => p.featured)?.id || packages[0].id
  );
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | processing | success
  const [receipt, setReceipt] = useState(null);

  const activePackage = useMemo(
    () => packages.find((p) => p.id === selected),
    [selected]
  );

  const todayISO = new Date().toISOString().split("T")[0];

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please share your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      next.phone = "Enter a valid 10-digit phone number.";
    if (!form.date) next.date = "Pick a preferred date.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("processing");

    const amountPaise = activePackage.price * 100;

    if (RAZORPAY_KEY) {
      const ready = await loadRazorpayScript();
      if (ready && window.Razorpay) {
        const rzp = new window.Razorpay({
          key: RAZORPAY_KEY,
          amount: amountPaise,
          currency: "INR",
          name: studio.name,
          description: `${activePackage.name} · Reservation`,
          prefill: {
            name: form.name,
            email: form.email,
            contact: form.phone,
          },
          notes: { preferred_date: form.date, notes: form.notes },
          theme: { color: "#B08D57" },
          handler: (response) => {
            setReceipt({
              id: response.razorpay_payment_id,
              demo: false,
            });
            setStatus("success");
          },
          modal: {
            ondismiss: () => setStatus("idle"),
          },
        });
        rzp.on("payment.failed", () => setStatus("idle"));
        rzp.open();
        return;
      }
    }

    // Demo mode: no gateway key configured, or the script failed to load.
    // Simulates a real checkout so the flow is fully demonstrable pre-launch.
    window.setTimeout(() => {
      setReceipt({ id: `DEMO-${Date.now().toString().slice(-8)}`, demo: true });
      setStatus("success");
    }, 1400);
  }

  function resetFlow() {
    setForm(emptyForm);
    setErrors({});
    setStatus("idle");
    setReceipt(null);
  }

  return (
    <section id="reserve" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow justify-center !text-gold-light">
            Reserve Your Visit
          </p>
          <h2 className="section-heading text-balance mt-4 text-white">
            Begin with a considered first visit.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/60">
            Choose a starting point below — every fee is fully credited
            toward your treatment plan.
          </p>
        </Reveal>

        {/* Package selector */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {packages.map((pkg, i) => {
            const isSelected = selected === pkg.id;
            return (
              <Reveal delay={i * 0.08} key={pkg.id}>
                <button
                  type="button"
                  onClick={() => setSelected(pkg.id)}
                  className={`relative flex h-full w-full flex-col rounded-2xl border p-6 text-left transition-all duration-300 ${
                    isSelected
                      ? "border-gold bg-white shadow-lift"
                      : "border-white/10 bg-white/[0.03] hover:border-white/25"
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 font-mono text-[10px] tracking-widest2 uppercase text-white">
                      Most Reserved
                    </span>
                  )}
                  <p
                    className={`font-display text-xl ${
                      isSelected ? "text-ink" : "text-white"
                    }`}
                  >
                    {pkg.name}
                  </p>
                  <p
                    className={`mt-1 text-xs ${
                      isSelected ? "text-graphite" : "text-white/50"
                    }`}
                  >
                    {pkg.note}
                  </p>
                  <p
                    className={`mt-5 font-display text-3xl ${
                      isSelected ? "text-ink" : "text-white"
                    }`}
                  >
                    ₹{pkg.price.toLocaleString("en-IN")}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 text-[13px] leading-snug ${
                          isSelected ? "text-graphite" : "text-white/60"
                        }`}
                      >
                        <Check
                          size={14}
                          className={`mt-0.5 shrink-0 ${
                            isSelected ? "text-gold-dark" : "text-gold-light"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`mt-6 flex items-center gap-2 text-xs font-semibold ${
                      isSelected ? "text-gold-dark" : "text-white/40"
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                        isSelected
                          ? "border-gold bg-gold text-white"
                          : "border-white/30"
                      }`}
                    >
                      {isSelected && <Check size={10} />}
                    </span>
                    {isSelected ? "Selected" : "Select this"}
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Booking form / payment */}
        <Reveal delay={0.15} className="mt-14">
          <div className="mx-auto max-w-2xl rounded-[1.75rem] bg-white p-7 shadow-lift sm:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-6 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-light text-teal-dark">
                    <PartyPopper size={26} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-ink">
                    You're reserved, {form.name.split(" ")[0]}.
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-graphite">
                    Your {activePackage.name.toLowerCase()} is booked for{" "}
                    {new Date(form.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    . A confirmation has been sent to {form.email}.
                  </p>

                  <div className="mt-6 w-full rounded-xl bg-ivory p-4 text-left font-mono text-[11px] text-graphite">
                    <div className="flex justify-between">
                      <span>Reference</span>
                      <span className="text-ink">{receipt?.id}</span>
                    </div>
                    <div className="mt-1.5 flex justify-between">
                      <span>Amount</span>
                      <span className="text-ink">
                        ₹{activePackage.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  {receipt?.demo && (
                    <p className="mt-4 rounded-lg bg-gold-light/30 px-3 py-2 text-[11px] leading-relaxed text-gold-dark">
                      Demo Mode — no payment was actually taken. Add
                      VITE_RAZORPAY_KEY_ID to accept live payments.
                    </p>
                  )}

                  <button
                    onClick={resetFlow}
                    className="btn-secondary mt-7 !py-2.5 text-xs"
                  >
                    Make another reservation
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                  noValidate
                >
                  <div className="sm:col-span-2">
                    <p className="chip">
                      Reserving · {activePackage.name} · ₹
                      {activePackage.price.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <Field
                    label="Full name"
                    error={errors.name}
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Aisha Sharma"
                  />
                  <Field
                    label="Email"
                    type="email"
                    error={errors.email}
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="aisha@email.com"
                  />
                  <Field
                    label="Phone"
                    error={errors.phone}
                    value={form.phone}
                    onChange={(v) => setForm({ ...form, phone: v })}
                    placeholder="98765 43210"
                  />
                  <Field
                    label="Preferred date"
                    type="date"
                    min={todayISO}
                    error={errors.date}
                    value={form.date}
                    onChange={(v) => setForm({ ...form, date: v })}
                  />

                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-semibold text-ink">
                      Notes <span className="text-graphite">(optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) =>
                        setForm({ ...form, notes: e.target.value })
                      }
                      placeholder="Anything you'd like the team to know before your visit"
                      className="w-full resize-none rounded-xl border border-ink/10 bg-ivory/60 px-4 py-3 text-sm text-ink placeholder:text-graphite/60 focus-visible:outline-gold"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "processing"}
                      className="btn-gold w-full"
                    >
                      {status === "processing" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Processing payment…
                        </>
                      ) : (
                        <>
                          <Lock size={15} />
                          Reserve &amp; Pay ₹
                          {activePackage.price.toLocaleString("en-IN")}
                        </>
                      )}
                    </button>

                    <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-graphite">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck size={13} className="text-teal" />
                        256-bit encrypted checkout
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CalendarCheck size={13} className="text-teal" />
                        Free rescheduling
                      </span>
                      {!RAZORPAY_KEY && (
                        <span className="rounded-full bg-gold-light/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-gold-dark">
                          Demo Mode
                        </span>
                      )}
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, error, value, onChange, type = "text", ...rest }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-ink">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border bg-ivory/60 px-4 py-3 text-sm text-ink placeholder:text-graphite/60 focus-visible:outline-gold ${
          error ? "border-red-300" : "border-ink/10"
        }`}
        {...rest}
      />
      {error && <p className="mt-1.5 text-[11px] text-red-500">{error}</p>}
    </div>
  );
}
