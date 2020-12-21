import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadcreditsPage } from './loadcredits.page';

describe('LoadcreditsPage', () => {
  let component: LoadcreditsPage;
  let fixture: ComponentFixture<LoadcreditsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadcreditsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadcreditsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
