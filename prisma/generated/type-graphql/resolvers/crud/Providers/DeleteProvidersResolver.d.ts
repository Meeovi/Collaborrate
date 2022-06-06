import { GraphQLResolveInfo } from "graphql";
import { DeleteProvidersArgs } from "./args/DeleteProvidersArgs";
import { Providers } from "../../../models/Providers";
export declare class DeleteProvidersResolver {
    deleteProviders(ctx: any, info: GraphQLResolveInfo, args: DeleteProvidersArgs): Promise<Providers | null>;
}
