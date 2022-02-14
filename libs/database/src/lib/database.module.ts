import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AnimalsModule } from './animals/animals.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: 'libs/database/.env',
            isGlobal: true,
        }),
        AnimalsModule
    ],
    exports: [AnimalsModule],
})
export class DatabaseModule { }
