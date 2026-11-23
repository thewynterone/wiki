![Wolfland Network](assets/logo-wolfland.png){ .center width="420" }

# Bienvenido

Bienvenido a la wiki oficial de **Wolfland Network**, un servidor de Minecraft **Survival Custom**. Aquí encontrarás cómo entrar, las reglas, los comandos, los rangos y todas las novedades de la comunidad.

<div class="wf-ip-card">
  <div class="wf-ip-header">
    <span class="wf-ip-dot"></span>
    <span>IP del servidor</span>
    <span class="wf-ip-badge">Java &amp; Bedrock</span>
  </div>
  <div class="wf-ip-body">
    <div class="wf-ip-row">
      <div class="wf-ip-info">
        <span class="wf-edition wf-edition-java">Java</span>
        <code class="wf-ip-code">play.wolfland.pro</code>
      </div>
      <button type="button" class="wf-copy-btn" onclick="copyServerIp(this, 'play.wolfland.pro')">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        <span class="wf-copy-text">Copiar IP</span>
      </button>
    </div>
    <div class="wf-ip-row">
      <div class="wf-ip-info">
        <span class="wf-edition wf-edition-bedrock">Bedrock</span>
        <code class="wf-ip-code">play.wolfland.pro</code>
        <span class="wf-port-wrap">Puerto: <code class="wf-ip-code">19132</code></span>
      </div>
      <button type="button" class="wf-copy-btn" onclick="copyServerIp(this, 'play.wolfland.pro:19132')">
        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        <span class="wf-copy-text">Copiar IP + Puerto</span>
      </button>
    </div>
  </div>
</div>

<script>
window.copyServerIp = function(btn, text) {
  const label = btn.querySelector('.wf-copy-text');
  if (!btn.dataset.orig) btn.dataset.orig = label.textContent;
  const finish = () => {
    clearTimeout(btn._timer);
    btn.classList.add('is-copied');
    label.textContent = '¡Copiado!';
    btn._timer = setTimeout(() => {
      btn.classList.remove('is-copied');
      label.textContent = btn.dataset.orig;
    }, 1800);
  };
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(finish);
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    finish();
  }
};
</script>

[:fontawesome-brands-discord: Unirse al Discord](https://discord.com/invite/jCmngqZRFV){ .md-button .md-button--primary }
[:fontawesome-solid-store: Ir a la Tienda](https://wolfland.tebex.store/){ .md-button }
{: .cta-buttons .center }

## Empieza por aquí

- [Cómo unirse](unirse.md): IP, puertos y pasos para Java y Bedrock.
- [Reglas](reglas.md): las normas detalladas del servidor.
- [Comandos](comandos.md): todos los comandos disponibles.
- [Rangos](rangos.md): rangos de jugador y staff, con sus beneficios.
- [Creadores de contenido](rangos-media.md): requisitos para obtener un rango media.
- [Noticias](noticias.md): últimas actualizaciones.
- [Discord](https://discord.com/invite/jCmngqZRFV): únete a la comunidad, abre tickets y habla con el staff.
- [Tienda](https://wolfland.tebex.store/): tienda oficial del servidor.

## Sobre el servidor

Wolfland Network es un servidor **Survival Custom**: la experiencia clásica de supervivencia, con contenido y mecánicas propias.

*Aquí puedes añadir una descripción más completa: qué cambia respecto al survival normal, qué mecánicas propias hay y cómo nació la comunidad.*
