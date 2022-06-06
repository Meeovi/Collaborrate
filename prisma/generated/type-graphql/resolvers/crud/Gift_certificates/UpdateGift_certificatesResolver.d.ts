import { GraphQLResolveInfo } from "graphql";
import { UpdateGift_certificatesArgs } from "./args/UpdateGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
export declare class UpdateGift_certificatesResolver {
    updateGift_certificates(ctx: any, info: GraphQLResolveInfo, args: UpdateGift_certificatesArgs): Promise<Gift_certificates | null>;
}
