import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';
import { CatService } from './services/cat.service';

@Module({
    imports: [
        MongooseModule.forFeatureAsync([
            {
                name: Cat.name,
                useFactory: () => {
                    const schema = CatSchema;
                    return schema;
                },
            },
        ], 'cats'),
    ],
    providers: [CatService],
    exports: [CatService],
})
export class FelinesModule { }
