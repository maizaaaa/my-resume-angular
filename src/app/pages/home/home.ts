import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero-section">
      <img src="assets/images/a.jpg" alt="My Photo" class="profile-img">
      <h1>Hi, I'm Maizatul Hasanah</h1>
      <p>Welcome to my personal resume website!</p>
    </section>
    <section class="section-padding">
      <div class="container">
        <h2>About Me</h2>
        <p>I am passionate about coding, design, and learning new technologies.</p>
      </div>
    </section>
  `,
  styleUrls: ['./home.css']
})
export class Home {}
