import { GraphQLResolveInfo } from "graphql";
import { UpdateManyGift_certificatesArgs } from "./args/UpdateManyGift_certificatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyGift_certificatesResolver {
    updateManyGift_certificates(ctx: any, info: GraphQLResolveInfo, args: UpdateManyGift_certificatesArgs): Promise<AffectedRowsOutput>;
}
