import { GraphQLResolveInfo } from "graphql";
import { FindManyCitiesArgs } from "./args/FindManyCitiesArgs";
import { Cities } from "../../../models/Cities";
export declare class FindManyCitiesResolver {
    findManyCities(ctx: any, info: GraphQLResolveInfo, args: FindManyCitiesArgs): Promise<Cities[]>;
}
