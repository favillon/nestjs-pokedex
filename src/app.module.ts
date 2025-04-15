import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { CommonModule } from './common/common.module';
import { EnvConfig } from './config/env.config';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load :[EnvConfig],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', process.env.DIR_STATIC ?? 'public'),
    }),
    MongooseModule.forRoot(process.env.MONGODB ?? ''),
    PokemonModule,
    CommonModule,
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
