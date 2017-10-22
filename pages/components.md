<section class="container container--pad">
  <h1>Components</h1>
</section>
<section class="container container--pad">
  <h2>Grids</h2>
  <div class="row">
    <div class="col-1"><div style="background: #EEF0F0; height: 20px"></div></div>
    <div class="col-11"><div style="background: #EEF0F0; height: 20px"></div></div>
  </div>
  <div class="row">
    <div class="col-2"><div style="background: #EEF0F0; height: 20px"></div></div>
    <div class="col-10"><div style="background: #EEF0F0; height: 20px"></div></div>
  </div>
  <div class="row">
    <div class="col-3"><div style="background: #EEF0F0; height: 20px"></div></div>
    <div class="col-9"><div style="background: #EEF0F0; height: 20px"></div></div>
  </div>
  <div class="row">
    <div class="col-4"><div style="background: #EEF0F0; height: 20px"></div></div>
    <div class="col-8"><div style="background: #EEF0F0; height: 20px"></div></div>
  </div>
  <div class="row">
    <div class="col-5"><div style="background: #EEF0F0; height: 20px"></div></div>
    <div class="col-7"><div style="background: #EEF0F0; height: 20px"></div></div>
  </div>
  <div class="row">
    <div class="col-6"><div style="background: #EEF0F0; height: 20px"></div></div>
    <div class="col-6"><div style="background: #EEF0F0; height: 20px"></div></div>
  </div>
  <div class="row">
    <div class="col-7"><div style="background: #EEF0F0; height: 20px"></div></div>
    <div class="col-5"><div style="background: #EEF0F0; height: 20px"></div></div>
  </div>
  <div class="row">
    <div class="col-8"><div style="background: #EEF0F0; height: 20px"></div></div>
    <div class="col-4"><div style="background: #EEF0F0; height: 20px"></div></div>
  </div>
  <div class="row">
    <div class="col-9"><div style="background: #EEF0F0; height: 20px"></div></div>
    <div class="col-3"><div style="background: #EEF0F0; height: 20px"></div></div>
  </div>
  <div class="row">
    <div class="col-10"><div style="background: #EEF0F0; height: 20px"></div></div>
    <div class="col-2"><div style="background: #EEF0F0; height: 20px"></div></div>
  </div>
  <div class="row">
    <div class="col-11"><div style="background: #EEF0F0; height: 20px"></div></div>
    <div class="col-1"><div style="background: #EEF0F0; height: 20px"></div></div>
  </div>
</section>
<section class="container container--pad">
    <h2>Panels</h2>
    <div class="row">
      <div class="col-6">
        <div class="panel">
          <div class="panel panel__header">Panel</div>
          <div class="panel panel__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non ultrices quam. </p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="panel">
          <div class="panel panel__header">Panel</div>
          <div class="panel panel__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non ultrices quam. </p>
          </div>
        </div>
      </div>
    </div>
</section>
<section class="container container--pad">
  <h2>Buttons</h2>
  <button class="button">Default</button>
  <button class="button button--success">Success</button>
  <button class="button button--info">Info</button>
  <button class="button button--error">Error</button>
  <button class="button button--warning">Warning</button>
</section>
<section class="container container--pad">
  <h2>Alerts</h2>
  <div class="alert alert--info">
    <strong>Info:</strong> This is an info alert
  </div>
  <div class="alert alert--success">
    <strong>Success!</strong> This is an success alert
  </div>
  <div class="alert alert--warning">
    <strong>Uh oh.</strong> This is an warning alert
  </div>
  <div class="alert alert--error">
    <strong>Error!</strong> This is an error alert
  </div>
</section>
<section class="container container--pad">
  <h2>Navigation</h2>
  <h3>Horizontal</h3>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a href="#" class="nav__link nav__link--active">
          <i class="icon icon-home"></i> Home
        </a>
      </li>
      <li class="nav__item">
          <a href="#" class="nav__link">
            About
          </a>
      </li>
      <li class="nav__item">
          <a href="#" class="nav__link">
            Contact
          </a>
      </li>
    </ul>
  </nav>

  <h3>Vertical</h3>
  <div class="row">
    <div class="col-4">
      <nav class="nav nav--vertical">
        <ul class="nav__list">
          <li class="nav__item"><a href="#" class="nav__link nav__link--active">Home</a></li>
          <li class="nav__item"><a href="#" class="nav__link">About</a></li>
          <li class="nav__item"><a href="#" class="nav__link">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="col-8"></div>
  </div>
</section>
<section class="container container--pad">
  <h2>Forms</h2>
  <form class="form">
    <div class="form__controls">
      <div class="row">
        <div class="col-6">
          <input type="email" class="form__input" placeholder="Email Address">
        </div>
        <div class="col-6">
          <input type="password" class="form__input" placeholder="Password">
        </div>
      </div>
    </div>
    <div class="form__controls">
      <textarea name="" id="" cols="30" rows="10" class="form__input" placeholder="Message"></textarea>
    </div>
    <div class="form__controls">
      <button type="submit" class="button button--success--form">Submit</button>
      <button class="button button--default--form">Cancel</button>
    </div>
  </form>
</section>