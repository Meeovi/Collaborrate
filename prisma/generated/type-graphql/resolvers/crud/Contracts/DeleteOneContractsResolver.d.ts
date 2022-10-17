import { GraphQLResolveInfo } from "graphql";
import { DeleteOneContractsArgs } from "./args/DeleteOneContractsArgs";
import { Contracts } from "../../../models/Contracts";
export declare class DeleteOneContractsResolver {
    deleteOneContracts(ctx: any, info: GraphQLResolveInfo, args: DeleteOneContractsArgs): Promise<Contracts | null>;
}
