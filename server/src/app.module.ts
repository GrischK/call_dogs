import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Dog} from "./dogs/dog.entity";
import {DogsModule} from "./dogs/dogs.module";

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
        DogsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
