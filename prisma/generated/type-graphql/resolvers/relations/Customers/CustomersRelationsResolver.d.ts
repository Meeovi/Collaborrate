import { Comments } from "../../../models/Comments";
import { Credit_memos } from "../../../models/Credit_memos";
import { Customer_group } from "../../../models/Customer_group";
import { Customer_payment } from "../../../models/Customer_payment";
import { Customers } from "../../../models/Customers";
import { Emails } from "../../../models/Emails";
import { Newsletter_subscribers } from "../../../models/Newsletter_subscribers";
import { Orders } from "../../../models/Orders";
import { Quotes } from "../../../models/Quotes";
import { Returns } from "../../../models/Returns";
import { CustomersCommentsArgs } from "./args/CustomersCommentsArgs";
import { CustomersCredit_memosArgs } from "./args/CustomersCredit_memosArgs";
import { CustomersCustomer_group_customer_groupTocustomersArgs } from "./args/CustomersCustomer_group_customer_groupTocustomersArgs";
import { CustomersEmailsArgs } from "./args/CustomersEmailsArgs";
import { CustomersNewsletter_subscribersArgs } from "./args/CustomersNewsletter_subscribersArgs";
import { CustomersOrdersArgs } from "./args/CustomersOrdersArgs";
import { CustomersQuotesArgs } from "./args/CustomersQuotesArgs";
import { CustomersReturnsArgs } from "./args/CustomersReturnsArgs";
export declare class CustomersRelationsResolver {
    comments(customers: Customers, ctx: any, args: CustomersCommentsArgs): Promise<Comments[]>;
    credit_memos(customers: Customers, ctx: any, args: CustomersCredit_memosArgs): Promise<Credit_memos[]>;
    customer_group_customer_groupTocustomers(customers: Customers, ctx: any, args: CustomersCustomer_group_customer_groupTocustomersArgs): Promise<Customer_group[]>;
    customer_payment(customers: Customers, ctx: any): Promise<Customer_payment | null>;
    emails(customers: Customers, ctx: any, args: CustomersEmailsArgs): Promise<Emails[]>;
    newsletter_subscribers(customers: Customers, ctx: any, args: CustomersNewsletter_subscribersArgs): Promise<Newsletter_subscribers[]>;
    orders(customers: Customers, ctx: any, args: CustomersOrdersArgs): Promise<Orders[]>;
    quotes(customers: Customers, ctx: any, args: CustomersQuotesArgs): Promise<Quotes[]>;
    returns(customers: Customers, ctx: any, args: CustomersReturnsArgs): Promise<Returns[]>;
}
