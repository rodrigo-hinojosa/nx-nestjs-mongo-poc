import { Test, TestingModule } from '@nestjs/testing';
import { ProviderSitePreferencesService } from './provider-site-preferences.service';

describe('ProviderSitePreferencesService', () => {
    let service: ProviderSitePreferencesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ProviderSitePreferencesService],
        }).compile();

        service = module.get<ProviderSitePreferencesService>(
            ProviderSitePreferencesService
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
