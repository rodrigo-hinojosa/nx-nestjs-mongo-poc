import { Test, TestingModule } from '@nestjs/testing';
import { ProviderModule } from '@nestjs-mongo-poc/provider';
import { SitePreferencesController } from './site-preferences.controller';

describe('SitePreferencesController', () => {
    let controller: SitePreferencesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [ProviderModule],
            controllers: [SitePreferencesController],
        }).compile();

        controller = module.get<SitePreferencesController>(
            SitePreferencesController
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
