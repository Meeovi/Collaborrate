import { GraphQLResolveInfo } from "graphql";
import { CreateContractsArgs } from "./args/CreateContractsArgs";
import { Contracts } from "../../../models/Contracts";
export declare class CreateContractsResolver {
    createContracts(ctx: any, info: GraphQLResolveInfo, args: CreateContractsArgs): Promise<Contracts>;
}
