import { CustomersCreateOrConnectWithoutCommentsInput } from "../inputs/CustomersCreateOrConnectWithoutCommentsInput";
import { CustomersCreateWithoutCommentsInput } from "../inputs/CustomersCreateWithoutCommentsInput";
import { CustomersUpdateWithoutCommentsInput } from "../inputs/CustomersUpdateWithoutCommentsInput";
import { CustomersUpsertWithoutCommentsInput } from "../inputs/CustomersUpsertWithoutCommentsInput";
import { CustomersWhereUniqueInput } from "../inputs/CustomersWhereUniqueInput";
export declare class CustomersUpdateOneRequiredWithoutCommentsInput {
    create?: CustomersCreateWithoutCommentsInput | undefined;
    connectOrCreate?: CustomersCreateOrConnectWithoutCommentsInput | undefined;
    upsert?: CustomersUpsertWithoutCommentsInput | undefined;
    connect?: CustomersWhereUniqueInput | undefined;
    update?: CustomersUpdateWithoutCommentsInput | undefined;
}
