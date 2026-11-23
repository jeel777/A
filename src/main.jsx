import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function Header({ page, setPage }) {
  const pageNames = { story: 'a portrait of aesha', reassurance: 'always in your corner', world: 'somewhere, together', journey: 'a birthday journey' };
  return <header className="topbar">
    <button className="brand" onClick={() => setPage('home')} aria-label="Go to birthday journey home"><span className="brand-star">✳</span><span>little things for <b>sha</b></span></button>
    <div className="journey-status"><span className="status-dot" />{pageNames[page] || 'a birthday journey'}</div>
  </header>;
}

function Home({ setPage }) {
  return <>
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span>✦</span> a one-of-one birthday adventure <span>✦</span></p>
        <h1>A little journey<br />for <em>Sha.</em></h1>
        <p className="hero-subtitle">Every great trip starts with a little curiosity.<br />Ready to see where this one takes you?</p>
        <button className="button button-primary" onClick={() => setPage('journey')}>Begin the journey <span>↗</span></button>
        <button className="story-link" onClick={() => setPage('story')}><span className="story-link-icon">✦</span><span><b>Who is Aesha, as far as I know?</b><small>A little portrait of the person you are becoming</small></span><span className="story-link-arrow">↗</span></button>
        <button className="story-link care-link" onClick={() => setPage('reassurance')}><span className="story-link-icon">♡</span><span><b>Bov chinta nai krti</b><small>A little reminder that I’m always in your corner</small></span><span className="story-link-arrow">↗</span></button>
        <button className="story-link world-link" onClick={() => setPage('world')}><span className="story-link-icon">✈</span><span><b>A thing which I want to tell</b><small>A little note about the time we’ve shared</small></span><span className="story-link-arrow">↗</span></button>
        <p className="tiny-note">best experienced with the sound on <span>♪</span></p>
      </div>
      <div className="hero-art" aria-label="An illustrated sunset with a train and an airplane">
        <div className="sun-halo" /><div className="sun" /><div className="skyline"><i /><i /><i /><i /></div><div className="horizon" /><div className="mountain mountain-a" /><div className="mountain mountain-b" />
        <div className="water"><span className="water-line w1" /><span className="water-line w2" /><span className="water-line w3" /><span className="water-line w4" /></div>
        <div className="track"><span /><span /></div><div className="train"><span className="train-window" /><span className="train-window" /><span className="train-window" /><span className="train-front">✦</span></div>
        <div className="plane">✈</div><div className="bird bird-a">⌁</div><div className="bird bird-b">⌁</div><div className="art-caption"><span>somewhere between here</span><i>and a beautiful day</i></div><span className="orbit orbit-one" /><span className="orbit orbit-two" />
      </div>
      <div className="scroll-hint"><span /> SCROLL TO WANDER</div>
    </section>
    <footer className="site-footer"><span>MADE WITH A LITTLE EXTRA HEART <b>♥</b></span><span>FOR SHA, ALWAYS <b>✦</b></span></footer>
  </>;
}

const traits = [
  { number: '01', symbol: '✧', title: 'A dreamer with a plan', text: 'She lets herself dream big, then shows up for those dreams one ordinary, determined day at a time.', note: 'her future is calling — and she is already on her way' },
  { number: '02', symbol: '↗', title: 'Her own kind of strong', text: 'She is building a life that feels like hers: independent, thoughtful, and brave enough to keep choosing her own direction.', note: 'quiet courage still moves mountains' },
  { number: '03', symbol: '⌂', title: 'A place her parents can be proud of', text: 'Behind every goal is a hope to make the people who raised her smile and say, “We knew you could.”', note: 'love is part of every ambition' },
  { number: '04', symbol: '♡', title: 'Big sister, soft heart', text: 'Somewhere between chasing her own future, she saves a little time and a lot of love for her charming little brother.', note: 'the smallest hands can hold the biggest piece of your heart' },
  { number: '05', symbol: '✦', title: 'Still becoming', text: 'She works hard, learns as she goes, and keeps moving forward. Not because she has it all figured out, but because she believes she can.', note: 'one brave step is still a beginning' },
];

