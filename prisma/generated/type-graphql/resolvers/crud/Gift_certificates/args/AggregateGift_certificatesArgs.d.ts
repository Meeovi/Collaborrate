import { Gift_certificatesOrderByWithRelationInput } from "../../../inputs/Gift_certificatesOrderByWithRelationInput";
import { Gift_certificatesWhereInput } from "../../../inputs/Gift_certificatesWhereInput";
import { Gift_certificatesWhereUniqueInput } from "../../../inputs/Gift_certificatesWhereUniqueInput";
export declare class AggregateGift_certificatesArgs {
    where?: Gift_certificatesWhereInput | undefined;
    orderBy?: Gift_certificatesOrderByWithRelationInput[] | undefined;
    cursor?: Gift_certificatesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
