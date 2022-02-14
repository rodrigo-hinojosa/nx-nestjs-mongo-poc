import { Test, TestingModule } from '@nestjs/testing';
import { FelinesModule } from 'libs/database/src/lib/animals/modules/felines/felines.module';
import { ProviderCatService } from './provider-cat.service';

describe('ProviderCatService', () => {
    let service: ProviderCatService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [FelinesModule],
            providers: [ProviderCatService],
        }).compile();

        service = module.get<ProviderCatService>(ProviderCatService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
