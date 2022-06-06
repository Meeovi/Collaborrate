"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpdateOneRequiredWithoutOrdersInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutOrdersInput_1 = require("../inputs/CustomersCreateOrConnectWithoutOrdersInput");
const CustomersCreateWithoutOrdersInput_1 = require("../inputs/CustomersCreateWithoutOrdersInput");
const CustomersUpdateWithoutOrdersInput_1 = require("../inputs/CustomersUpdateWithoutOrdersInput");
const CustomersUpsertWithoutOrdersInput_1 = require("../inputs/CustomersUpsertWithoutOrdersInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersUpdateOneRequiredWithoutOrdersInput = class CustomersUpdateOneRequiredWithoutOrdersInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutOrdersInput_1.CustomersCreateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutOrdersInput_1.CustomersCreateWithoutOrdersInput)
], CustomersUpdateOneRequiredWithoutOrdersInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutOrdersInput_1.CustomersCreateOrConnectWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutOrdersInput_1.CustomersCreateOrConnectWithoutOrdersInput)
], CustomersUpdateOneRequiredWithoutOrdersInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpsertWithoutOrdersInput_1.CustomersUpsertWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpsertWithoutOrdersInput_1.CustomersUpsertWithoutOrdersInput)
], CustomersUpdateOneRequiredWithoutOrdersInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersUpdateOneRequiredWithoutOrdersInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutOrdersInput_1.CustomersUpdateWithoutOrdersInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutOrdersInput_1.CustomersUpdateWithoutOrdersInput)
], CustomersUpdateOneRequiredWithoutOrdersInput.prototype, "update", void 0);
CustomersUpdateOneRequiredWithoutOrdersInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutOrdersInput", {
        isAbstract: true
    })
], CustomersUpdateOneRequiredWithoutOrdersInput);
exports.CustomersUpdateOneRequiredWithoutOrdersInput = CustomersUpdateOneRequiredWithoutOrdersInput;
