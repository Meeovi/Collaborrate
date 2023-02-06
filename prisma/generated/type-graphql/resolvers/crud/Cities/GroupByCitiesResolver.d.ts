import { GraphQLResolveInfo } from "graphql";
import { GroupByCitiesArgs } from "./args/GroupByCitiesArgs";
import { CitiesGroupBy } from "../../outputs/CitiesGroupBy";
export declare class GroupByCitiesResolver {
    groupByCities(ctx: any, info: GraphQLResolveInfo, args: GroupByCitiesArgs): Promise<CitiesGroupBy[]>;
}
