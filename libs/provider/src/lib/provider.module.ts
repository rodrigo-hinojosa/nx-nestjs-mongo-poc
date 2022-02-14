import { Module } from '@nestjs/common';
import { ProviderAnimalsModule } from './animals/provider-animals.module';

@Module({
    imports: [ProviderAnimalsModule],
    exports: [ProviderAnimalsModule],
})
export class ProviderModule { }
