import { SettingsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/SettingsOrderByWithRelationAndSearchRelevanceInput";
import { SettingsWhereInput } from "../../../inputs/SettingsWhereInput";
import { SettingsWhereUniqueInput } from "../../../inputs/SettingsWhereUniqueInput";
export declare class AggregateSettingsArgs {
    where?: SettingsWhereInput | undefined;
    orderBy?: SettingsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: SettingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
