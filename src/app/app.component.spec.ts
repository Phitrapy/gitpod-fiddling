import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


const componentCount = 1000;
const testCount = 1;

for(let i = 0; i < componentCount; i++) {

  class ComponentStub extends AppComponent {}

  describe(`[#${i}] ComponentStub`, () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          AppComponent,
          ComponentStub
        ],
      }).compileComponents();
    });

    for(let i = 0; i < testCount; i++) {
      it('should create the app', () => {
        const fixture = TestBed.createComponent(ComponentStub);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
    }
  });
}
