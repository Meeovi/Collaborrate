import { GraphQLResolveInfo } from "graphql";
import { CreateManyCouponsArgs } from "./args/CreateManyCouponsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCouponsResolver {
    createManyCoupons(ctx: any, info: GraphQLResolveInfo, args: CreateManyCouponsArgs): Promise<AffectedRowsOutput>;
}
