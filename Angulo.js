function calcularAngulo(angulo) {
          if (anguloAgudo >= 0 || anguloAgudo <= 90){
        console.log("O ângulo é agudo");
      }
      if (anguloReto === 90);{
        console.log("O ângulo é reto");
      }
      if (anguloObtuso >= 90 || anguloObtuso <= 180);{
        console.log("O ângulo é obtuso");
    }
      if (anguloRaso === 0 || anguloRaso === 180);{
        console.log("O ângulo é raso");
    }
      if (anguloConcavo >= 180 || anguloConcavo <= 360);{
        console.log("O ângulo é concavo");
    }
     if (anguloCompleto === 360);{
        console.log("O ângulo é completo");
    } if (angulo !== angulo) {
        console.log("Esse ângulo não existe");
    }
}
            console.log(calcularAngulo(180))