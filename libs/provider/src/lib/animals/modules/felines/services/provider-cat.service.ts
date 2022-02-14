import { Injectable } from '@nestjs/common';
import { CatService } from 'libs/database/src/lib/animals/modules/felines/services/cat.service';
import { ICat } from '@nestjs-mongo-poc/shared';

@Injectable()
export class ProviderCatService {
    constructor(private readonly catService: CatService) { }

    async addCat(cat: ICat): Promise<any> {
        return await this.catService.create(cat);
    }

    async getCats(): Promise<any[]> {
        return await this.catService.findAll();
    }

    async getCatById(id: string): Promise<any> {
        return await this.catService.findOne(id);
    }

    async deleteCatById(id: string): Promise<any> {
        return await this.catService.delete(id);
    }
}
