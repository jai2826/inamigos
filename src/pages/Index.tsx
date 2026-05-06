import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Droplets,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState, } from "react";
import { toast } from "sonner";
import heroImg from "./../assets/hero-community.jpeg";
import logo from "./../assets/inamigos-logo.png";
import lifeImg from "./../assets/mission-life.jpeg";
import vikasImg from "./../assets/project-vikas.jpeg";
import waterImg from "./../assets/save-water.jpeg";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#impact", label: "Impact" },
  { href: "#join", label: "Join Us" },
];

const projects = [
  {
    title: "Project Vikas",
    tag: "Education",
    icon: GraduationCap,
    accent: "bg-brand-blue",
    img: vikasImg,
    text: "Empowering young minds through skill-building, career mentorship, and academic support across schools and colleges in India.",
  },
  {
    title: "Mission Life",
    tag: "Sustainability",
    icon: Leaf,
    accent: "bg-brand-green",
    img: lifeImg,
    text: "Promoting Lifestyle for Environment (LiFE) — sustainable living habits and grassroots climate action in local communities.",
  },
  {
    title: "Save Water, Save Life",
    tag: "Water & Health",
    icon: Droplets,
    accent: "bg-brand-orange",
    img: waterImg,
    text: "Driving water conservation, awareness drives, and clean-water access initiatives in underserved regions.",
  },
];

const stats = [
  { value: "24", label: "Countries reached", icon: Globe2 },
  {
    value: "2,600+",
    label: "Volunteers & members",
    icon: Users,
  },
  {
    value: "5+",
    label: "Years of impact",
    icon: HeartHandshake,
  },
  {
    value: "80G & 12A",
    label: "Certified non-profit",
    icon: ShieldCheck,
  },
];

