import { GraphQLResolveInfo } from "graphql";
import { UpsertOneInternalizationArgs } from "./args/UpsertOneInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
export declare class UpsertOneInternalizationResolver {
    upsertOneInternalization(ctx: any, info: GraphQLResolveInfo, args: UpsertOneInternalizationArgs): Promise<Internalization>;
}
