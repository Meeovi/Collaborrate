import { InternalizationOrderByWithRelationInput } from "../../../inputs/InternalizationOrderByWithRelationInput";
import { InternalizationWhereInput } from "../../../inputs/InternalizationWhereInput";
import { InternalizationWhereUniqueInput } from "../../../inputs/InternalizationWhereUniqueInput";
export declare class AggregateInternalizationArgs {
    where?: InternalizationWhereInput | undefined;
    orderBy?: InternalizationOrderByWithRelationInput[] | undefined;
    cursor?: InternalizationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
