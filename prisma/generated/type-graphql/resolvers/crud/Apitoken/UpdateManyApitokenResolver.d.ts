import { GraphQLResolveInfo } from "graphql";
import { UpdateManyApitokenArgs } from "./args/UpdateManyApitokenArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyApitokenResolver {
    updateManyApitoken(ctx: any, info: GraphQLResolveInfo, args: UpdateManyApitokenArgs): Promise<AffectedRowsOutput>;
}
