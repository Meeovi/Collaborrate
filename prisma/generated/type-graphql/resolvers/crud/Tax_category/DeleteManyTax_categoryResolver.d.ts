import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTax_categoryArgs } from "./args/DeleteManyTax_categoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTax_categoryResolver {
    deleteManyTax_category(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTax_categoryArgs): Promise<AffectedRowsOutput>;
}
