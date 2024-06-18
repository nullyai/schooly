import { InteractionWhereInput } from "./InteractionWhereInput";
import { InteractionOrderByInput } from "./InteractionOrderByInput";

export type InteractionFindManyArgs = {
  where?: InteractionWhereInput;
  orderBy?: Array<InteractionOrderByInput>;
  skip?: number;
  take?: number;
};
