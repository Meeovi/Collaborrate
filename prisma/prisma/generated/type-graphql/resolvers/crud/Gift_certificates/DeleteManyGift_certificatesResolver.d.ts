import { GraphQLResolveInfo } from "graphql";
import { DeleteManyGift_certificatesArgs } from "./args/DeleteManyGift_certificatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyGift_certificatesResolver {
    deleteManyGift_certificates(ctx: any, info: GraphQLResolveInfo, args: DeleteManyGift_certificatesArgs): Promise<AffectedRowsOutput>;
}
