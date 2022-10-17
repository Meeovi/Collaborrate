import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCouponsArgs } from "./args/DeleteManyCouponsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCouponsResolver {
    deleteManyCoupons(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCouponsArgs): Promise<AffectedRowsOutput>;
}
