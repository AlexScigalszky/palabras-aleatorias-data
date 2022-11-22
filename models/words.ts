export interface PalabrasAleatoria {
  Word: string;
  Definition: string;
  Author: string;
  ErrorMessage?: any;
  EncodingWebName: string;
  WordOrigin?: any;
  UrlDefinitionSource: string;
  Types: any[];
}

export interface RootPalabraObject {
  "palabras-aleatorias": PalabrasAleatoria[];
}
