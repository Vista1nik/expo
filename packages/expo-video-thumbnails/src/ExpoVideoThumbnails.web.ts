import { ThumbnailOptions, VideoThumbnailsResult } from './VideoThumbnailsTypes.types';

export default {
  get name(): string {
    return 'ExpoVideoThumbnails';
  },
  async getThumbnailAsync(
    sourceFilename: string,
    options: ThumbnailOptions = {}
  ): Promise<VideoThumbnailsResult> {
    throw new Error("ExpoVideoThumbnails not supported on Expo Web")
  }
};