import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoordinatorPage } from './coordinator.page';

describe('CoordinatorPage', () => {
  let component: CoordinatorPage;
  let fixture: ComponentFixture<CoordinatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoordinatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
