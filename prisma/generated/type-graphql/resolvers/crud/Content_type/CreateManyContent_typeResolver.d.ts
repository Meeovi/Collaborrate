import { GraphQLResolveInfo } from "graphql";
import { CreateManyContent_typeArgs } from "./args/CreateManyContent_typeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyContent_typeResolver {
    createManyContent_type(ctx: any, info: GraphQLResolveInfo, args: CreateManyContent_typeArgs): Promise<AffectedRowsOutput>;
}
