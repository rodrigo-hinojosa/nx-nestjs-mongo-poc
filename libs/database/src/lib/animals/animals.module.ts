import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FelinesModule } from './modules/felines/felines.module';
import { MongooseConfigService } from './config/mongodb.config.service';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useClass: MongooseConfigService,
        }),
        FelinesModule
    ],
    exports: [FelinesModule],
})
export class AnimalsModule { }
