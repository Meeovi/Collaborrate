import { GraphQLResolveInfo } from "graphql";
import { UpdateManyWebhooksArgs } from "./args/UpdateManyWebhooksArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyWebhooksResolver {
    updateManyWebhooks(ctx: any, info: GraphQLResolveInfo, args: UpdateManyWebhooksArgs): Promise<AffectedRowsOutput>;
}
