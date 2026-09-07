import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ChevronDown,
  CircleUserRound,
  Instagram,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react';

const lifestyleImage = 'https://images.pexels.com/photos/6728398/pexels-photo-6728398.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800';
const ritualImage = 'https://images.pexels.com/photos/6728394/pexels-photo-6728394.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800';

const faqs = [
  ['How long does KHLEEN PITTS protection last?', 'Our signature formula is designed to provide up to 72 hours of odour protection. As with any personal care routine, your ideal application rhythm may vary.'],
  ['Does KHLEEN PITTS contain bicarbonate of soda?', 'No. Our formula is thoughtfully made without bicarbonate of soda, using Magnesium Hydroxide as the active odour-fighting ingredient.'],
  ['What is the active ingredient?', 'Magnesium Hydroxide Powder helps neutralise odour while keeping the formula gentle and considered.'],
  ['Is KHLEEN PITTS vegan and cruelty-free?', 'Yes. Every KHLEEN PITTS formula is 100% vegan and cruelty-free.'],
  ['What should I expect when switching to natural deodorant?', 'Your skin may take a little time to find its rhythm. Start with clean, dry skin and give yourself a little patience as you discover your best routine.'],
  ['Which format should I choose?', 'The Stick is easy and familiar, Cream feels more tactile and skincare-led, while Spray is lightweight and quick to apply.'],
];

const ingredients = [
  ['01', 'Magnesium Hydroxide', 'The active ingredient providing odour protection without bicarbonate of soda.'],
  ['02', 'Unrefined Shea Butter', 'A rich, nourishing botanical butter used to support beautifully cared-for skin.'],
  ['03', 'Cocoa Butter', 'A naturally rich ingredient that helps condition and nourish the skin.'],
  ['04', 'Kaolin', 'A naturally derived mineral included in our skin-focused formula.'],
  ['05', 'Vitamin E', 'Included as part of a considered, skin-loving formulation.'],
  ['06', 'Essential Oil Blend', 'A naturally fresh sensory experience to begin and end your day.'],
];

function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className={`brand-mark ${compact ? 'brand-mark--compact' : ''}`} aria-label="Khleeen Pitts home">
      <span className="brand-mark__petal">✦</span>
      <span className="brand-mark__name">KHLEEN PITTS</span>
      {!compact && <span className="brand-mark__tagline">NATURAL BEAUTY, REFINED</span>}
    </a>
  );
}

