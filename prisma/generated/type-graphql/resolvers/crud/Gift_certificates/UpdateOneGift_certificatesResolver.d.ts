import { GraphQLResolveInfo } from "graphql";
import { UpdateOneGift_certificatesArgs } from "./args/UpdateOneGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
export declare class UpdateOneGift_certificatesResolver {
    updateOneGift_certificates(ctx: any, info: GraphQLResolveInfo, args: UpdateOneGift_certificatesArgs): Promise<Gift_certificates | null>;
}
