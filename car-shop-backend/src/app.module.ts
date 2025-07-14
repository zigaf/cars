import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoilerPartsModule } from './boiler-parts/boiler-parts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql.freedb.tech',
      port: 3306,
      username: 'freedb_freedb_anton',
      password: '$P!W&4PNhg9w5Kd',
      database: 'freedb_freedb_shop_youtube',
      autoLoadEntities: true,
      synchronize: true,
    }),
    BoilerPartsModule,
  ],
})
export class AppModule {}
