export interface PdfDownloadOptions {
  url: string;
  filename: string;
  onProgress?: (progress: number) => void;
}