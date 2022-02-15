import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ICat } from '@nestjs-mongo-poc/shared';
import { ProviderCatService } from '@nestjs-mongo-poc/provider';

@Controller('cat')
export class CatController {
    constructor(private readonly providerCatService: ProviderCatService) { }

    @Get()
    async getCats(): Promise<any[]> {
        return await this.providerCatService.getCats();
    }

    @Get(':id')
    async getCatById(@Param('id') id: string): Promise<any> {
        return this.providerCatService.getCatById(id);
    }

    @Post()
    async addCat(@Body() cat: ICat) {
        return await this.providerCatService.addCat(cat);
    }

    @Delete(':id')
    async deleteCatById(@Param('id') id: string) {
        return this.providerCatService.deleteCatById(id);
    }
}
