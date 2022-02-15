import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AnimalsModule } from './animals/animals.module';
import { BusinessManagerModule } from './business-manager/business-manager.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: 'libs/database/.env',
            isGlobal: true,
        }),
        AnimalsModule,
        BusinessManagerModule,
    ],
    exports: [
        AnimalsModule,
        BusinessManagerModule,
    ],
})
export class DatabaseModule { }
