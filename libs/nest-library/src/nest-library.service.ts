import { Injectable } from '@nestjs/common';

@Injectable()
export class NestLibraryService {
    hello(word: string): string {
        return `Hello ${word}`;
    }
}
