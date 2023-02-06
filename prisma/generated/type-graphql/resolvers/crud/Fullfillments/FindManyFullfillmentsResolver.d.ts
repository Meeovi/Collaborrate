import { GraphQLResolveInfo } from "graphql";
import { FindManyFullfillmentsArgs } from "./args/FindManyFullfillmentsArgs";
import { Fullfillments } from "../../../models/Fullfillments";
export declare class FindManyFullfillmentsResolver {
    findManyFullfillments(ctx: any, info: GraphQLResolveInfo, args: FindManyFullfillmentsArgs): Promise<Fullfillments[]>;
}
