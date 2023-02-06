import { GraphQLResolveInfo } from "graphql";
import { CreateManyLogInArgs } from "./args/CreateManyLogInArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyLogInResolver {
    createManyLogIn(ctx: any, info: GraphQLResolveInfo, args: CreateManyLogInArgs): Promise<AffectedRowsOutput>;
}
