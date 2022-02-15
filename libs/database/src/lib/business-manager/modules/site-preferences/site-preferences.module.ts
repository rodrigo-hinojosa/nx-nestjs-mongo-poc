import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SitePreferences, SitePreferencesSchema } from './schemas/site-preferences.schema';
import { SitePreferencesService } from './services/site-preferences.service';

@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            {
                name: SitePreferences.name,
                useFactory: () => {
                    const schema = SitePreferencesSchema;
                    return schema;
                },
            },
        ], 'businessManager'),
    ],
    providers: [SitePreferencesService],
    exports: [SitePreferencesService]
})
export class SitePreferencesModule { }
