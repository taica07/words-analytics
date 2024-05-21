const Stats = ({ stats }) => {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="words" />
      <Stat number={stats.numberOfCharachters} label="characters" />
      <Stat number={stats.facebookCharacters} label="facebook" />
      <Stat number={stats.instagramCharacters} label="instagram" />
    </section>
  );
};

export default Stats;

const Stat = ({ number, label }) => {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? 'stat__number--limit' : ''}`}
      >
        {number}
      </span>
      <h2 className="second-heading"> {label}</h2>
    </section>
  );
};
