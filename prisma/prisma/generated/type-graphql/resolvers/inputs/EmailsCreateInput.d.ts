import { CustomersCreateNestedOneWithoutEmailsInput } from "../inputs/CustomersCreateNestedOneWithoutEmailsInput";
export declare class EmailsCreateInput {
    title?: Date | undefined;
    created_at?: Date | undefined;
    subject?: string | undefined;
    content?: string | undefined;
    recipients?: string | undefined;
    customers?: CustomersCreateNestedOneWithoutEmailsInput | undefined;
}
