import { DatabaseModule } from '@nestjs-mongo-poc/database';
import { Module } from '@nestjs/common';
import { ProviderSitePreferencesService } from './services/provider-site-preferences.service';

@Module({
    providers: [ProviderSitePreferencesService],
    imports: [DatabaseModule],
    exports: [ProviderSitePreferencesService],
})
export class ProviderSitePreferencesModule { }
