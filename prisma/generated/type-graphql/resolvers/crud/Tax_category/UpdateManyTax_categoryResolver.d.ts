import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTax_categoryArgs } from "./args/UpdateManyTax_categoryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTax_categoryResolver {
    updateManyTax_category(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTax_categoryArgs): Promise<AffectedRowsOutput>;
}
