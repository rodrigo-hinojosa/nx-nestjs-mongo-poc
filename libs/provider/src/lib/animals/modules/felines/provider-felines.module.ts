import { Module } from '@nestjs/common';
import { DatabaseModule } from '@nestjs-mongo-poc/database';
import { ProviderCatService } from './services/provider-cat.service';

@Module({
    providers: [ProviderCatService],
    imports: [DatabaseModule],
    exports: [ProviderCatService],
})
export class ProviderFelinesModule { }
