import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProduct_attribute_setArgs } from "./args/DeleteManyProduct_attribute_setArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProduct_attribute_setResolver {
    deleteManyProduct_attribute_set(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProduct_attribute_setArgs): Promise<AffectedRowsOutput>;
}
