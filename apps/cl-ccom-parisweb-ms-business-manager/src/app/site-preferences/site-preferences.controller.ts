import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProviderSitePreferencesService } from '@nestjs-mongo-poc/provider';

@Controller('site-preferences')
export class SitePreferencesController {
    constructor(private readonly providerSitePreferencesService: ProviderSitePreferencesService) { }

    @Get()
    async getSitePreferences(): Promise<any[]> {
        return await this.providerSitePreferencesService.getSitePreferences();
    }

    @Get(':id')
    async getSitePreferencesById(@Param('id') id: string): Promise<any> {
        return this.providerSitePreferencesService.getSitePreferencesById(id);
    }

    @Post()
    async addSitePreferences(@Body() sitePreference: any) {
        return await this.providerSitePreferencesService.addSitePreferences(sitePreference);
    }

    @Delete(':id')
    async deleteSitePreferenceById(@Param('id') id: string) {
        return this.providerSitePreferencesService.deleteSitePreferenceById(id);
    }
}
