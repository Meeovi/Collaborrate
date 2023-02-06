import { GraphQLResolveInfo } from "graphql";
import { UpdateManyDiscountsArgs } from "./args/UpdateManyDiscountsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyDiscountsResolver {
    updateManyDiscounts(ctx: any, info: GraphQLResolveInfo, args: UpdateManyDiscountsArgs): Promise<AffectedRowsOutput>;
}
