import { GraphQLResolveInfo } from "graphql";
import { UpsertFullfillmentsArgs } from "./args/UpsertFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
export declare class UpsertFullfillmentsResolver {
    upsertFullfillments(ctx: any, info: GraphQLResolveInfo, args: UpsertFullfillmentsArgs): Promise<Fullfillments>;
}
