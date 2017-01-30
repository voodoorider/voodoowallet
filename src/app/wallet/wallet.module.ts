import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// containers
import { WalletComponent } from './containers/wallet/shares-list.component';

// components
import { ShareListComponent } from './components/wallet/share-list.component';
import { NewShareComponent } from './components/wallet/new-share.component';

// services
import { WalletService } from './wallet.service';

@NgModule({
  declarations: [
    ShareListComponents,
    NewShareComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    WalletService
  ],
  exports: [
    WalletComponent
  ]
})
export class TeslaBatteryModule {}