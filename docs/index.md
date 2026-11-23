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

<style>
.wf-ip-card {
  margin: 1.4rem 0 1.6rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 109, 0, 0.28);
  background: linear-gradient(145deg, rgba(255, 109, 0, 0.08), rgba(255, 255, 255, 0.02));
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}
.wf-ip-header {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.75rem 1.1rem;
  background: rgba(255, 109, 0, 0.12);
  border-bottom: 1px solid rgba(255, 109, 0, 0.18);
  font-weight: 700;
  font-size: 0.92rem;
  letter-spacing: 0.01em;
}
.wf-ip-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.8);
  flex-shrink: 0;
}
.wf-ip-badge {
  margin-left: auto;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.18rem 0.6rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  opacity: 0.9;
}
.wf-ip-body {
  display: flex;
  flex-direction: column;
}
.wf-ip-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  padding: 0.9rem 1.1rem;
  flex-wrap: wrap;
}
.wf-ip-row + .wf-ip-row {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}
.wf-ip-info {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.wf-edition {
  display: inline-block;
  min-width: 68px;
  text-align: center;
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.22rem 0.55rem;
  border-radius: 6px;
}
.wf-edition-java {
  background: rgba(255, 109, 0, 0.16);
  color: #ff9e44;
  border: 1px solid rgba(255, 109, 0, 0.32);
}
.wf-edition-bedrock {
  background: rgba(56, 189, 248, 0.14);
  color: #7dd3fc;
  border: 1px solid rgba(56, 189, 248, 0.3);
}
.wf-ip-code {
  font-size: 0.9rem !important;
  padding: 0.24rem 0.58rem !important;
  border-radius: 6px !important;
  background: rgba(0, 0, 0, 0.32) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: #f5f5f5 !important;
}
.wf-port-wrap {
  font-size: 0.85rem;
  opacity: 0.9;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}
.wf-copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.42rem;
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 109, 0, 0.55);
  background: rgba(255, 109, 0, 0.14);
  color: #ff9e44;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
}
.wf-copy-btn:hover {
  background: #ff6d00;
  border-color: #ff6d00;
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 109, 0, 0.3);
}
.wf-copy-btn.is-copied {
  background: rgba(34, 197, 94, 0.2);
  border-color: #22c55e;
  color: #4ade80;
  transform: none;
  box-shadow: none;
}
@media (max-width: 560px) {
  .wf-copy-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>

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
