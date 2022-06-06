import { GraphQLResolveInfo } from "graphql";
import { UpdateInternalizationArgs } from "./args/UpdateInternalizationArgs";
import { Internalization } from "../../../models/Internalization";
export declare class UpdateInternalizationResolver {
    updateInternalization(ctx: any, info: GraphQLResolveInfo, args: UpdateInternalizationArgs): Promise<Internalization | null>;
}
