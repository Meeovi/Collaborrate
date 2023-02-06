import { StatesCreateInput } from "../../../inputs/StatesCreateInput";
import { StatesUpdateInput } from "../../../inputs/StatesUpdateInput";
import { StatesWhereUniqueInput } from "../../../inputs/StatesWhereUniqueInput";
export declare class UpsertOneStatesArgs {
    where: StatesWhereUniqueInput;
    create: StatesCreateInput;
    update: StatesUpdateInput;
}
