import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTaxesArgs } from "./args/DeleteManyTaxesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTaxesResolver {
    deleteManyTaxes(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTaxesArgs): Promise<AffectedRowsOutput>;
}
