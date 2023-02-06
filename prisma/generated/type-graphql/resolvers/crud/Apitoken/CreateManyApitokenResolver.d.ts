import { GraphQLResolveInfo } from "graphql";
import { CreateManyApitokenArgs } from "./args/CreateManyApitokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyApitokenResolver {
    createManyApitoken(ctx: any, info: GraphQLResolveInfo, args: CreateManyApitokenArgs): Promise<AffectedRowsOutput>;
}
