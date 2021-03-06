import { Test, TestingModule } from '@nestjs/testing';
import { ProviderModule } from '@nestjs-mongo-poc/provider';
import { CatController } from './cat.controller';

describe('CatController', () => {
    let controller: CatController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [ProviderModule],
            controllers: [CatController],
        }).compile();

        controller = module.get<CatController>(CatController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
