import { GraphQLResolveInfo } from "graphql";
import { CreateManyNewslettersArgs } from "./args/CreateManyNewslettersArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyNewslettersResolver {
    createManyNewsletters(ctx: any, info: GraphQLResolveInfo, args: CreateManyNewslettersArgs): Promise<AffectedRowsOutput>;
}
