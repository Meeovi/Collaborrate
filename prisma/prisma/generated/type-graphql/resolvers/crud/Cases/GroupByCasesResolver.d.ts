import { GraphQLResolveInfo } from "graphql";
import { GroupByCasesArgs } from "./args/GroupByCasesArgs";
import { CasesGroupBy } from "../../outputs/CasesGroupBy";
export declare class GroupByCasesResolver {
    groupByCases(ctx: any, info: GraphQLResolveInfo, args: GroupByCasesArgs): Promise<CasesGroupBy[]>;
}
