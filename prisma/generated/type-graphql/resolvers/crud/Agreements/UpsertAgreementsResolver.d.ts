import { GraphQLResolveInfo } from "graphql";
import { UpsertAgreementsArgs } from "./args/UpsertAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
export declare class UpsertAgreementsResolver {
    upsertAgreements(ctx: any, info: GraphQLResolveInfo, args: UpsertAgreementsArgs): Promise<Agreements>;
}
