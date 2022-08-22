import { NgModule } from "@angular/core";

import { NgOnceDirective } from "@shared/directives/ng-once/ng-once.directive";
import { HandleErrorDirective } from "@shared/directives/handle-error/handle-error.directive";

@NgModule({
  declarations: [NgOnceDirective, HandleErrorDirective],
  imports: [],
  exports: [NgOnceDirective, HandleErrorDirective],
})
export class SharedModule {
}
