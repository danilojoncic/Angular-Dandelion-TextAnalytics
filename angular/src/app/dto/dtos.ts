export interface History{
  timestamp: string,
  type: string,
  query: string,
}

export interface Annotation {
  title: string,
  confidence: number,
  uri: string,
  label: string,
  categories: string[],
  abstract: string,
  image: {
    full: string,
    thumbnail: string,
  }
}

export interface EntityExtractionResponse {
  timestamp: string,
  annotations: Annotation[],
}

export interface TextSimilarityResponse {
  similarity: number,
  langConfidence: number,
  timestamp: string,
}

export interface DetectedLang {
  lang: string,
  confidence: number,
}

export interface LanguageDetectionResponse {
  detectedLangs: DetectedLang[],
}

export interface SentimentResponse {
  timestamp: string,
  lang: string,
  langConfidence: number,
  sentiment: {
    score: number,
    type: string,
  },
}
