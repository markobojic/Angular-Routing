import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a>Home</a></li>
                    <li><a>Product List</a></li>
                    <li><a>Add Product</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <app-home></app-home>
        </div>
     </div>
     `
})
export class AppComponent {
    pageTitle: string = 'Acme Product Management';
}