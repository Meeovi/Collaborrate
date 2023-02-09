import { GraphQLResolveInfo } from "graphql";
import { UpdateOneAgreementsArgs } from "./args/UpdateOneAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
export declare class UpdateOneAgreementsResolver {
    updateOneAgreements(ctx: any, info: GraphQLResolveInfo, args: UpdateOneAgreementsArgs): Promise<Agreements | null>;
}
