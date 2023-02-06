import { GraphQLResolveInfo } from "graphql";
import { FindFirstFullfillmentsArgs } from "./args/FindFirstFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
export declare class FindFirstFullfillmentsResolver {
    findFirstFullfillments(ctx: any, info: GraphQLResolveInfo, args: FindFirstFullfillmentsArgs): Promise<Fullfillments | null>;
}
