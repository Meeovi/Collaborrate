import { GraphQLResolveInfo } from "graphql";
import { FindManyIntegrationsArgs } from "./args/FindManyIntegrationsArgs";
import { Integrations } from "../../../models/Integrations";
export declare class FindManyIntegrationsResolver {
    findManyIntegrations(ctx: any, info: GraphQLResolveInfo, args: FindManyIntegrationsArgs): Promise<Integrations[]>;
}
