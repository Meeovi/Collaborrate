import { GraphQLResolveInfo } from "graphql";
import { UpdateManyProduct_attribute_setArgs } from "./args/UpdateManyProduct_attribute_setArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProduct_attribute_setResolver {
    updateManyProduct_attribute_set(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProduct_attribute_setArgs): Promise<AffectedRowsOutput>;
}