const Index = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Volunteer",
    message: "",
  });


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);


  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you for joining! 🎉", {
        description: `We've received your interest in ${form.interest.toLowerCase()}. Our team will reach out at ${form.email} soon.`,
      });
      setForm({ name: "", email: "", phone: "", interest: "Volunteer", message: "" });
      setSubmitting(false);
    }, 600);
  };



  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Skip link for a11y */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to main content
      </a>

      {/* Rainbow ribbon */}
      <div
        aria-hidden
        className="h-1 w-full bg-gradient-rainbow"
      />

      {/* Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all ${
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "bg-background"
        }`}>
        <div className="container flex h-20 items-center justify-between gap-4">
          <a
            href="#"
            className="flex items-center gap-3"
            aria-label="InAmigos Foundation home">
            <img
              src={logo}
              alt="InAmigos Foundation logo"
              className="h-12 w-12 object-contain"
              width={48}
              height={48}
            />
            <div className="leading-tight">
              <p className="font-display text-base font-extrabold text-primary-dark">
                InAmigos
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Foundation
              </p>
            </div>
          </a>

          <nav
            aria-label="Primary"
            className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              size="sm">
              <a href="#join">Volunteer</a>
            </Button>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-primary px-5 hover:bg-primary-dark">
              <a href="#join">
                Donate{" "}
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border md:hidden">
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <nav
              aria-label="Mobile"
              className="container py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-base font-medium hover:bg-muted">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <Button
                    asChild
                    className="w-full rounded-full">
                    <a
                      href="#join"
                      onClick={() => setOpen(false)}>
                      Donate
                    </a>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      <main id="main">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-hero"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
          />

          <div className="container grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-10 lg:py-32">
            <div className="lg:col-span-7 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-brand-yellow" />
                Section 8 Non-Profit · 80G & 12A Certified
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-accent-foreground text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
                Uniting minds{" "}
                <br className="hidden sm:block" />
                for lasting{" "}
                <span className="text-brand-yellow">
                  change.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                InAmigos Foundation is a youth-led
                non-profit creating real social impact
                across India — through education,
                sustainability, and community-driven action.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white px-7 text-primary-dark hover:bg-brand-yellow hover:text-primary-dark">
                  <a href="#join">
                    Join the movement{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/40 bg-transparent px-7 text-secondary-foreground hover:bg-white/10 hover:text-primary">
                  <a href="#projects">Explore our work</a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 animate-fade-up [animation-delay:120ms]">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-[2rem] bg-gradient-rainbow opacity-40 blur-2xl"
                />
                <img
                  src={heroImg}
                  alt="Volunteers and children planting a sapling together in a community"
                  width={1536}
                  height={1024}
                  className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-lift"
                />
                <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-4 shadow-lift sm:block">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/15">
                      <Leaf className="h-6 w-6 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-foreground">
                        10K+
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Lives touched
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="py-20 md:py-28">
          <div className="container grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                About the foundation
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-balance sm:text-4xl lg:text-5xl">
                A community of changemakers, working where
                it matters most.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Founded in 2020 by Mr. Govind Shukla,
                InAmigos Foundation (IAF) is a Section 8
                registered non-profit headquartered in
                Chhattisgarh, India. We address critical
                societal issues through a network of
                dedicated professionals, students, and
                volunteers — uniting minds for change across
                24 countries.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Section 8 registered non-profit",
                  "80G & 12A tax-exemption certified",
                  "CSR-1 registered with MCA",
                  "Operates across 24 countries",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-brand-green" />
                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="bg-surface-soft py-20 md:py-28">
          <div className="container">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  What we do
                </p>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-balance sm:text-4xl lg:text-5xl">
                  Programs creating measurable change.
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                From classrooms to riverbanks, our flagship
                initiatives turn local action into national
                impact.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => {
                const Icon = p.icon;
                return (
                  <article
                    key={p.title}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        className={`absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-lift ${p.accent}`}
                        aria-hidden>
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {p.tag}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-bold">
                        {p.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {p.text}
                      </p>
                      <a
                        href="#join"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                        Get involved{" "}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section
          id="impact"
          className="py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Social impact
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-balance sm:text-4xl lg:text-5xl">
                Small acts. Multiplied by thousands.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Every program is run by people who live in
                the communities they serve — the reason our
                impact compounds, year after year.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-border bg-card p-7 text-center shadow-soft">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-5 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* JOIN US */}
        <section
          id="join"
          className="pb-24">
          <div className="container">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-hero px-6 py-16 text-center shadow-lift sm:px-12 md:py-20">
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 bg-gradient-rainbow"
              />
              <div
                aria-hidden
                className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-yellow/20 blur-3xl"
              />

              <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">
                Be the change. Join InAmigos today.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">
                Volunteer, donate, or partner with us.
                Together we can turn ideas into action — and
                action into lasting impact.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-brand-yellow px-8 text-primary-dark hover:bg-white">
                  <a href="mailto:support@inamigosfoundation.org.in">
                    Join us{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/40 bg-transparent px-8 text-white hover:bg-white/10 hover:text-white">
                  <a href="#projects">Support a project</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* GET INVOLVED FORM */}
        <section
          id="get-involved"
          aria-labelledby="get-involved-heading"
          className="bg-surface-soft py-20 md:py-28">
          <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Get involved
              </p>
              <h2
                id="get-involved-heading"
                className="mt-4 font-display text-3xl font-extrabold leading-tight text-balance sm:text-4xl lg:text-5xl">
                Step in. Stand up.{" "}
                <span className="text-primary">
                  Make a difference.
                </span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Whether you have an hour, a skill, or a
                resource to share — there's a place for you
                in the InAmigos community. Tell us how you'd
                like to contribute and our team will get
                back within 48 hours.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Email
                    </p>
                    <p className="text-sm text-muted-foreground">
                      support@inamigosfoundation.org.in
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-green/10 text-brand-green">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Call
                    </p>
                    <p className="text-sm text-muted-foreground">
                      +91 (0) 000 000 0000
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Visit
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Bilaspur, Chhattisgarh, India
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8 md:p-10"
                aria-describedby="form-help">
                <p
                  id="form-help"
                  className="text-sm text-muted-foreground">
                  All fields marked{" "}
                  <span
                    aria-hidden
                    className="text-destructive">
                    *
                  </span>{" "}
                  are required.
                </p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Full name{" "}
                      <span
                        aria-hidden
                        className="text-destructive">
                        *
                      </span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          name: e.target.value,
                        }))
                      }
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email{" "}
                      <span
                        aria-hidden
                        className="text-destructive">
                        *
                      </span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          email: e.target.value,
                        }))
                      }
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone (optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          phone: e.target.value,
                        }))
                      }
                      placeholder="+91 ..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">
                      I want to{" "}
                      <span
                        aria-hidden
                        className="text-destructive">
                        *
                      </span>
                    </Label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={form.interest}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          interest: e.target.value,
                        }))
                      }
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                      <option>Volunteer</option>
                      <option>Donate</option>
                      <option>Partner / Sponsor</option>
                      <option>Join an internship</option>
                      <option>Just say hello</option>
                    </select>
                  </div>
                </div>

                <fieldset className="mt-5">
                  <legend className="mb-2 text-sm font-medium">
                    Tell us more{" "}
                    <span
                      aria-hidden
                      className="text-destructive">
                      *
                    </span>
                  </legend>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setForm((f) => ({
                        ...f,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Share your skills, availability, or how you'd like to support our mission..."
                  />
                </fieldset>

                <div className="mt-6 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to be contacted
                    by the InAmigos team.
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="rounded-full bg-primary px-8 hover:bg-primary-dark">
                    {submitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send message{" "}
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface-soft">
        <div className="container py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt=""
                  aria-hidden
                  className="h-10 w-10 object-contain"
                  width={40}
                  height={40}
                />
                <div className="leading-tight">
                  <p className="font-display font-extrabold text-primary-dark">
                    InAmigos Foundation
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Uniting Minds for Change
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-sm text-muted-foreground">
                A Section 8 non-profit creating lasting
                social impact through education,
                sustainability, and community action.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">
                Explore
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="hover:text-primary">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-foreground">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>support@inamigosfoundation.org.in</li>
                <li>Bilaspur, Chhattisgarh, India</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} InAmigos
              Foundation. All rights reserved.
            </p>
            <div
              aria-hidden
              className="h-1 w-32 rounded-full bg-gradient-rainbow"
            />
          </div>
        </div>
      </footer>
      {/* Toasting */}
      {/* <Toaster/> */}
    </div>
  );
};

export default Index;
