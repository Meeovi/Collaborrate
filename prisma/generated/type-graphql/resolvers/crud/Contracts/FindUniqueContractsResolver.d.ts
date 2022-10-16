import { GraphQLResolveInfo } from "graphql";
import { FindUniqueContractsArgs } from "./args/FindUniqueContractsArgs";
import { Contracts } from "../../../models/Contracts";
export declare class FindUniqueContractsResolver {
    findUniqueContracts(ctx: any, info: GraphQLResolveInfo, args: FindUniqueContractsArgs): Promise<Contracts | null>;
}
