import { GraphQLResolveInfo } from "graphql";
import { CreateManyReturnsArgs } from "./args/CreateManyReturnsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyReturnsResolver {
    createManyReturns(ctx: any, info: GraphQLResolveInfo, args: CreateManyReturnsArgs): Promise<AffectedRowsOutput>;
}
