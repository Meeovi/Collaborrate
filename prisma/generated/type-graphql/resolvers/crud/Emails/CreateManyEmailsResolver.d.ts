import { GraphQLResolveInfo } from "graphql";
import { CreateManyEmailsArgs } from "./args/CreateManyEmailsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyEmailsResolver {
    createManyEmails(ctx: any, info: GraphQLResolveInfo, args: CreateManyEmailsArgs): Promise<AffectedRowsOutput>;
}
