import { Module } from '@nestjs/common';
import { ProviderModule } from '@nestjs-mongo-poc/provider';
import { CatController } from './cat.controller';

@Module({
    imports: [ProviderModule],
    controllers: [CatController],
})
export class CatModule { }
