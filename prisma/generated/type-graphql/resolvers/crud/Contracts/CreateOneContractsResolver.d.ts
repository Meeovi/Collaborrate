import { GraphQLResolveInfo } from "graphql";
import { CreateOneContractsArgs } from "./args/CreateOneContractsArgs";
import { Contracts } from "../../../models/Contracts";
export declare class CreateOneContractsResolver {
    createOneContracts(ctx: any, info: GraphQLResolveInfo, args: CreateOneContractsArgs): Promise<Contracts>;
}
