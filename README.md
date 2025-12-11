<h2>Hero Component Documentation</h2>

<h3>Описание</h3>

<p>Компонент <code>Hero</code> — это анимированный блок с фоновым изображением и возможностью отображения дополнительных изображений с анимацией. 
  Использует GSAP для анимации переходов и <code>clip-path</code> для визуальных эффектов.</p>

  <p> <a href="https://pipl-three.vercel.app/" target="_blank">Demo</a></p>

<br>
<h3>Пропсы</h3>
<div>
  <table>
    <thead>
      <tr>
        <th><div>Название</div></th>
        <th><div>Тип</div></th>
        <th><div>По умолчанию</div></th>
        <th><div>Описание</div></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><div><code>generalBg</code></div></td>
        <td><div><code>string</code></div></td>
        <td><div><code>'/images/default-bg.jpg'</code></div></td>
        <td><div>Основное фоновое изображение героя.</div></td>
      </tr>
      <tr>
        <td><div><code>secondaryBgs</code></div></td>
        <td><div><code>string[]</code></div></td>
        <td><div><code>[]</code></div></td>
        <td><div>Массив дополнительных фоновых изображений, которые будут анимированы поверх основного фона.</div></td>
      </tr>
    </tbody>
  </table>
</div>
