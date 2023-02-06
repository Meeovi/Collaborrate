import { GraphQLResolveInfo } from "graphql";
import { UpdateOnePartnersArgs } from "./args/UpdateOnePartnersArgs";
import { Partners } from "../../../models/Partners";
export declare class UpdateOnePartnersResolver {
    updateOnePartners(ctx: any, info: GraphQLResolveInfo, args: UpdateOnePartnersArgs): Promise<Partners | null>;
}
