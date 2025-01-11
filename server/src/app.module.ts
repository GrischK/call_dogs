import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Dog} from "./dogs/dog.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'database',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'mydb',
            autoLoadEntities: true,
            synchronize: true,
            logging: true
        }),
        TypeOrmModule.forFeature([Dog])
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
