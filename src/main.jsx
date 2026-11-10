import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Phone,
  MessageCircle,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Gift,
  Heart,
  ShieldCheck,
  Sparkles,
  Search,
  Instagram,
  Facebook,
  Clock,
  Star,
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react";
import { shop } from "./data/shop";
import { categories, products } from "./data/products";
import "./styles.css";

const tel = `tel:${shop.phoneHref}`;
const whatsapp = `https://wa.me/${shop.phoneHref.replace(/\D/g, "")}?text=${encodeURIComponent(
  `Hello ${shop.name}, I would like to enquire about your toys.`,
)}`;
function Brand() {
  return (
    <a className="brand" href="#home" aria-label={`${shop.name} home`}>
      <span className="brand-icon">🧸</span>
      <span>
        <strong>
          <span>Kids</span> <em>Juction</em>
        </strong>
        <small>TOYS • GAMES • HAPPY DAYS</small>
      </span>
    </a>
  );
}
function TopbarMessage({ duplicate = false }) {
  return (
    <div
      className={duplicate ? "top-message duplicate" : "top-message"}
      aria-hidden={duplicate || undefined}
    >
      <span>
        <MapPin size={14} />
        {shop.fullAddress}
      </span>
      <a href={tel} tabIndex={duplicate ? -1 : undefined}>
        <Phone size={14} />
        {shop.phone}
      </a>
    </div>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("kids-junction-theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("kids-junction-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <div className="topbar">
        <div className="container top-inner">
          <div className="top-track">
            <TopbarMessage />
            <TopbarMessage duplicate />
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container nav">
          <Brand />
          <nav
            className={open ? "navlinks active" : "navlinks"}
            aria-label="Main navigation"
          >
            {[
              ["Home", "#home"],
              ["Categories", "#categories"],
              ["Our Toys", "#toys"],
              ["About Us", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} onClick={() => setOpen(false)} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setDark((current) => !current)}
              aria-label={
                dark ? "Switch to light theme" : "Switch to dark theme"
              }
              title={dark ? "Light theme" : "Dark theme"}
            >
              {dark ? <Sun size={19} /> : <Moon size={19} />}
            </button>
            <a className="btn btn-primary header-call" href={tel}>
              <Phone size={17} /> <span>Call Us</span>
            </a>
          </div>
          <button
            className="menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={15} /> Your happy place for toys!
          </div>
          <h1>
            Little toys.
            <br />
            <span>Big smiles.</span>
            <br />
            Endless fun!
          </h1>
          <p>
            From exciting remote cars to creative building blocks, discover a
            world of wonder for every little explorer.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#toys">
              Explore Our Toys <ArrowRight size={18} />
            </a>
            <a className="btn btn-outline" href={tel}>
              <Phone size={17} /> Call the Store
            </a>
          </div>
          <div className="hero-trust">
            <span>⭐ Loved by little explorers</span>
            <span>🎁 Gifts for every occasion</span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/images/hero-toys.webp"
            alt="Happy children with colourful toys, a teddy bear, toy cars and building blocks"
            fetchPriority="high"
          />
          <span className="hero-sticker">
            100%
            <br />
            <small>FUN!</small>
          </span>
          <span className="hero-spark one">✳</span>
          <span className="hero-spark two">✦</span>
        </div>
      </div>
      <div className="hero-wave" />
    </section>
  );
}
function Perks() {
  return (
    <section className="container perks" aria-label="Why visit us">
      <div>
        <span className="perk-icon pink">
          <Gift />
        </span>
        <span>
          <strong>Something for Everyone</strong>
          <small>Toys for every little interest</small>
        </span>
      </div>
      <div>
        <span className="perk-icon yellow">
          <Star />
        </span>
        <span>
          <strong>Fun-Filled Collection</strong>
          <small>Discover exciting new favourites</small>
        </span>
      </div>
      <div>
        <span className="perk-icon green">
          <Heart />
        </span>
        <span>
          <strong>Made for Happy Moments</strong>
          <small>Playtime, birthdays & more</small>
        </span>
      </div>
      <div>
        <span className="perk-icon blue">
          <MapPin />
        </span>
        <span>
          <strong>Shop Locally</strong>
          <small>Visit us in Chandpur</small>
        </span>
      </div>
    </section>
  );
}
function SectionHead({ kicker, title, desc, action }) {
  return (
    <div className="section-head">
      <div>
        <span className="section-kicker">{kicker}</span>
        <h2>{title}</h2>
        {desc && <p>{desc}</p>}
      </div>
      {action}
    </div>
  );
}
function CategorySection({ onChoose }) {
  return (
    <section className="section categories-section" id="categories">
      <div className="container">
        <SectionHead
          kicker="FIND THEIR NEXT FAVOURITE"
          title={
            <>
              Pick a category <span className="accent">✳</span>
            </>
          }
          desc="A little something for every kind of imagination."
        />
        <div className="category-grid">
          {categories.map((c) => (
            <a
              key={c.id}
              href="#toys"
              onClick={() => onChoose(c.id)}
              className="category-card"
              style={{ "--cat-bg": c.color }}
            >
              <div className="category-image">
                <img loading="lazy" src={c.image} alt={c.name} />
              </div>
              <strong>{c.name}</strong>
              <small>{c.sub}</small>
              <span className="category-arrow">
                <ArrowUpRight size={17} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
function ProductSection({ filter, setFilter }) {
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (filter === "all" || p.category === filter) &&
          p.name.toLowerCase().includes(search.toLowerCase())
      ),
    [filter, search]
  );
  const shown = showAll ? filtered : filtered.slice(0, 6);
  return (
    <section className="section products-section" id="toys">
      <div className="container">
        <SectionHead
          kicker="A PEEK INSIDE OUR STORE"
          title={
            <>
              Toys to make them <span className="pink-text">smile.</span>
            </>
          }
          desc="Explore our sample collection. Call us to check current availability and prices."
        />
        <div className="product-controls">
          <div className="filter-scroll">
            <button
              className={filter === "all" ? "filter active" : "filter"}
              onClick={() => {
                setFilter("all");
                setShowAll(false);
              }}
            >
              All Toys
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                className={filter === c.id ? "filter active" : "filter"}
                onClick={() => {
                  setFilter(c.id);
                  setShowAll(false);
                }}
              >
                {c.name}
              </button>
            ))}
          </div>
          <label className="search">
            <Search size={17} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search toys..."
              aria-label="Search toys"
            />
          </label>
        </div>
        <div className="product-grid">
          {shown.map((p) => (
            <article className="product-card" key={p.id}>
              <div className="product-photo">
                <img
                  className={p.photo ? "is-photo" : undefined}
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                />
                <span className="product-tag">{p.tag}</span>
              </div>
              <div className="product-info">
                <span className="age">{p.age}</span>
                <h3>{p.name}</h3>
                <a
                  href={tel}
                  className="product-cta"
                  aria-label={`Call to enquire about ${p.name}`}
                >
                  <Phone size={15} /> Call for price <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="empty">No toys found. Try a different search.</div>
        )}
        {filtered.length > 6 && (
          <div className="center">
            <button
              className="btn btn-outline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "See More Toys"}{" "}
              <ChevronDown className={showAll ? "flip" : ""} size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-art">
          <div className="about-art-inner">
            <span className="big-emoji">🧸</span>
            <span className="art-ball">⚽</span>
            <span className="art-car">🏎️</span>
            <span className="art-block">🧩</span>
          </div>
          <div className="about-badge">
            ✨ More play.
            <br />
            More joy!
          </div>
        </div>
        <div className="about-copy">
          <span className="section-kicker">HELLO FROM KIDS JUCTION</span>
          <h2>
            Where every visit feels like{" "}
            <span className="pink-text">playtime!</span>
          </h2>
          <p>
            Welcome to Kids Juction, your neighbourhood toy shop in Chandpur,
            Bijnor! We believe the best memories start with curiosity, laughter
            and a little imagination.
          </p>
          <p>
            Whether you're picking out a birthday surprise, a learning game, or
            a toy just because, we'd love to help you discover something
            special.
          </p>
          <div className="about-points">
            <span>
              <ShieldCheck size={19} /> Friendly local store
            </span>
            <span>
              <Gift size={19} /> Gift ideas for every occasion
            </span>
            <span>
              <Heart size={19} /> Fun for different age groups
            </span>
          </div>
          <a className="btn btn-primary" href="#contact">
            Plan Your Visit <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-copy">
            <span className="section-kicker">COME SAY HELLO!</span>
            <h2>
              Your next toy adventure starts <span>right here.</span>
            </h2>
            <p>
              Visit our shop, discover something wonderful, or give us a call to
              ask about a toy.
            </p>
            <div className="contact-detail">
              <span>
                <MapPin size={22} />
              </span>
              <div>
                <strong>Find our store</strong>
                <p>{shop.fullAddress}</p>
              </div>
            </div>
            <div className="contact-detail">
              <span>
                <Phone size={22} />
              </span>
              <div>
                <strong>Give us a call </strong>
                <a href={tel}>{shop.phone}</a>
              </div>
            </div>
            <div className="contact-actions">
              <a className="btn btn-primary" href={tel}>
                <Phone size={18} /> Call Now
              </a>
              <a
                className="btn btn-whatsapp"
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
              <a
                className="btn btn-white"
                href={shop.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={18} /> Get Directions
              </a>
            </div>
          </div>
          <div className="contact-visual">
            <span className="contact-emoji">🎁</span>
            <div className="contact-message">
              Happiness is
              <br />
              just around
              <br />
              the corner! <span>✦</span>
            </div>
            <span className="contact-toy">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p>
            Making playtime brighter, one toy at a time. Come explore our world
            of fun in Chandpur!
          </p>
          <p className="footer-proprietor">
            <strong>Proprietor:</strong> {shop.proprietor}
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#toys">Our Toys</a>
          <a href="#about">About Us</a>
        </div>
        <div>
          <h4>Visit Us</h4>
          <p>{shop.fullAddress}</p>
          <a href={shop.mapUrl} target="_blank" rel="noopener noreferrer">
            Open in Google Maps ↗
          </a>
        </div>
        <div>
          <h4>Let's Talk</h4>
          <a className="footer-phone" href={tel}>
            {shop.phone}
          </a>
          <p>Questions about toys? We're just a phone call away!</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {shop.name}. All rights reserved.
        </span>
        <span>Made with 💗 for little dreamers.</span>
      </div>
    </footer>
  );
}
function SeoSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ToyStore",
    name: shop.name,
    description:
      "Local toy shop offering toys, games, dolls, building blocks, remote control cars and gifts.",
    telephone: shop.phone,
    founder: {
      "@type": "Person",
      name: shop.proprietor,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Navyug Market",
      addressLocality: "Chandpur",
      addressRegion: "Uttar Pradesh",
      postalCode: shop.postalCode,
      addressCountry: "IN",
    },
    hasMap: shop.mapUrl,
    ...(shop.websiteUrl ? { url: shop.websiteUrl } : {}),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
function App() {
  const [filter, setFilter] = useState("all");
  const choose = (id) => {
    setFilter(id);
  };
  return (
    <>
      <SeoSchema />
      <Header />
      <main>
        <Hero />
        <Perks />
        <CategorySection onChoose={choose} />
        <ProductSection filter={filter} setFilter={setFilter} />
        <About />
        <Contact />
      </main>
      <Footer />
      <a href={tel} className="floating-call" aria-label="Call Kids Juction">
        <Phone size={23} />
      </a>
      <a
        href={whatsapp}
        className="floating-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Kids Juction on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
