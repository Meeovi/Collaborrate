import { GraphQLResolveInfo } from "graphql";
import { CreateOneProvidersArgs } from "./args/CreateOneProvidersArgs";
import { Providers } from "../../../models/Providers";
export declare class CreateOneProvidersResolver {
    createOneProviders(ctx: any, info: GraphQLResolveInfo, args: CreateOneProvidersArgs): Promise<Providers>;
}