function Story({ setPage }) {
  return <main className="story-page">
    <div className="story-topline"><button className="back-link" onClick={() => setPage('home')}>← back to the journey</button><span>CHAPTER 01&nbsp; · &nbsp;THE PERSON BEHIND THE DREAMS</span></div>
    <section className="story-hero">
      <div className="story-sky"><span className="story-star star-one">✦</span><span className="story-star star-two">✧</span><span className="story-star star-three">·</span><span className="story-sun" /><span className="story-hill hill-one" /><span className="story-hill hill-two" /><span className="story-trail" /><span className="story-sky-label">SHE IS GOING PLACES</span></div>
      <div className="story-title"><p className="eyebrow">AS FAR AS I KNOW…</p><h1>Who is <em>Aesha?</em></h1><p className="story-deck">A little portrait of the girl with a big heart,<br />a brave mind, and a future she’s building herself.</p><span className="handwritten">(also known as my favourite Sha) <b>↗</b></span></div>
    </section>
    <section className="portrait-section"><div className="portrait-intro"><span className="portrait-index">A PORTRAIT IN FIVE LITTLE TRUTHS</span><h2>Not just who she is.<br /><em>Who she’s becoming.</em></h2><p>Some people make the future feel a little brighter simply because they keep walking toward it. This is what I see when I look at you, Sha.</p><span className="portrait-flower">✿</span></div>
      <div className="trait-list">{traits.map((trait) => <article className="trait-card" key={trait.number}><div className="trait-number">{trait.number}</div><div className="trait-symbol">{trait.symbol}</div><div className="trait-copy"><h3>{trait.title}</h3><p>{trait.text}</p><span className="trait-note">{trait.note}</span></div></article>)}</div>
    </section>
    <section className="story-letter"><span className="letter-spark">✦</span><p className="eyebrow">A NOTE FOR THE ROAD AHEAD</p><blockquote>“May you always be proud of how far you’ve come, and excited for how far <em>you</em> can go.”</blockquote><div className="letter-sign">Keep being you, Sha <span>♥</span></div><button className="button button-primary" onClick={() => setPage('journey')}>Continue the birthday journey <span>↗</span></button><div className="letter-postmark">SENT WITH<br />ALL MY HEART</div></section>
    <footer className="site-footer"><span>AESHA, EXACTLY AS SHE IS <b>♥</b></span><span>AND ALL SHE’S YET TO BE <b>✦</b></span></footer>
  </main>;
}

function Reassurance({ setPage }) {
  const [revealed, setRevealed] = useState(false);
  const lines = [
    <>Mane khabar che Tu badhu..j kri laish</>,
    <>Tari life ma problems ave che because tane nana dreams ma satisfaction nathi</>,
    <>Bigger dreams bigger problems</>,
    <>Pan mane khabar che tu last ma badhu..j sarkhu kri laish</>,
    <>Me tara jevi hard working girl kyarey joi nathi</>,
    <>Mane bhi tane joi ne jaju kam krvani icha thay che</>,
    <>Tu sache bov hard working cho</>,
    <>I know life ma tu bov badhu achieve kris</>,
    <>Hu sathe haish to believe me</>,
  ];
  return <main className="reassurance-page">
    <div className="care-topline"><button className="back-link" onClick={() => setPage('home')}>← back to your journey</button><span>A SMALL REMINDER, FROM MY HEART</span><span className="care-heart">♡</span></div>
    <section className="care-hero">
      <div className="care-orbit care-orbit-one"/><div className="care-orbit care-orbit-two"/>
      <p className="eyebrow">FOR THE DAYS THAT FEEL A LITTLE TOO MUCH</p>
      <h1>Bov chinta<br /><em>nai krti.</em></h1>
      <p className="care-subtitle">A little something to remember, on every kind of day.</p>
      <div className="care-note"><span className="care-note-mark">“</span>{lines.map((line, index) => <p key={index}>{line}</p>)}<span className="care-note-sign">— always cheering for you, Sha <b>♡</b></span></div>
      {!revealed ? <button className="button button-primary care-reveal" onClick={() => setRevealed(true)}>One more thing… <span>♡</span></button> : <div className="big-promise" role="status" aria-live="polite"><span className="hug-emoji" aria-hidden="true">🫂</span><p>I ALWAYS BE THE LOUDEST PERSON<br />TO MAKE CLAP FOR YOU<br />ON YOUR SUCCESS.</p><span className="promise-spark">✦ &nbsp; ♡ &nbsp; ✦</span></div>}
    </section>
    <div className="care-bottom"><span>NO MATTER HOW BIG THE DREAM</span><span>YOU DON’T HAVE TO DO IT ALONE <b>♡</b></span></div>
    <footer className="site-footer"><span>HERE FOR EVERY VERSION OF YOU <b>♥</b></span><span>ALWAYS, SHA <b>✦</b></span></footer>
  </main>;
}

