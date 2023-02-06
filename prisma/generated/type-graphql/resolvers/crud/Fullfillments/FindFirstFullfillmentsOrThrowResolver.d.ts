import { GraphQLResolveInfo } from "graphql";
import { FindFirstFullfillmentsOrThrowArgs } from "./args/FindFirstFullfillmentsOrThrowArgs";
import { Fullfillments } from "../../../models/Fullfillments";
export declare class FindFirstFullfillmentsOrThrowResolver {
    findFirstFullfillmentsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstFullfillmentsOrThrowArgs): Promise<Fullfillments | null>;
}
