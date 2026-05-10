// ===== PROYECTOS =====
var proyectos = [
  {
    nombre: "Bot de WhatsApp",
    descripcion: "Bot automático que responde mensajes con comandos personalizados.",
    imagen: "img/proyecto1.png",
    tags: ["javascript"],
    github: "https://github.com/pedroslopez/whatsapp-web.js",
    demo: null
  },
  {
    nombre: "Web Scraper",
    descripcion: "Extrae precios de productos de tiendas online automáticamente.",
    imagen: "img/proyecto2.png",
    tags: ["python"],
    github: "https://github.com/scrapy/scrapy",
    demo: null
  },
  {
    nombre: "Portafolio Web",
    descripcion: "Página personal para mostrar proyectos de programación.",
    imagen: "img/proyecto3.png",
    tags: ["web", "javascript"],
    github: "https://github.com/topics/portfolio",
    demo: null
  },
  {
    nombre: "Bot de Telegram",
    descripcion: "Bot que responde preguntas y envía notificaciones automáticas.",
    imagen: "img/proyecto4.png",
    tags: ["python", "javascript"],
    github: "https://github.com/python-telegram-bot/python-telegram-bot",
    demo: null
  }
]

// ===== MOSTRAR PROYECTOS =====
function mostrarProyectos(filtro) {
  filtro = filtro || 'todos'
  var contenedor = document.getElementById('proyectos')

  var filtrados = filtro === 'todos'
    ? proyectos
    : proyectos.filter(function(p) { return p.tags.indexOf(filtro) !== -1 })

  contenedor.innerHTML = filtrados.map(function(p) {
    return '<div class="tarjeta">' +
      '<img src="' + p.imagen + '" alt="' + p.nombre + '" onerror="this.style.display=\'none\'">' +
      '<h3>' + p.nombre + '</h3>' +
      '<p>' + p.descripcion + '</p>' +
      '<div>' + p.tags.map(function(t) { return '<span class="tag">' + t + '</span>' }).join('') + '</div>' +
      '<div class="enlaces">' +
      '<a href="' + p.github + '" target="_blank">GitHub</a>' +
      (p.demo ? '<a href="' + p.demo + '" target="_blank">Ver demo</a>' : '') +
      '</div>' +
      '</div>'
  }).join('')
}

// ===== FILTROS PROYECTOS =====
document.querySelectorAll('.filtro').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filtro').forEach(function(b) {
      b.classList.remove('activo')
    })
    btn.classList.add('activo')
    mostrarProyectos(btn.getAttribute('data-filtro'))
  })
})

// ===== PESTAÑAS =====
document.querySelectorAll('.pestana').forEach(function(btn) {
  btn.addEventListener('click', function() {

    // Quitar activa de todas las pestañas
    document.querySelectorAll('.pestana').forEach(function(b) {
      b.classList.remove('activa')
    })

    // Ocultar todos los contenidos
    document.querySelectorAll('.tab-contenido').forEach(function(tab) {
      tab.classList.add('oculto')
    })

    // Activar pestaña clickeada
    btn.classList.add('activa')

    // Mostrar contenido correspondiente
    var tabId = btn.getAttribute('data-tab')
    var tabContenido = document.getElementById(tabId)

    if (tabContenido) {
      tabContenido.classList.remove('oculto')
    }

  })
})

// ===== CARGAR AL INICIO =====
mostrarProyectos()