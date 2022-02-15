import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSitePreferencesDto, UpdateSitePreferencesDto } from '../dto';
import { SitePreferences, SitePreferencesDocument } from '../schemas';

@Injectable()
export class SitePreferencesService {
    constructor(@InjectModel(SitePreferences.name) private readonly sitePreferencesModel: Model<SitePreferencesDocument>) {
    }

    async findAll(): Promise<SitePreferences[]> {
        try {
            return await this.sitePreferencesModel.find().sort({ updatedAt: -1 }).exec();
        } catch (error) {
            console.log('error: ', error);
        }
    }

    async findOne(id: string): Promise<SitePreferences> {
        try {
            return await this.sitePreferencesModel.findById(id).exec();
        } catch (error) {
            console.log('error: ', error);
        }
    }

    async create(createSitePreferencesDto: CreateSitePreferencesDto): Promise<SitePreferences> {
        try {
            const createdSitePreferences = await this.sitePreferencesModel.create({
                ...createSitePreferencesDto,
                createdAt: new Date(),
            });
            return createdSitePreferences;
        } catch (error) {
            console.log('error: ', error);
        }
    }

    async update(id: string, updateSitePreferencesDto: UpdateSitePreferencesDto): Promise<SitePreferences> {
        try {
            return await this.sitePreferencesModel.findByIdAndUpdate(id, updateSitePreferencesDto).exec();
        } catch (error) {
            console.log('error: ', error);
        }
    }

    async delete(id: string): Promise<SitePreferences> {
        try {
            return await this.sitePreferencesModel.findByIdAndDelete(id).exec();
        } catch (error) {
            console.log('error: ', error);
        }
    }
}
