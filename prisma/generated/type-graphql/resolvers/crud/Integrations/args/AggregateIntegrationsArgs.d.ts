import { IntegrationsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/IntegrationsOrderByWithRelationAndSearchRelevanceInput";
import { IntegrationsWhereInput } from "../../../inputs/IntegrationsWhereInput";
import { IntegrationsWhereUniqueInput } from "../../../inputs/IntegrationsWhereUniqueInput";
export declare class AggregateIntegrationsArgs {
    where?: IntegrationsWhereInput | undefined;
    orderBy?: IntegrationsOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: IntegrationsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
