import { GraphQLResolveInfo } from "graphql";
import { CreateManyDigiboardArgs } from "./args/CreateManyDigiboardArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyDigiboardResolver {
    createManyDigiboard(ctx: any, info: GraphQLResolveInfo, args: CreateManyDigiboardArgs): Promise<AffectedRowsOutput>;
}
