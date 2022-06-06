import { General_settingsOrderByWithRelationInput } from "../../../inputs/General_settingsOrderByWithRelationInput";
import { General_settingsWhereInput } from "../../../inputs/General_settingsWhereInput";
import { General_settingsWhereUniqueInput } from "../../../inputs/General_settingsWhereUniqueInput";
export declare class AggregateGeneral_settingsArgs {
    where?: General_settingsWhereInput | undefined;
    orderBy?: General_settingsOrderByWithRelationInput[] | undefined;
    cursor?: General_settingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
