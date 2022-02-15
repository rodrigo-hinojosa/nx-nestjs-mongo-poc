import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongodb.config.service';
import { SitePreferencesModule } from './modules/site-preferences/site-preferences.module';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            connectionName: 'businessManager',
            imports: [ConfigModule],
            useClass: MongooseConfigService,
        }),
        SitePreferencesModule
    ],
    exports: [SitePreferencesModule],
})
export class BusinessManagerModule { }
