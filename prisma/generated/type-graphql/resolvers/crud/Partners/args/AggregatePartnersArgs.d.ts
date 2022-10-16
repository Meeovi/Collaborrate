import { PartnersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/PartnersOrderByWithRelationAndSearchRelevanceInput";
import { PartnersWhereInput } from "../../../inputs/PartnersWhereInput";
import { PartnersWhereUniqueInput } from "../../../inputs/PartnersWhereUniqueInput";
export declare class AggregatePartnersArgs {
    where?: PartnersWhereInput | undefined;
    orderBy?: PartnersOrderByWithRelationAndSearchRelevanceInput[] | undefined;
    cursor?: PartnersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
