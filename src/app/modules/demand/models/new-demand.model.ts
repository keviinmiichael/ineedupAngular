import { Form, FormControl } from '@angular/forms';

export interface NewDemandForm {
  title: FormControl;
  description: FormControl;
  files: FormControl;
}

export interface NewDemandRequest {
  title: string;
  description: string;
  category_id: number;
}
