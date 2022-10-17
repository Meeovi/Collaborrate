import { GraphQLResolveInfo } from "graphql";
import { UpdateOneDigiboardArgs } from "./args/UpdateOneDigiboardArgs";
import { Digiboard } from "../../../models/Digiboard";
export declare class UpdateOneDigiboardResolver {
    updateOneDigiboard(ctx: any, info: GraphQLResolveInfo, args: UpdateOneDigiboardArgs): Promise<Digiboard | null>;
}
