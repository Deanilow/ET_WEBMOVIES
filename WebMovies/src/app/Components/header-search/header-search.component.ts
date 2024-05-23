import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateService } from '../../services/state.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-header-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './header-search.component.html',
  styleUrl: './header-search.component.scss'
})
export class HeaderSearchComponent {
  stateService = inject(StateService)
  searchControl = new FormControl("");
  @Output() search = new EventEmitter<string>();

  ngOnInit() {
    this.searchControl.valueChanges.pipe(debounceTime(250)).subscribe((value) => {
      this.stateService.searchSubject.next(value || '')
    })
  }
}
