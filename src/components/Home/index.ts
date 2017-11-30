import * as page from 'page'
import * as Handlebars from 'handlebars'
import * as seal from './img/seal.jpg'
const template = `
<div class="container">
  <div class="card-columns">
    <div class="card">
      <img class="card-img-top" src="${seal}" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Circle and Rect</h4>
        <p class="card-text">园和矩形的定位</p>
        <a href="javascript:;" id="circleAndRect" class="btn btn-primary">Go</a>
      </div>
    </div>

    <div class="card">
      <img class="card-img-top" src="." width="318" height="180" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Circle and Rect</h4>
        <p class="card-text">别的主题</p>
        <a href="javascript:;" class="btn btn-primary">Go</a>
      </div>
    </div>
    
    <div class="card">
      <img class="card-img-top" src="." width="318" height="180" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Circle and Rect</h4>
        <p class="card-text">别的主题</p>
        <a href="javascript:;" class="btn btn-primary">Go</a>
      </div>
    </div>
    
    <div class="card">
      <img class="card-img-top" src="." width="318" height="180" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Circle and Rect</h4>
        <p class="card-text">别的主题</p>
        <a href="javascript:;" class="btn btn-primary">Go</a>
      </div>
    </div>
    
    <div class="card">
      <img class="card-img-top" src="." width="318" height="180" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Circle and Rect</h4>
        <p class="card-text">别的主题</p>
        <a href="javascript:;" class="btn btn-primary">Go</a>
      </div>
    </div>
    
    <div class="card">
      <img class="card-img-top" src="." width="318" height="180" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Circle and Rect</h4>
        <p class="card-text">别的主题</p>
        <a href="javascript:;" class="btn btn-primary">Go</a>
      </div>
    </div>
  </div>
</div>
`

export default function homeInit() {

  const container: HTMLElement = document.getElementById('app') as any
  container.innerHTML = Handlebars.compile(template)({})
  const linkCircleAndRect = container.querySelector('#circleAndRect') as any

  linkCircleAndRect.addEventListener('click', () => {
    page('/circle-and-rect')
  })
}
