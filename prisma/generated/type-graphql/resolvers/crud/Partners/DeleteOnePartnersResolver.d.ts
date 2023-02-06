import { GraphQLResolveInfo } from "graphql";
import { DeleteOnePartnersArgs } from "./args/DeleteOnePartnersArgs";
import { Partners } from "../../../models/Partners";
export declare class DeleteOnePartnersResolver {
    deleteOnePartners(ctx: any, info: GraphQLResolveInfo, args: DeleteOnePartnersArgs): Promise<Partners | null>;
}
