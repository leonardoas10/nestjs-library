import { Test, TestingModule } from '@nestjs/testing';
import { NestLibraryService } from './nest-library.service';

describe('NestLibraryService', () => {
  let service: NestLibraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestLibraryService],
    }).compile();

    service = module.get<NestLibraryService>(NestLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
