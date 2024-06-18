import { Interaction as TInteraction } from "../api/interaction/Interaction";

export const INTERACTION_TITLE_FIELD = "author";

export const InteractionTitle = (record: TInteraction): string => {
  return record.author?.toString() || String(record.id);
};
