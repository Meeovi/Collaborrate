import { GraphQLResolveInfo } from "graphql";
import { FindManyProvidersArgs } from "./args/FindManyProvidersArgs";
import { Providers } from "../../../models/Providers";
export declare class FindManyProvidersResolver {
    findManyProviders(ctx: any, info: GraphQLResolveInfo, args: FindManyProvidersArgs): Promise<Providers[]>;
}
