import { GraphQLResolveInfo } from "graphql";
import { UpsertOnePartnersArgs } from "./args/UpsertOnePartnersArgs";
import { Partners } from "../../../models/Partners";
export declare class UpsertOnePartnersResolver {
    upsertOnePartners(ctx: any, info: GraphQLResolveInfo, args: UpsertOnePartnersArgs): Promise<Partners>;
}
