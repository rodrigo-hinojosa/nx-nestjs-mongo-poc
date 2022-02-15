import { Injectable } from '@nestjs/common';
import { SitePreferencesService } from '@nestjs-mongo-poc/database';

@Injectable()
export class ProviderSitePreferencesService {
    constructor(private readonly sitePreferencesService: SitePreferencesService) { }

    async getSitePreferences(): Promise<any[]> {
        return await this.sitePreferencesService.findAll();
    }

    async getSitePreferencesById(id: string): Promise<any> {
        return await this.sitePreferencesService.findOne(id);
    }

    async addSitePreferences(sitePreference: any): Promise<any> {
        return await this.sitePreferencesService.create(sitePreference);
    }

    async deleteSitePreferenceById(id: string): Promise<any> {
        return await this.sitePreferencesService.delete(id);
    }
}
