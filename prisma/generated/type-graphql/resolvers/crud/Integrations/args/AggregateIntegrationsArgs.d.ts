import { IntegrationsOrderByWithRelationInput } from "../../../inputs/IntegrationsOrderByWithRelationInput";
import { IntegrationsWhereInput } from "../../../inputs/IntegrationsWhereInput";
import { IntegrationsWhereUniqueInput } from "../../../inputs/IntegrationsWhereUniqueInput";
export declare class AggregateIntegrationsArgs {
    where?: IntegrationsWhereInput | undefined;
    orderBy?: IntegrationsOrderByWithRelationInput[] | undefined;
    cursor?: IntegrationsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
