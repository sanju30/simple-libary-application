import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListforadminComponent } from './listforadmin.component';

describe('ListforadminComponent', () => {
  let component: ListforadminComponent;
  let fixture: ComponentFixture<ListforadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListforadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListforadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
