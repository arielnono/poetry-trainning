export type StanzaSchema = {
  strophes: string[];
};

export type PoemSchema = {
  titre: string;
  autheur: string;
  poeme: Array<StanzaSchema>;
};

export type JsonPoemFileSchema = {
  poemes: Array<PoemSchema>;
};
