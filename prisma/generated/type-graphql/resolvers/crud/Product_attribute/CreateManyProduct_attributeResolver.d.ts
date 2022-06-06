import { GraphQLResolveInfo } from "graphql";
import { CreateManyProduct_attributeArgs } from "./args/CreateManyProduct_attributeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProduct_attributeResolver {
    createManyProduct_attribute(ctx: any, info: GraphQLResolveInfo, args: CreateManyProduct_attributeArgs): Promise<AffectedRowsOutput>;
}
