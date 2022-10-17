import { GraphQLResolveInfo } from "graphql";
import { DeleteManyNewslettersArgs } from "./args/DeleteManyNewslettersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyNewslettersResolver {
    deleteManyNewsletters(ctx: any, info: GraphQLResolveInfo, args: DeleteManyNewslettersArgs): Promise<AffectedRowsOutput>;
}
