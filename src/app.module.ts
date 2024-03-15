import { Global, Module } from '@nestjs/common';
import { SuperheroModule } from './superhero/superhero.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { SupabaseModule } from './superhero/client/supabaseClient.module';
@Global()
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'aws-0-us-west-1.pooler.supabase.com',
      port: 5432,
      username: 'postgres.ncsscypgwdxaffajnbal',
      password: 'WQJcWzIGJ33Ke55L',
      database: 'postgres',
      autoLoadModels: true,
      synchronize: true,
    }),
    SuperheroModule,
    SupabaseModule,
  ],

  exports: [SequelizeModule],
})
export class AppModule {}
