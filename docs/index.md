<p style="text-align:center; margin:0 0 1rem 0;"><img src="assets/logo-wolfland.png" alt="Wolfland Network" width="480" style="display:inline-block; max-width:100%; height:auto;"></p>

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
.md-typeset .wf-ip-card { --wf-bg: linear-gradient(145deg,rgba(255,83,0,.07),rgba(34,28,25,.72)); --wf-sh: 0 8px 24px rgba(0,0,0,.25); --wf-div: rgba(241,231,224,.09); --wf-mut: #d9cbc1; --wf-jf: #ff8c52; --wf-bf: #7dd3fc; --wf-bb: linear-gradient(180deg,rgba(255,83,0,.22),rgba(255,83,0,.12)); --wf-bfg: #ffb085; --wf-ob: rgba(34,197,94,.22); --wf-obr: #4ade80; --wf-of: #86efac; margin: 1.4rem 0 1.6rem; border-radius: 12px; border: 1px solid rgba(255,83,0,.28); background: var(--wf-bg); box-shadow: var(--wf-sh); overflow: hidden; }
[data-md-color-scheme="default"] .md-typeset .wf-ip-card { --wf-bg: #faf6f3; --wf-sh: 0 6px 20px rgba(58,48,42,.08); --wf-div: rgba(58,48,42,.09); --wf-mut: #5c4d44; --wf-jf: #cc4200; --wf-bf: #0369a1; --wf-bb: linear-gradient(180deg,rgba(255,83,0,.15),rgba(255,83,0,.08)); --wf-bfg: #cc4200; --wf-ob: rgba(46,125,50,.16); --wf-obr: #2e7d32; --wf-of: #1b5e20; }
.md-typeset .wf-ip-header { display: flex; align-items: center; gap: .55rem; padding: .72rem 1.1rem; background: rgba(255,83,0,.11); border-bottom: 1px solid rgba(255,83,0,.18); font-weight: 700; font-size: .92rem; }
.md-typeset .wf-ip-dot { width: 9px; height: 9px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 8px rgba(34,197,94,.75); }
.md-typeset .wf-ip-badge { margin-left: auto; font-size: .72rem; font-weight: 600; padding: .16rem .6rem; border-radius: 999px; color: var(--wf-mut); border: 1px solid var(--wf-div); }
.md-typeset .wf-ip-row { display: flex; align-items: center; justify-content: space-between; gap: .85rem; padding: .9rem 1.1rem; flex-wrap: wrap; }
.md-typeset .wf-ip-row + .wf-ip-row { border-top: 1px solid var(--wf-div); }
.md-typeset .wf-ip-info { display: flex; align-items: center; gap: .55rem; flex-wrap: wrap; }
.md-typeset .wf-edition { min-width: 76px; text-align: center; font-size: .72rem; font-weight: 700; text-transform: uppercase; padding: .2rem .55rem; border-radius: 6px; }
.md-typeset .wf-edition-java { background: rgba(255,83,0,.14); color: var(--wf-jf); border: 1px solid rgba(255,83,0,.32); }
.md-typeset .wf-edition-bedrock { background: rgba(56,189,248,.14); color: var(--wf-bf); border: 1px solid rgba(56,189,248,.3); }
.md-typeset .wf-ip-code { font-family: var(--md-code-font-family, monospace); font-size: .88rem; padding: .24rem .6rem; border-radius: 6px; background: var(--md-code-bg-color); border: 1px solid var(--wf-div); }
.md-typeset .wf-port-wrap { font-size: .84rem; display: inline-flex; align-items: center; gap: .35rem; }
.md-typeset .wf-copy-btn { appearance: none; display: inline-flex; align-items: center; justify-content: center; gap: .45rem; padding: .5rem 1.05rem; border-radius: 999px; border: 1px solid rgba(255,83,0,.5); background: var(--wf-bb); color: var(--wf-bfg); font: 600 .8rem/1.2 inherit; white-space: nowrap; cursor: pointer; transition: transform .16s ease, box-shadow .2s ease, background .2s ease, color .2s ease; }
.md-typeset .wf-copy-btn:hover { background: linear-gradient(180deg,#ff6a1f,#FF5300); border-color: #ff7a33; color: #fff; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(255,83,0,.4); }
.md-typeset .wf-copy-btn:active { transform: scale(.97); }
.md-typeset .wf-copy-btn.is-copied { background: var(--wf-ob); border-color: var(--wf-obr); color: var(--wf-of); transform: none; box-shadow: none; }
.md-typeset .wf-ip-card ~ p:has(> .md-button), .md-typeset .cta-buttons.center { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: .75rem; margin: 1.4rem 0; text-align: center; }
.md-typeset .wf-ip-card ~ p:has(> .md-button) .md-button { margin: 0; }
@media (max-width: 560px) { .md-typeset .wf-copy-btn { width: 100%; } }
</style>

<script>
window.copyServerIp = (btn, text) => {
  const label = btn.querySelector('.wf-copy-text');
  btn.dataset.orig ??= label.textContent;
  const done = () => {
    clearTimeout(btn._t);
    btn.classList.add('is-copied');
    label.textContent = '¡Copiado!';
    btn._t = setTimeout(() => { btn.classList.remove('is-copied'); label.textContent = btn.dataset.orig; }, 1800);
  };
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).then(done);
  const ta = Object.assign(document.createElement('textarea'), { value: text });
  document.body.append(ta); ta.select(); document.execCommand('copy'); ta.remove(); done();
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
