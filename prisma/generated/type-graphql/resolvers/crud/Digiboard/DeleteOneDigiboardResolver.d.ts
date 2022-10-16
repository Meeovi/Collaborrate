import { GraphQLResolveInfo } from "graphql";
import { DeleteOneDigiboardArgs } from "./args/DeleteOneDigiboardArgs";
import { Digiboard } from "../../../models/Digiboard";
export declare class DeleteOneDigiboardResolver {
    deleteOneDigiboard(ctx: any, info: GraphQLResolveInfo, args: DeleteOneDigiboardArgs): Promise<Digiboard | null>;
}
