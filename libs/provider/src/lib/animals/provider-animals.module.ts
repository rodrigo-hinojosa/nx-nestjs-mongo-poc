import { Module } from '@nestjs/common';
import { ProviderFelinesModule } from './modules/felines/provider-felines.module';

@Module({
    imports: [ProviderFelinesModule],
    exports: [ProviderFelinesModule],
})
export class ProviderAnimalsModule { }
