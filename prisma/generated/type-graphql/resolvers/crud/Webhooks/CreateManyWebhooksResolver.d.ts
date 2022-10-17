import { GraphQLResolveInfo } from "graphql";
import { CreateManyWebhooksArgs } from "./args/CreateManyWebhooksArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyWebhooksResolver {
    createManyWebhooks(ctx: any, info: GraphQLResolveInfo, args: CreateManyWebhooksArgs): Promise<AffectedRowsOutput>;
}
