import { GraphQLResolveInfo } from "graphql";
import { CreateManyOotoArgs } from "./args/CreateManyOotoArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyOotoResolver {
    createManyOoto(ctx: any, info: GraphQLResolveInfo, args: CreateManyOotoArgs): Promise<AffectedRowsOutput>;
}
