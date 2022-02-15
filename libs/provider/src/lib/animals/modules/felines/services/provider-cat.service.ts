import { Injectable } from '@nestjs/common';
import { CatService } from '@nestjs-mongo-poc/database';
import { ICat } from '@nestjs-mongo-poc/shared';

@Injectable()
export class ProviderCatService {
    constructor(private readonly catService: CatService) { }

    async getCats(): Promise<any[]> {
        return await this.catService.findAll();
    }

    async getCatById(id: string): Promise<any> {
        return await this.catService.findOne(id);
    }

    async addCat(cat: ICat): Promise<any> {
        return await this.catService.create(cat);
    }

    async deleteCatById(id: string): Promise<any> {
        return await this.catService.delete(id);
    }
}
