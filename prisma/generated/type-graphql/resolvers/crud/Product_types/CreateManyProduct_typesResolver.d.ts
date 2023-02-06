import { GraphQLResolveInfo } from "graphql";
import { CreateManyProduct_typesArgs } from "./args/CreateManyProduct_typesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProduct_typesResolver {
    createManyProduct_types(ctx: any, info: GraphQLResolveInfo, args: CreateManyProduct_typesArgs): Promise<AffectedRowsOutput>;
}
