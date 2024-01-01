import { ImagesConfig } from './image-config';

export interface SectionConfig {
  headerTitle: string;
  headerSubtitle?: string;
  mediaPath: keyof typeof ImagesConfig;
}
