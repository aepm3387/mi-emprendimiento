// Manejo del cuestionario
const cuestionarioForm = document.getElementById("cuestionario-form");
const resultadoDiv = document.getElementById("resultado");
const premioImagenDiv = document.getElementById("premio-imagen");

if (cuestionarioForm) {
  cuestionarioForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Contar respuestas correctas
    let correctas = 0;
    const preguntas = ["p1", "p2", "p3", "p4", "p5", "p6"];

    preguntas.forEach((pregunta) => {
      const respuesta = cuestionarioForm.querySelector(
        `[name="${pregunta}"]`
      ).value;
      if (respuesta === "correcta") {
        correctas++;
      }
    });

    // Mostrar resultado según las respuestas correctas
    let imagenPremio = "";
    let mensaje = "";

    if (correctas === 6) {
      // Premio por acertar todas
      imagenPremio =
        "https://i.gifer.com/Khdq.gif";
      mensaje =
        "<h3>¡Felicitaciones! </h3><p>Acertaste todas las preguntas. ¡Eres un experto en perfumeria!</p>";
    } else if (correctas >= 3 && correctas <= 5) {
      // Segundo premio por acertar entre 3 y 5
      imagenPremio =
        "https://i.gifer.com/origin/df/df642e16f94a4790ed1f286137554173_w200.gif";
      mensaje =
        "<h3>¡Buen trabajo! </h3><p>Acertaste " +
        correctas +
        " de 6 preguntas. Sigue aprendiendo sobre perfumeria.</p>";
    } else if (correctas < 3) {
      // Imagen de perdedor por menos de 3
      imagenPremio =
        "https://media.tenor.com/Ff2re2ArPSAAAAAM/perdimos-derrota.gif";
      mensaje =
        "<h3>¡Sigue intentando! </h3><p>Acertaste " +
        correctas +
        " de 6 preguntas. No te rindas, sigue aprendiendo.</p>";
    }

    // Mostrar el resultado
    premioImagenDiv.innerHTML = `
        ${mensaje}
        <img src="${imagenPremio}" alt="Premio">
    `;
    resultadoDiv.style.display = "block";

    // Scroll suave al resultado
    resultadoDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

