import { GraphQLResolveInfo } from "graphql";
import { CreateManyTemplatesArgs } from "./args/CreateManyTemplatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTemplatesResolver {
    createManyTemplates(ctx: any, info: GraphQLResolveInfo, args: CreateManyTemplatesArgs): Promise<AffectedRowsOutput>;
}
