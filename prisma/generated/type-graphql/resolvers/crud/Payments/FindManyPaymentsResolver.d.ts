import { GraphQLResolveInfo } from "graphql";
import { FindManyPaymentsArgs } from "./args/FindManyPaymentsArgs";
import { Payments } from "../../../models/Payments";
export declare class FindManyPaymentsResolver {
    findManyPayments(ctx: any, info: GraphQLResolveInfo, args: FindManyPaymentsArgs): Promise<Payments[]>;
}
