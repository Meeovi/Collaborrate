import { SettingsOrderByWithRelationInput } from "../../../inputs/SettingsOrderByWithRelationInput";
import { SettingsWhereInput } from "../../../inputs/SettingsWhereInput";
import { SettingsWhereUniqueInput } from "../../../inputs/SettingsWhereUniqueInput";
export declare class AggregateSettingsArgs {
    where?: SettingsWhereInput | undefined;
    orderBy?: SettingsOrderByWithRelationInput[] | undefined;
    cursor?: SettingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
