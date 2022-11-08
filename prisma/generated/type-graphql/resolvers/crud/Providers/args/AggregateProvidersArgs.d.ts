import { ProvidersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ProvidersOrderByWithRelationAndSearchRelevanceInput";
import { ProvidersWhereInput } from "../../../inputs/ProvidersWhereInput";
import { ProvidersWhereUniqueInput } from "../../../inputs/ProvidersWhereUniqueInput";
export declare class AggregateProvidersArgs {
    where?: ProvidersWhereInput | undefined;
    orderBy?: ProvidersOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: ProvidersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
