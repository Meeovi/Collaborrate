import { CustomersCreateNestedOneWithoutOrdersInput } from "../inputs/CustomersCreateNestedOneWithoutOrdersInput";
import { ProductsCreateNestedOneWithoutOrdersInput } from "../inputs/ProductsCreateNestedOneWithoutOrdersInput";
import { QuotesCreateNestedManyWithoutOrdersInput } from "../inputs/QuotesCreateNestedManyWithoutOrdersInput";
import { TransactionsCreateNestedManyWithoutOrdersInput } from "../inputs/TransactionsCreateNestedManyWithoutOrdersInput";
export declare class OrdersCreateInput {
    purchase_point?: number | undefined;
    purchase_date?: Date | undefined;
    bill_to_name: string;
    ship_to_name?: string | undefined;
    grand_total_base?: number | undefined;
    grand_total_purchased?: number | undefined;
    status?: boolean | undefined;
    action?: boolean | undefined;
    allocated_sources?: string | undefined;
    braintree_transaction_source?: string | undefined;
    customers?: CustomersCreateNestedOneWithoutOrdersInput | undefined;
    products?: ProductsCreateNestedOneWithoutOrdersInput | undefined;
    quotes?: QuotesCreateNestedManyWithoutOrdersInput | undefined;
    transactions?: TransactionsCreateNestedManyWithoutOrdersInput | undefined;
}
