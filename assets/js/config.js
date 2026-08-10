/* Configuración del sitio — aquí se cambia el número de WhatsApp y se actualiza en todas las páginas */
window.SITE_CONFIG = {
  whatsapp: "51999999999"
};

document.querySelectorAll('a[href*="wa.me/"]').forEach(function (a) {
  a.href = a.href.replace(/wa\.me\/\d+/, "wa.me/" + window.SITE_CONFIG.whatsapp);
});
