import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { MinioClientModule } from 'src/minio-client/minio-client.module';
import { FileUploadController } from './file-upload.controller';

@Module({
  imports: [MinioClientModule],
  providers: [FileUploadService],
  controllers: [FileUploadController],
})
export class FileUploadModule {}
