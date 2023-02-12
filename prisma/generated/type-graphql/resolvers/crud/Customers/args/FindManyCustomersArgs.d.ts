import { CustomersOrderByWithRelationInput } from "../../../inputs/CustomersOrderByWithRelationInput";
import { CustomersWhereInput } from "../../../inputs/CustomersWhereInput";
import { CustomersWhereUniqueInput } from "../../../inputs/CustomersWhereUniqueInput";
export declare class FindManyCustomersArgs {
    where?: CustomersWhereInput | undefined;
    orderBy?: CustomersOrderByWithRelationInput[] | undefined;
    cursor?: CustomersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "thumbnail" | "name_prefix" | "first_name" | "middle_name" | "last_name" | "email" | "customer_group" | "phone" | "zipcode" | "name_suffix" | "websites" | "product" | "country" | "state" | "customer_since" | "confirmed_email" | "date_of_birth" | "tax_vat_number" | "gender" | "description" | "short_description" | "image" | "Address" | "address_two" | "payment_type" | "username" | "password" | "comments" | "credit_memos" | "customer_payment" | "emails" | "mediamanager" | "messages" | "newsletter_subscribers" | "orders" | "projects" | "quotes" | "returns" | "workspaces"> | undefined;
}
