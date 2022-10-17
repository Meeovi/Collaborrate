import { CustomizationsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CustomizationsOrderByWithRelationAndSearchRelevanceInput";
import { CustomizationsWhereInput } from "../../../inputs/CustomizationsWhereInput";
import { CustomizationsWhereUniqueInput } from "../../../inputs/CustomizationsWhereUniqueInput";
export declare class AggregateCustomizationsArgs {
    where?: CustomizationsWhereInput | undefined;
    orderBy?: CustomizationsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: CustomizationsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
