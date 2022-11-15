import { GraphQLResolveInfo } from "graphql";
import { FindUniqueIntegrationsOrThrowArgs } from "./args/FindUniqueIntegrationsOrThrowArgs";
import { Integrations } from "../../../models/Integrations";
export declare class FindUniqueIntegrationsOrThrowResolver {
    findUniqueIntegrationsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueIntegrationsOrThrowArgs): Promise<Integrations | null>;
}
