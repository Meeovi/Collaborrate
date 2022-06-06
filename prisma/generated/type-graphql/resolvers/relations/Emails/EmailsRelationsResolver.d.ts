import { Customers } from "../../../models/Customers";
import { Emails } from "../../../models/Emails";
export declare class EmailsRelationsResolver {
    customers(emails: Emails, ctx: any): Promise<Customers>;
}
