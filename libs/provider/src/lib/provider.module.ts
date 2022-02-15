import { Module } from '@nestjs/common';
import { ProviderAnimalsModule } from './animals/provider-animals.module';
import { ProviderBusinessManagerModule } from './business-manager/provider-business-manager.module';

@Module({
    imports: [ProviderAnimalsModule, ProviderBusinessManagerModule],
    exports: [ProviderAnimalsModule, ProviderBusinessManagerModule],
})
export class ProviderModule {}
