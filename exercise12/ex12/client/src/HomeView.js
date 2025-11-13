import e60Front from "./bmw5.jpg";

function HomeView() {
  return (
    <article>
      <h2>Design & Innovation</h2>

       <img 
        src={e60Front}
        alt="BMW E60 Front View" 
        style={{ width: "50%", borderRadius: "8px", marginBottom: "20px" }}
      />


      <p>
        The E60 was a bold step forward, breaking from traditional BMW styling with
        Chris Bangle’s modern design direction.
      </p>
      <p>
        It introduced iDrive technology, adaptive headlights, and advanced chassis
        electronics that defined BMW’s future models.
      </p>
    </article>
  );
}

export default HomeView;
