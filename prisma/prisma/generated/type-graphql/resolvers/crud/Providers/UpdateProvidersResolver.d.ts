import { GraphQLResolveInfo } from "graphql";
import { UpdateProvidersArgs } from "./args/UpdateProvidersArgs";
import { Providers } from "../../../models/Providers";
export declare class UpdateProvidersResolver {
    updateProviders(ctx: any, info: GraphQLResolveInfo, args: UpdateProvidersArgs): Promise<Providers | null>;
}
