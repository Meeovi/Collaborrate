import { GraphQLResolveInfo } from "graphql";
import { CreateManyCore_storeArgs } from "./args/CreateManyCore_storeArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCore_storeResolver {
    createManyCore_store(ctx: any, info: GraphQLResolveInfo, args: CreateManyCore_storeArgs): Promise<AffectedRowsOutput>;
}
