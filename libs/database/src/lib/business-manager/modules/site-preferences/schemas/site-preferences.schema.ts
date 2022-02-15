import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SitePreferencesDocument = SitePreferences & Document;

@Schema({ collection: 'sitePreferences', timestamps: true, versionKey: false })
export class SitePreferences extends Document {
    @Prop({ index: true, required: true, unique: true })
    name: string;

    @Prop({ index: true, required: true })
    type: string;

    @Prop()
    description?: string;

    @Prop()
    enabled: boolean;

    @Prop()
    useInCache: boolean;

    @Prop({ type: Object })
    data: any;
}

export const SitePreferencesSchema = SchemaFactory.createForClass(SitePreferences);
