import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ap   fp-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  gsga = '34';
}
