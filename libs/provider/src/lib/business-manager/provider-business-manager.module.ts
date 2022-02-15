import { Module } from '@nestjs/common';
import { ProviderSitePreferencesModule } from './modules/site-preferences/provider-site-preferences.module';

@Module({
    imports: [ProviderSitePreferencesModule],
    exports: [ProviderSitePreferencesModule],
})
export class ProviderBusinessManagerModule {}
