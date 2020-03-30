import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';




const Material = [ MatButtonModule, MatInputModule ];

@NgModule({
	imports: [Material],
	exports: [Material]
})
export class MaterialModule { }
