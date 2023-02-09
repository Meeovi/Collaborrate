import { GraphQLResolveInfo } from "graphql";
import { DeleteManyApitokenArgs } from "./args/DeleteManyApitokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyApitokenResolver {
    deleteManyApitoken(ctx: any, info: GraphQLResolveInfo, args: DeleteManyApitokenArgs): Promise<AffectedRowsOutput>;
}
