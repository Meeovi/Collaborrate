import { GraphQLResolveInfo } from "graphql";
import { DeleteGift_certificatesArgs } from "./args/DeleteGift_certificatesArgs";
import { Gift_certificates } from "../../../models/Gift_certificates";
export declare class DeleteGift_certificatesResolver {
    deleteGift_certificates(ctx: any, info: GraphQLResolveInfo, args: DeleteGift_certificatesArgs): Promise<Gift_certificates | null>;
}
