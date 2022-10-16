import { GraphQLResolveInfo } from "graphql";
import { CreateOneStatisticsArgs } from "./args/CreateOneStatisticsArgs";
import { Statistics } from "../../../models/Statistics";
export declare class CreateOneStatisticsResolver {
    createOneStatistics(ctx: any, info: GraphQLResolveInfo, args: CreateOneStatisticsArgs): Promise<Statistics>;
}
