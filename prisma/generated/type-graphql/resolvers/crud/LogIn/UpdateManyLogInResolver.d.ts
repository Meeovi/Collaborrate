import { GraphQLResolveInfo } from "graphql";
import { UpdateManyLogInArgs } from "./args/UpdateManyLogInArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyLogInResolver {
    updateManyLogIn(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLogInArgs): Promise<AffectedRowsOutput>;
}
