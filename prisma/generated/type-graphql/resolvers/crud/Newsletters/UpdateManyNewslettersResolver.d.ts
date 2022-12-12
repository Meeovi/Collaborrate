import { GraphQLResolveInfo } from "graphql";
import { UpdateManyNewslettersArgs } from "./args/UpdateManyNewslettersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyNewslettersResolver {
    updateManyNewsletters(ctx: any, info: GraphQLResolveInfo, args: UpdateManyNewslettersArgs): Promise<AffectedRowsOutput>;
}
