import { GraphQLResolveInfo } from "graphql";
import { UpdateOneInternalizationArgs } from "./args/UpdateOneInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
export declare class UpdateOneInternalizationResolver {
    updateOneInternalization(ctx: any, info: GraphQLResolveInfo, args: UpdateOneInternalizationArgs): Promise<Internalization | null>;
}