function Journey({ setPage }) {
  const [step, setStep] = useState(0);
  const [escape, setEscape] = useState('');
  const [moment, setMoment] = useState('');
  const [confetti, setConfetti] = useState(false);
  const [showFinalWish, setShowFinalWish] = useState(false);
  const routeWishes = {
    train: { title: 'A window seat, a thousand little memories.', wish: 'May every new stop bring you closer to the dreams you work so hard for. I hope this year gives you long train rides, beautiful views, and plenty of reasons to smile.', couplet: 'Teri muskaan se roshan har shaam rahe,\nTere khwaabon ke naam har mukaam rahe.' },
    plane: { title: 'The sky is only the beginning.', wish: 'May your birthday lift you toward everything you have been dreaming of. You deserve a year full of brave takeoffs, kind skies, and destinations that feel like you.', couplet: 'Teri udaan ko aasmaan bhi kam lage,\nTere har khwaab ko naya jahaan mile.' },
    sunset: { title: 'A golden hour made just for you.', wish: 'May life keep finding new ways to surprise you with soft sunsets, peaceful moments, and the kind of happiness that stays long after the sky turns dark.', couplet: 'Gulabi shaam ho, sitaaron ki baraat ho,\nJanamdin pe tere bas khushiyon ki saugaat ho.' },
  };
  const momentWishes = {
    sunset: { memory: 'THE SKY TURNING SHERBET PINK', line: 'May your days glow with the same warmth you bring to everyone around you.' },
    window: { memory: 'A SONG THROUGH THE WINDOW', line: 'May this year give you a soundtrack full of laughter, courage, and your favourite memories.' },
    note: { memory: 'A NOTE TO YOUR FUTURE SELF', line: 'May future-you look back at this year and feel proud of every brave little step.' },
  };
  const wish = routeWishes[escape] || routeWishes.sunset;
  const momentWish = momentWishes[moment] || momentWishes.sunset;
  const foodStops = [
    { name: 'Dosa place', note: 'crispy, golden, totally worth the trip', image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85', alt: 'Golden dosa with chutneys and sambar' },
    { name: 'Idli clouds', note: 'soft little happiness, with chutney', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=85', alt: 'Idli served with colorful chutneys' },
    { name: 'Pav bhaji stop', note: 'extra butter, extra birthday joy', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=900&q=85', alt: 'Pav bhaji served with bread and lemon' },
  ];
  const select = (value) => {
    if (step === 0) { setEscape(value); setTimeout(() => setStep(1), 450); }
    else if (step === 1) { setMoment(value); setTimeout(() => setStep(2), 450); }
  };
  return <main className="journey-page">
    <div className="journey-topline"><button className="back-link" onClick={() => setPage('home')}>← back to the start</button><span>{step < 2 ? `CHAPTER 0${step + 1} · ${step === 0 ? 'THE DEPARTURE' : 'THE WINDOW SEAT'}` : 'CHAPTER 03 · ARRIVAL'}</span><button className="mini-story-link" onClick={() => setPage('story')}>Who is Aesha? ↗</button></div>
    {step < 2 && <section className="quiz-layout"><div className="quiz-intro"><p className="eyebrow">{step === 0 ? 'FIRST, A LITTLE WARM-UP' : 'THE VIEW IS ALL YOURS'}</p><h1>{step === 0 ? <>Pick your<br />perfect <em>escape.</em></> : <>Catch a<br />little <em>feeling.</em></>}</h1><p>{step === 0 ? 'There are no wrong answers. This is your adventure, after all.' : 'Some moments are too lovely to hurry past.'}</p><div className="route-stamp">SHA AIRWAYS<br /><b>ONE HAPPY DAY</b><span>✦ ✦ ✦</span></div></div><div className="question-card"><div className="question-count">QUESTION 0{step + 1}<span> • </span>02</div><h2>{step === 0 ? 'If you could disappear for a day…' : 'What would you save from this trip?'}</h2><div className="answer-list">{(step === 0 ? [
      ['🚂','A window seat on a train','new places, old songs, no rush','train',escape],['✈️','A plane to somewhere new','clouds below, possibilities above','plane',escape],['🌅','Right here at golden hour','the best view is a familiar one','sunset',escape]
    ] : [['🌇','The sky turning sherbet pink','one last sunbeam before the stars','sunset',moment],['🪟','A song through the window','the kind that becomes a memory','window',moment],['💌','A note to my future self','remember this feeling, okay?','note',moment]]).map(([icon,title,sub,value,selected]) => <button className={`answer ${selected === value ? 'selected' : ''}`} key={value} onClick={() => select(value)}><span className="answer-icon">{icon}</span><span><b>{title}</b><small>{sub}</small></span><span className="answer-arrow">↗</span></button>)}</div><p className="selection-hint">{step === 0 ? 'Choose your departure ✦' : 'Pick the moment you’d keep ✦'}</p></div></section>}
    {step === 2 && <section className="postcard-layout"><div className="postcard-art"><div className="postcard-sun" /><div className="postcard-hills hill-back" /><div className="postcard-hills hill-front" /><div className="postcard-track" /><div className="postcard-plane">✈</div><div className="postcard-train">🚂</div><span className="postmark">A LITTLE<br />LOVE, POSTED<br />WITH CARE <b>✦</b></span><span className="postcard-caption">SOMEWHERE BEAUTIFUL</span></div><article className="postcard-copy"><p className="eyebrow">A BIRTHDAY WISH, ROUTED JUST FOR YOU</p><h1>{wish.title}</h1><p className="personal-wish">{wish.wish}</p><blockquote className="hindi-shayari">{wish.couplet}</blockquote><p className="moment-wish"><span>YOUR LITTLE MOMENT</span><b>{momentWish.memory}</b>{momentWish.line}</p><div className="postcard-signoff">Happy birthday, Sha <span>♥</span></div><button className="button button-primary" onClick={() => { setStep(3); setConfetti(true); }}>Open your little surprise <span>✦</span></button></article></section>}
    {step === 3 && <section className="finale-scene"><div className="finale-stars">✦　　　·　　✧　　　　✦　　　·　　　✧</div><div className="finale-content"><p className="eyebrow">A SMALL SECRET, JUST FOR YOU</p><div className="birthday-cake"><span className="flame">✦</span><span className="cake-top" /><span className="cake-body" /><span className="cake-plate" /></div><div className="birthday-wish-block" id="birthday-final-wish"><span className="wish-orbit wish-orbit-one"/><span className="wish-orbit wish-orbit-two"/><div className="wish-sparkles" aria-hidden="true">✦　·　✧　　✦　·　✧　✦</div><h1 className="birthday-wish-title">HAPPIEST<br />BIRTHDAY <em>SHA</em></h1><p className="birthday-wish-lines"><span>Stay Always blessed and HAPPY</span><span>HAVE BRIGHT FUTURE</span><span>i will always with you in any situations</span></p><p className="birthday-wish-heartline">its aesha day <b>♡</b><br />make it more beautiful with your smile</p><div className="wish-confetti" aria-hidden="true">✧　✦　♡　✦　✧</div></div>{!showFinalWish ? <button className="button button-primary final-wish-trigger" onClick={() => { setShowFinalWish(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>A birthday wish, just for you <span>✦</span></button> : <div className="final-message-reveal"><p>{momentWish.line}</p><blockquote>{wish.couplet}</blockquote><button className="button button-quiet" onClick={() => { setStep(0); setEscape(''); setMoment(''); setConfetti(false); setShowFinalWish(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Take the journey again <span>↺</span></button></div>}</div></section>}
    {confetti && <div className="confetti-layer">{Array.from({length: 55}, (_, i) => <i className="confetti" key={i} style={{left:`${(i * 37) % 100}%`, animationDelay:`${(i % 13) * .12}s`, '--piece':['#d0b8ff','#ffb69f','#ffe2ac','#f5d5e9'][i%4]}} />)}</div>}
    <section className="food-stops"><div className="food-heading"><p className="eyebrow">THE MOST IMPORTANT TRAVEL ITINERARY</p><h2>Three delicious<br /><em>birthday stops.</em></h2><p>Because every great adventure needs excellent food breaks.</p></div><div className="food-grid">{foodStops.map((food, index) => <article className="food-card" key={food.name}><div className="food-photo-wrap"><img src={food.image} alt={food.alt} loading="lazy"/><span className="food-number">0{index + 1}</span><span className="food-sticker">✦</span></div><h3>{food.name}</h3><p>{food.note}</p></article>)}</div><p className="food-footnote">A tiny foodie daydream for Sha <span>♡</span></p></section>
    <footer className="site-footer"><span>MADE WITH A LITTLE EXTRA HEART <b>♥</b></span><span>FOR SHA, ALWAYS <b>✦</b></span></footer>
  </main>;
}

function WorldNote({ setPage }) {
  const [isFlying, setIsFlying] = useState(false);
  return <main className="world-page">
    <div className="world-topline"><button className="back-link" onClick={() => setPage('home')}>← back to the journey</button><span>FLIGHT LOG&nbsp; · &nbsp;A NOTE FROM ME TO YOU</span><span className="world-flight-status">✦ IN THE AIR</span></div>
    <section className={`world-scene ${isFlying ? 'world-scene-flying' : ''}`}>
      <div className="world-sky-label">A NOTE FROM MY LITTLE CORNER OF THE WORLD</div>
      <div className="world-map-orbit orbit-map-one"/><div className="world-map-orbit orbit-map-two"/>
      <div className="earth-wrap"><div className="earth"><span className="land land-one"/><span className="land land-two"/><span className="land land-three"/><span className="earth-cloud cloud-one"/><span className="earth-cloud cloud-two"/><span className="earth-shine"/></div><span className="earth-label">OUR LITTLE BLUE DOT</span></div>
      <div className="flight-path"><span className="flight-path-dot"/><span className="orbit-plane">✈</span></div>
      <div className="world-card"><p className="eyebrow">A THING WHICH I WANT TO TELL</p><h1>A thing which<br />I want to <em>tell.</em></h1><div className="world-message"><p>I dont know the future</p><p>but time witch i spent with you is the best time of my college life</p><p>one of the few things which i want to carry forward</p><p>sorry fot that jagdo</p></div><div className="world-signoff">Wherever life takes us, I’m glad this part had you. <span>♡</span></div></div>
      <button className="button button-primary world-fly-button" onClick={() => setIsFlying(!isFlying)}>{isFlying ? 'Keep this little memory' : 'Take our little trip around the world'} <span>{isFlying ? '♡' : '↗'}</span></button>
      <div className="world-stars star-a">✦</div><div className="world-stars star-b">✧</div><div className="world-stars star-c">·</div>
    </section>
    <div className="world-bottom"><span>NO MAP NEEDED FOR A GOOD MEMORY</span><span>HERE’S TO MORE PLACES, MORE STORIES <b>✦</b></span></div>
    <footer className="site-footer"><span>A LITTLE NOTE FOR AESHA <b>♥</b></span><span>FROM SHA’S FAVOURITE TRAVEL BUDDY <b>✦</b></span></footer>
  </main>;
}

function App() {
  const [page, setPage] = useState('home');
  return <><div className="grain" /><div className="sky-glow glow-one" /><div className="sky-glow glow-two" /><div className="site-shell"><Header page={page} setPage={setPage} />{page === 'home' ? <Home setPage={setPage} /> : page === 'story' ? <Story setPage={setPage} /> : page === 'reassurance' ? <Reassurance setPage={setPage} /> : page === 'world' ? <WorldNote setPage={setPage} /> : <Journey setPage={setPage} />}</div></>;
}

createRoot(document.getElementById('root')).render(<App />);
