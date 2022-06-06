import { GraphQLResolveInfo } from "graphql";
import { DeleteManySpecial_discountsArgs } from "./args/DeleteManySpecial_discountsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySpecial_discountsResolver {
    deleteManySpecial_discounts(ctx: any, info: GraphQLResolveInfo, args: DeleteManySpecial_discountsArgs): Promise<AffectedRowsOutput>;
}