function Product({ type = 'stick', small = false }: { type?: 'stick' | 'cream' | 'spray'; small?: boolean }) {
  if (type === 'cream') {
    return <div className={`product product--cream ${small ? 'product--small' : ''}`}><div className="cream-lid" /><div className="cream-jar"><span>KHLEEN<br />PITTS</span><small>BOTANICAL DEODORANT</small></div></div>;
  }
  if (type === 'spray') {
    return <div className={`product product--spray ${small ? 'product--small' : ''}`}><div className="spray-cap" /><div className="spray-bottle"><span>KHLEEN<br />PITTS</span><small>BOTANICAL<br />MIST</small></div></div>;
  }
  return <div className={`product product--stick ${small ? 'product--small' : ''}`}><div className="stick-cap" /><div className="stick-body"><span>KHLEEN<br />PITTS</span><small>BOTANICAL<br />DEODORANT</small></div></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedFormat, setSelectedFormat] = useState<'stick' | 'cream' | 'spray'>('stick');
  const [subscribed, setSubscribed] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const addToBag = () => setCartOpen(true);

  return (
    <div id="top" className="site-shell">
      <div className="announcement">72-HOUR ODOUR PROTECTION <span>·</span> VEGAN <span>·</span> CRUELTY-FREE <span>·</span> BICARBONATE-FREE</div>
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="icon-button mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={21} /></button>
          <Mark />
          <div className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
            <div className="mobile-nav-head"><Mark compact /><button className="icon-button" onClick={closeMenu} aria-label="Close menu"><X size={21} /></button></div>
            <a href="#shop" onClick={closeMenu}>Shop</a><a href="#difference" onClick={closeMenu}>Why Khleen Pitts</a><a href="#ingredients" onClick={closeMenu}>Ingredients</a><a href="#story" onClick={closeMenu}>Our Story</a><a href="#faq" onClick={closeMenu}>FAQs</a>
          </div>
          <div className="nav-actions"><button className="icon-button" aria-label="Search"><Search size={19} /></button><button className="icon-button account" aria-label="Account"><CircleUserRound size={19} /></button><button className="bag-button" onClick={() => setCartOpen(true)}><ShoppingBag size={19} /><span>Bag (0)</span></button></div>
        </nav>
      </header>

      <main>
        <section className="hero section-padding">
          <div className="hero-wash hero-wash--one" /><div className="hero-wash hero-wash--two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal"><p className="eyebrow"><span className="eyebrow-line" /> Natural deodorant · skin-nourishing care</p><h1>Freshness<br /><em>that cares</em><br />for your skin.</h1><p className="hero-intro">Advanced 72-hour odour protection without bicarbonate of soda, thoughtfully formulated with nourishing plant-based ingredients.</p><div className="hero-actions"><button className="button button--plum" onClick={addToBag}>Shop Khleen Pitts <ArrowRight size={16} /></button><a className="text-link" href="#ingredients">Discover the formula <ArrowDownRight size={16} /></a></div></div>
            <div className="hero-product reveal reveal--delay"><div className="orbit orbit--outer" /><div className="orbit orbit--inner" /><div className="hero-petal hero-petal--left" /><div className="hero-petal hero-petal--right" /><div className="hero-product-stage"><Product /><span className="product-shadow" /></div><div className="protection-badge"><strong>72</strong><span>HR<br />PROTECTION</span></div><div className="gold-spark">✦</div></div>
          </div>
          <div className="hero-scroll"><span>Scroll to explore</span><ArrowDownRight size={17} /></div>
        </section>

        <section id="difference" className="promise section-padding">
          <div className="container"><div className="promise-heading"><p className="eyebrow">The Khleen Pitts difference</p><h2>Powerful protection.<br /><em>Nourishing ingredients.</em><br />A more conscious routine.</h2></div><div className="promise-grid"><div className="promise-item"><span className="line-icon">◌</span><h3>Odour protection</h3><p>Designed to eliminate unwanted odours and provide lasting freshness.</p></div><div className="promise-item"><span className="line-icon">✧</span><h3>Skin nourishment</h3><p>Formulated with nourishing Shea Butter and Cocoa Butter.</p></div><div className="promise-item"><span className="line-icon">⌁</span><h3>Conscious care</h3><p>100% vegan and cruelty-free, with care in every detail.</p></div></div></div>
        </section>

        <section id="shop" className="featured section-padding"><div className="container featured-grid"><div className="featured-visual"><div className="gold-ring" /><div className="ingredient-dot ingredient-dot--one" /><div className="ingredient-dot ingredient-dot--two" /><Product /><span className="vertical-label">FORMULATED WITH INTENTION</span></div><div className="featured-copy"><p className="eyebrow">Natural protection</p><h2>72-hour confidence,<br /><em>without the harsh stuff.</em></h2><p>KHLEEN PITTS is created for people who take their personal care seriously — combining effective odour protection with skin-nourishing ingredients.</p><ul className="feature-list"><li>72-hour odour protection</li><li>No bicarbonate of soda</li><li>Magnesium Hydroxide Powder</li><li>100% vegan & cruelty-free</li><li>Skin-nourishing formula</li></ul><button className="button button--outline" onClick={addToBag}>Shop now <ArrowRight size={16} /></button></div></div></section>

        <section id="ingredients" className="ingredients section-padding"><div className="lavender-wash" /><div className="container"><div className="section-intro"><p className="eyebrow">The thoughtful formula</p><h2>Beauty from the<br /><em>ingredients in.</em></h2><p>Thoughtfully selected ingredients work together to provide freshness while caring for the skin.</p></div><div className="ingredient-grid">{ingredients.map(([number, title, copy]) => <article className="ingredient-card" key={title}><span className="ingredient-number">{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></div></section>

        <section id="story" className="story section-padding"><div className="container story-grid"><div className="story-image"><img src={lifestyleImage} alt="Woman enjoying a quiet self-care ritual" /><div className="image-caption">A better daily ritual <span>✦</span></div></div><div className="story-copy"><p className="eyebrow">A better daily ritual</p><h2>Natural doesn't have to mean <em>compromising</em> on performance.</h2><p>KHLEEN PITTS was created for active, health-conscious customers who want natural, vegan deodorant while still expecting effective odour protection.</p><div className="story-points"><div><strong>Effective</strong><span>Designed for lasting freshness.</span></div><div><strong>Nourishing</strong><span>Created with skin-care-focused ingredients.</span></div><div><strong>Conscious</strong><span>Vegan and cruelty-free.</span></div></div></div></div></section>

        <section className="guide section-padding"><div className="container guide-inner"><div className="guide-intro"><p className="eyebrow">The natural deodorant transition guide</p><h2>Making the switch?<br /><em>We've got you.</em></h2><p>What to expect when moving from conventional antiperspirant to natural deodorant.</p><a href="#faq" className="text-link">Read the transition guide <ArrowRight size={16} /></a></div><div className="steps"><div className="step"><span>01</span><div><h3>Make the switch</h3><p>Introduce natural deodorant into your daily routine.</p></div></div><div className="step"><span>02</span><div><h3>Give your skin time</h3><p>Your underarms may experience an adjustment period when changing from conventional antiperspirant.</p></div></div><div className="step"><span>03</span><div><h3>Find your rhythm</h3><p>Learn the application routine that works best for you.</p></div></div></div></div></section>

        <section className="formats section-padding"><div className="container"><div className="formats-heading"><div><p className="eyebrow">Find your format</p><h2>Which format <em>is yours?</em></h2></div><p>Everyday freshness, your way. Discover the texture and ritual that fits you best.</p></div><div className="format-cards">{(['stick', 'cream', 'spray'] as const).map((format) => <button key={format} className={`format-card ${selectedFormat === format ? 'format-card--active' : ''}`} onClick={() => setSelectedFormat(format)}><div className="format-product"><Product type={format} small /></div><span className="format-index">0{(['stick', 'cream', 'spray'] as const).indexOf(format) + 1}</span><h3>{format}</h3><p>{format === 'stick' ? 'Clean, convenient and easy for everyday application.' : format === 'cream' ? 'A more tactile application with a skin-care feel.' : 'A lightweight application experience.'}</p><span className="format-link">Explore {selectedFormat === format ? 'selected' : ''} <ArrowRight size={15} /></span></button>)}</div><div className="comparison"><div /><strong>Stick</strong><strong>Cream</strong><strong>Spray</strong><span>Application</span><span>—</span><span>—</span><span>—</span><span>Finish</span><span>—</span><span>—</span><span>—</span></div></div></section>

        <section className="trial section-padding"><div className="trial-dots" /><div className="container trial-inner"><div className="trial-copy"><p className="eyebrow">Start with a little discovery</p><h2>Discover your<br /><em>favourites.</em></h2><p>Not sure where to start? Try smaller sizes and explore different options before committing to full-size products.</p><button className="button button--plum" onClick={addToBag}>Shop trial kits <ArrowRight size={16} /></button></div><div className="trial-products"><div className="trial-arch" /><div className="trial-product trial-product--one"><Product type="cream" small /></div><div className="trial-product trial-product--two"><Product type="stick" small /></div><div className="trial-product trial-product--three"><Product type="spray" small /></div><Sparkles className="trial-spark" size={24} /></div></div></section>

        <section id="faq" className="faq section-padding"><div className="container faq-grid"><div><p className="eyebrow">Good to know</p><h2>Questions,<br /><em>answered.</em></h2><p className="faq-note">A little clarity for your daily ritual.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'faq-item--open' : ''}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span>{openFaq === index ? <Minus size={17} /> : <Plus size={17} />}</button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></div></section>

        <section className="final-cta section-padding"><div className="final-wash" /><div className="container final-inner"><span className="final-butterfly">♢</span><p className="eyebrow">The ritual, reimagined</p><h2>Your daily freshness<br /><em>deserves better.</em></h2><p>Natural protection. Nourishing care. Beautifully simple.</p><button className="button button--plum" onClick={addToBag}>Shop Khleen Pitts <ArrowRight size={16} /></button></div></section>
      </main>

      <footer className="footer"><div className="container"><div className="footer-top"><div><Mark /><p className="footer-statement">Natural protection.<br />Nourishing care.</p></div><div className="footer-links"><div><h4>Shop</h4><a href="#shop">All products</a><a href="#shop">Trial kits</a><a href="#shop">Stick</a><a href="#shop">Cream</a><a href="#shop">Spray</a></div><div><h4>Discover</h4><a href="#difference">Why Khleen Pitts</a><a href="#ingredients">Ingredients</a><a href="#story">Transition guide</a><a href="#faq">FAQs</a></div><div><h4>Help</h4><a href="#footer">Contact</a><a href="#footer">Shipping</a><a href="#footer">Returns</a><a href="#footer">Privacy</a></div></div><div className="newsletter"><h4>A little freshness<br />in your inbox</h4>{subscribed ? <p className="subscribed">You're on the list. Welcome in.</p> : <form onSubmit={(event) => { event.preventDefault(); setSubscribed(true); }}><input type="email" required placeholder="Your email address" aria-label="Your email address" /><button aria-label="Subscribe"><ArrowRight size={17} /></button></form>}</div></div><div className="footer-bottom"><span>© KHLEEN PITTS 2026</span><span>Made for your everyday</span><div className="socials"><a href="#footer" aria-label="Instagram"><Instagram size={16} /></a><a href="#footer" aria-label="Search"><Search size={16} /></a></div></div></div></footer>

      {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={(event) => event.stopPropagation()}><div className="cart-head"><span>Your bag</span><button className="icon-button" onClick={() => setCartOpen(false)} aria-label="Close bag"><X size={20} /></button></div><div className="cart-empty"><div className="cart-icon"><ShoppingBag size={24} /></div><h3>Your bag is waiting</h3><p>Discover natural protection, beautifully refined.</p><button className="button button--plum" onClick={() => { setCartOpen(false); document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' }); }}>Explore the collection <ArrowRight size={16} /></button></div></aside></div>}
    </div>
  );
}

export default App;
