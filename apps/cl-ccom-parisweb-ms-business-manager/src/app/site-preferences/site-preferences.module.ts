import { ProviderModule } from '@nestjs-mongo-poc/provider';
import { Module } from '@nestjs/common';
import { SitePreferencesController } from './site-preferences.controller';

@Module({
    imports: [ProviderModule],
    controllers: [SitePreferencesController],
})
export class SitePreferencesModule { }
