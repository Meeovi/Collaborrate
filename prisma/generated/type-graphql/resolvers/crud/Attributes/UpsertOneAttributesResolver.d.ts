import { GraphQLResolveInfo } from "graphql";
import { UpsertOneAttributesArgs } from "./args/UpsertOneAttributesArgs";
import { Attributes } from "../../../models/Attributes";
export declare class UpsertOneAttributesResolver {
    upsertOneAttributes(ctx: any, info: GraphQLResolveInfo, args: UpsertOneAttributesArgs): Promise<Attributes>;
}
