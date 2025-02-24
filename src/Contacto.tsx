
const Contacto = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold">Contacto</h2>
      <p>
        Email:{" "}
        <a href="mailto:l.velasquez1308@gmail.com" className="text-green-400">
          l.velasquez1308@gmail.com
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/luisv1308"
          target="_blank"
          className="text-green-400"
        >
          github.com/luisv1308
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/luis-velasquez2901/"
          className="text-green-400"
        >
          linkedin.com/in/luis-velasquez2901
        </a>
      </p>
    </section>
  );
};

export default Contacto;
