import { Module } from '@nestjs/common';
import { NestLibraryService } from './nest-library.service';

@Module({
  providers: [NestLibraryService],
  exports: [NestLibraryService],
})
export class NestLibraryModule {}
