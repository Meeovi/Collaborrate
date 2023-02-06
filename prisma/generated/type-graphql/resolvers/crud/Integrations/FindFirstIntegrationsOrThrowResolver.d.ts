import { GraphQLResolveInfo } from "graphql";
import { FindFirstIntegrationsOrThrowArgs } from "./args/FindFirstIntegrationsOrThrowArgs";
import { Integrations } from "../../../models/Integrations";
export declare class FindFirstIntegrationsOrThrowResolver {
    findFirstIntegrationsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstIntegrationsOrThrowArgs): Promise<Integrations | null>;
}
