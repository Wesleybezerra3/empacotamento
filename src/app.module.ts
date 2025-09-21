import { Module } from '@nestjs/common';
import { PackagesModule } from './packages_api/packages.module';

@Module({
  imports: [PackagesModule],
})
export class AppModule {}
