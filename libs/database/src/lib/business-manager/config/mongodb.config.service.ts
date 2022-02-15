import { Injectable } from '@nestjs/common';
import {
    MongooseModuleOptions,
    MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    createMongooseOptions(): MongooseModuleOptions {
        const databaseName: string = 'businessManager';
        return {
            uri: `${process.env.MONGO_INITDB_ROOT_HOST}:${process.env.MONGO_INITDB_ROOT_PORT}/${databaseName}`,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
    }
}
