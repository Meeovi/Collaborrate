import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyTemplatesArgs } from "./args/UpdateManyTemplatesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTemplatesResolver {
    updateManyTemplates(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTemplatesArgs): Promise<AffectedRowsOutput>;
}
