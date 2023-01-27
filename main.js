// aula 104
//para ajustar a webcam
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

// aula 104
// para obter a imagem      
function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

// aula 104
// mostrar a versão no console
  console.log('ml5 version:', ml5.version);

// aula 104
// importar o modelo
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

// aula 105
// informa que foi carregado
  function modelLoaded() {
    console.log('Modelo Carregado!');
  }

//aula 105
  function check()
  {
    img = document.getElementById('captured_image'); // guarda a imagem
    classifier.classify(img, gotResult); // pede para verificar na função gotResult
  }

//aula 105
function gotResult(error, results) {//pode dar erro ou ter o resultado, por isso colocamos as duas opções nos parenteses
  if (error) {  //se der erro
    console.error(error); //avisa no console
  } else {
    console.log(results); //se tiver resultado
    document.getElementById("resultObjectName").innerHTML = results[0].label; //pega e mostra o nome do objeto
    document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3); //pega e mostra a porcentagem
  }
}
