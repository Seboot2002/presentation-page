import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSocialNetworkComponent } from './basic-social-network.component';

describe('BasicSocialNetworkComponent', () => {
  let component: BasicSocialNetworkComponent;
  let fixture: ComponentFixture<BasicSocialNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicSocialNetworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSocialNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
