import { GraphQLResolveInfo } from "graphql";
import { CreateManyGlossaryArgs } from "./args/CreateManyGlossaryArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyGlossaryResolver {
    createManyGlossary(ctx: any, info: GraphQLResolveInfo, args: CreateManyGlossaryArgs): Promise<AffectedRowsOutput>;
}
