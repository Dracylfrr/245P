import m5Front from "./m5.jpg";


function PerformanceView() {
  return (
    <article>
      <h2>Performance & Engineering</h2>

      <img 
        src={m5Front}
        alt="BMW M5 Front View" 
        style={{ width: "50%", borderRadius: "8px", marginBottom: "20px" }}
      />

      <p>
        Available with inline-6, V8, and diesel engines, the E60 balanced comfort and
        speed in true German fashion.
      </p>
      <p>
        The M5 version featured a 5.0L V10 producing 500 hp — one of BMW’s most iconic
        powerplants ever built.
      </p>

      <h2>Legacy & Impact</h2>
      <p>
        The E60 has gained a strong enthusiast following for its blend of luxury, power,
        and technology.
      </p>
      <p>
        Today it stands as a modern classic, bridging analog driving feel and digital
        innovation in the BMW lineup.
      </p>
    </article>
  );
}

export default PerformanceView;
