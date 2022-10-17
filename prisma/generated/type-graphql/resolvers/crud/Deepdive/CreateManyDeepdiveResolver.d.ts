import { GraphQLResolveInfo } from "graphql";
import { CreateManyDeepdiveArgs } from "./args/CreateManyDeepdiveArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDeepdiveResolver {
    createManyDeepdive(ctx: any, info: GraphQLResolveInfo, args: CreateManyDeepdiveArgs): Promise<AffectedRowsOutput>;
}
