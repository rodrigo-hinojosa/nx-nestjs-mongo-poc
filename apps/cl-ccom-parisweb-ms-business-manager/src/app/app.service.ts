import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getData(): { message: string } {
        return { message: 'Welcome to cl-ccom-parisweb-ms-business-manager!' };
    }
}
