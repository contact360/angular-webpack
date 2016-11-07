import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ServiceAuthComponent } from './components/serviceauth/serviceauth.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent,ServiceAuthComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
