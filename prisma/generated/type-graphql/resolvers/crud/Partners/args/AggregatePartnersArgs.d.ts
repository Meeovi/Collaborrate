import { PartnersOrderByWithRelationInput } from "../../../inputs/PartnersOrderByWithRelationInput";
import { PartnersWhereInput } from "../../../inputs/PartnersWhereInput";
import { PartnersWhereUniqueInput } from "../../../inputs/PartnersWhereUniqueInput";
export declare class AggregatePartnersArgs {
    where?: PartnersWhereInput | undefined;
    orderBy?: PartnersOrderByWithRelationInput[] | undefined;
    cursor?: PartnersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
