const http = require('http')
const fs = require('fs')

const mime = {
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'image/jpg',
  'ico': 'image/x-icon',
  'mp3': 'audio/mpeg3',
  'mp4': 'video/mp4'
}

const servidor = http.createServer((pedido, respuesta) => {
  const url = new URL('http://localhost:8088' + pedido.url)
  let camino = 'public' + url.pathname
  if (camino == 'public/')
    camino = 'public/index.html'
  encaminar(pedido, respuesta, camino)
})

servidor.listen(8888)


function encaminar(pedido, respuesta, camino) {
  console.log(camino)
  switch (camino) {
    case 'public/recuperardatos': {
      recuperar(pedido, respuesta)
      break
    }
    default: {
      fs.stat(camino, error => {
        if (!error) {
          fs.readFile(camino, (error, contenido) => {
            if (error) {
              respuesta.writeHead(500, { 'Content-Type': 'text/plain' })
              respuesta.write('Error interno')
              respuesta.end()
            } else {
              const vec = camino.split('.')
              const extension = vec[vec.length - 1]
              const mimearchivo = mime[extension]
              respuesta.writeHead(200, { 'Content-Type': mimearchivo })
              respuesta.write(contenido)
              respuesta.end()
            }
          })
        } else {
          respuesta.writeHead(404, { 'Content-Type': 'text/html' })
          respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>')
          respuesta.end()
        }
      })
    }
  }
}

function NumerosAleatorios(min, max) {
    return Math.round(Math.random() * (max - min) + min);
 } 


function recuperar(pedido, respuesta) {
  let info = ''
  pedido.on('data', datosparciales => {
    info += datosparciales
  })
  pedido.on('end', () => {
    const formulario = new URLSearchParams(info)
    console.log(formulario)
    respuesta.writeHead(200, { 'Content-Type': 'text/html' })
    let pagina =
      `<!doctype html><html><head></head><body>
      <center>
     Eleccion del jugador:${formulario.get('elejug')}<br>`
     let jug = formulario.get('elejug')

      let alnum = NumerosAleatorios(1, 3);

     if(jug == 'r'){
         if(alnum == '1'){
          pagina +=`El servidor eligio Piedra <br>`;
            pagina +=`Empataste <br>`;
         }else if(alnum == '2'){
          pagina +=`El servidor eligio Papel <br>`;
            pagina +=`Perdiste <br>`;
         }else if(alnum == '3'){
          pagina +=`El servidor eligio Tijeras <br>`;
            pagina +=`Ganaste <br>`;
         }
     }else if(jug == 'p'){
        if(alnum == '1'){
          pagina +=`El servidor eligio Piedra <br>`;
            pagina +=`Ganaste <br>`;
        }else if(alnum == '2'){
          pagina +=`El servidor eligio Papel <br>`;
            pagina +=`Empataste <br>`;
        }else if(alnum == '3'){
          pagina +=`El servidor eligio Tijeras <br>`;  
          pagina +=`Perdiste <br>`;
        }
     }else if(jug == 's'){
        if(alnum == '1'){
          pagina +=`El servidor eligio Piedra <br>`;
            pagina +=`Perdiste <br>`;
        }else if(alnum == '2'){
          pagina +=`El servidor eligio Papel <br>`;
            pagina +=`Ganaste <br>`;
        }else if(alnum == '3'){
          pagina +=`El servidor eligio Tijeras <br>`;
            pagina +=`Empataste <br>`;
        }
     }else{
       pagina += `Elegi una opcion valida-<br>`;
     }

    pagina +=`
     </center>
     <a href="index.html">Retornar</a>
     </body></html>`
    respuesta.end(pagina)
  })
}

console.log('Servidor web iniciado')