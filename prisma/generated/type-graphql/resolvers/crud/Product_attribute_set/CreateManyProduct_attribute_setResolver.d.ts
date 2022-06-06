import { GraphQLResolveInfo } from "graphql";
import { CreateManyProduct_attribute_setArgs } from "./args/CreateManyProduct_attribute_setArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProduct_attribute_setResolver {
    createManyProduct_attribute_set(ctx: any, info: GraphQLResolveInfo, args: CreateManyProduct_attribute_setArgs): Promise<AffectedRowsOutput>;
}
