import { GraphQLResolveInfo } from "graphql";
import { DeleteManyLogInArgs } from "./args/DeleteManyLogInArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyLogInResolver {
    deleteManyLogIn(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLogInArgs): Promise<AffectedRowsOutput>;
}
