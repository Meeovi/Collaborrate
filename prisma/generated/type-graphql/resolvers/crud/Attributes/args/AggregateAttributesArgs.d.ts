import { AttributesOrderByWithRelationInput } from "../../../inputs/AttributesOrderByWithRelationInput";
import { AttributesWhereInput } from "../../../inputs/AttributesWhereInput";
import { AttributesWhereUniqueInput } from "../../../inputs/AttributesWhereUniqueInput";
export declare class AggregateAttributesArgs {
    where?: AttributesWhereInput | undefined;
    orderBy?: AttributesOrderByWithRelationInput[] | undefined;
    cursor?: AttributesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
