import { GraphQLResolveInfo } from "graphql";
import { GroupByDigiboardArgs } from "./args/GroupByDigiboardArgs";
import { DigiboardGroupBy } from "../../outputs/DigiboardGroupBy";
export declare class GroupByDigiboardResolver {
    groupByDigiboard(ctx: any, info: GraphQLResolveInfo, args: GroupByDigiboardArgs): Promise<DigiboardGroupBy[]>;
}
