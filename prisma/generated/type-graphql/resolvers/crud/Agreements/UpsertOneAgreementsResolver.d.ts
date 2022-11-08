import { GraphQLResolveInfo } from "graphql";
import { UpsertOneAgreementsArgs } from "./args/UpsertOneAgreementsArgs";
import { Agreements } from "../../../models/Agreements";
export declare class UpsertOneAgreementsResolver {
    upsertOneAgreements(ctx: any, info: GraphQLResolveInfo, args: UpsertOneAgreementsArgs): Promise<Agreements>;
}
