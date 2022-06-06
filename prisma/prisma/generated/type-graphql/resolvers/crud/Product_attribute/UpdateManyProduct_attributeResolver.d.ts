import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProduct_attributeArgs } from "./args/UpdateManyProduct_attributeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProduct_attributeResolver {
    updateManyProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProduct_attributeArgs): Promise<AffectedRowsOutput>;
}
