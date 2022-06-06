import { Customers } from "../../../models/Customers";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
export declare class Newsletter_subscribersRelationsResolver {
    customers(newsletter_subscribers: Newsletter_subscribers, ctx: any): Promise<Customers>;
}
