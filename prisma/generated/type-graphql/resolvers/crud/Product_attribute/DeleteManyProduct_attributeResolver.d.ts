import { GraphQLResolveInfo } from "graphql";
import { DeleteManyProduct_attributeArgs } from "./args/DeleteManyProduct_attributeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProduct_attributeResolver {
    deleteManyProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProduct_attributeArgs): Promise<AffectedRowsOutput>;
}
