import { GraphQLResolveInfo } from "graphql";
import { UpdateManyEmailsArgs } from "./args/UpdateManyEmailsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyEmailsResolver {
    updateManyEmails(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEmailsArgs): Promise<AffectedRowsOutput>;
}
