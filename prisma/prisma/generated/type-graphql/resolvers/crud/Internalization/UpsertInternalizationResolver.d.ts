import { GraphQLResolveInfo } from "graphql";
import { UpsertInternalizationArgs } from "./args/UpsertInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
export declare class UpsertInternalizationResolver {
    upsertInternalization(ctx: any, info: GraphQLResolveInfo, args: UpsertInternalizationArgs): Promise<Internalization>;
}
