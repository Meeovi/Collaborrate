import { GraphQLResolveInfo } from "graphql";
import { CreateManyChecklistArgs } from "./args/CreateManyChecklistArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyChecklistResolver {
    createManyChecklist(ctx: any, info: GraphQLResolveInfo, args: CreateManyChecklistArgs): Promise<AffectedRowsOutput>;
}
