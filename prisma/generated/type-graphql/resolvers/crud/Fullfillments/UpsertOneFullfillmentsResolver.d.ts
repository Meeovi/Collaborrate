import { GraphQLResolveInfo } from "graphql";
import { UpsertOneFullfillmentsArgs } from "./args/UpsertOneFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
export declare class UpsertOneFullfillmentsResolver {
    upsertOneFullfillments(ctx: any, info: GraphQLResolveInfo, args: UpsertOneFullfillmentsArgs): Promise<Fullfillments>;
}
