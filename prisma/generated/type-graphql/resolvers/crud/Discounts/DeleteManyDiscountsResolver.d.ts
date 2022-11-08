import { GraphQLResolveInfo } from "graphql";
import { DeleteManyDiscountsArgs } from "./args/DeleteManyDiscountsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyDiscountsResolver {
    deleteManyDiscounts(ctx: any, info: GraphQLResolveInfo, args: DeleteManyDiscountsArgs): Promise<AffectedRowsOutput>;
}
