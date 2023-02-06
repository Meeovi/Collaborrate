import { GraphQLResolveInfo } from "graphql";
import { FindUniqueFullfillmentsOrThrowArgs } from "./args/FindUniqueFullfillmentsOrThrowArgs";
import { Fullfillments } from "../../../models/Fullfillments";
export declare class FindUniqueFullfillmentsOrThrowResolver {
    findUniqueFullfillmentsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFullfillmentsOrThrowArgs): Promise<Fullfillments | null>;
}
