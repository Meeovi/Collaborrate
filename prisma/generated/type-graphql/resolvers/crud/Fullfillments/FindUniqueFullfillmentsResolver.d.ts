import { GraphQLResolveInfo } from "graphql";
import { FindUniqueFullfillmentsArgs } from "./args/FindUniqueFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
export declare class FindUniqueFullfillmentsResolver {
    findUniqueFullfillments(ctx: any, info: GraphQLResolveInfo, args: FindUniqueFullfillmentsArgs): Promise<Fullfillments | null>;
}
