import { GraphQLResolveInfo } from "graphql";
import { UpsertOneNewslettersArgs } from "./args/UpsertOneNewslettersArgs";
import { Newsletters } from "../../../models/Newsletters";
export declare class UpsertOneNewslettersResolver {
    upsertOneNewsletters(ctx: any, info: GraphQLResolveInfo, args: UpsertOneNewslettersArgs): Promise<Newsletters>;
}
