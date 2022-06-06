import { GraphQLResolveInfo } from "graphql";
import { CreateProvidersArgs } from "./args/CreateProvidersArgs";
import { Providers } from "../../../models/Providers";
export declare class CreateProvidersResolver {
    createProviders(ctx: any, info: GraphQLResolveInfo, args: CreateProvidersArgs): Promise<Providers>;
}
