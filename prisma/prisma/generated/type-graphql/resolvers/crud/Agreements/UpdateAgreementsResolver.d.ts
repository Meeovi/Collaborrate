import { GraphQLResolveInfo } from "graphql";
import { UpdateAgreementsArgs } from "./args/UpdateAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
export declare class UpdateAgreementsResolver {
    updateAgreements(ctx: any, info: GraphQLResolveInfo, args: UpdateAgreementsArgs): Promise<Agreements | null>;
}
