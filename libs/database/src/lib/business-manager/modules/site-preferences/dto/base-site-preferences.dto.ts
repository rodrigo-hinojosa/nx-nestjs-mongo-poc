import { IsBoolean, IsDate, IsJSON, IsNotEmpty, IsString } from 'class-validator';

export class BaseSitePreferencesDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsBoolean()
    @IsNotEmpty()
    enabled: boolean;

    @IsBoolean()
    @IsNotEmpty()
    useInCache: boolean;

    @IsJSON()
    @IsNotEmpty()
    data: any;
}
