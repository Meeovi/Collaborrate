import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCouponsArgs } from "./args/UpdateManyCouponsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCouponsResolver {
    updateManyCoupons(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCouponsArgs): Promise<AffectedRowsOutput>;
}
