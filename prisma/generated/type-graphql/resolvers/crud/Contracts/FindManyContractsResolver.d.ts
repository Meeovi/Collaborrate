import { GraphQLResolveInfo } from "graphql";
import { FindManyContractsArgs } from "./args/FindManyContractsArgs";
import { Contracts } from "../../../models/Contracts";
export declare class FindManyContractsResolver {
    findManyContracts(ctx: any, info: GraphQLResolveInfo, args: FindManyContractsArgs): Promise<Contracts[]>;
}
