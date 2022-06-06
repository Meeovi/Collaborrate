"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersUpdateOneRequiredWithoutCredit_memosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutCredit_memosInput_1 = require("../inputs/CustomersCreateOrConnectWithoutCredit_memosInput");
const CustomersCreateWithoutCredit_memosInput_1 = require("../inputs/CustomersCreateWithoutCredit_memosInput");
const CustomersUpdateWithoutCredit_memosInput_1 = require("../inputs/CustomersUpdateWithoutCredit_memosInput");
const CustomersUpsertWithoutCredit_memosInput_1 = require("../inputs/CustomersUpsertWithoutCredit_memosInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersUpdateOneRequiredWithoutCredit_memosInput = class CustomersUpdateOneRequiredWithoutCredit_memosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutCredit_memosInput_1.CustomersCreateWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutCredit_memosInput_1.CustomersCreateWithoutCredit_memosInput)
], CustomersUpdateOneRequiredWithoutCredit_memosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutCredit_memosInput_1.CustomersCreateOrConnectWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutCredit_memosInput_1.CustomersCreateOrConnectWithoutCredit_memosInput)
], CustomersUpdateOneRequiredWithoutCredit_memosInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpsertWithoutCredit_memosInput_1.CustomersUpsertWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpsertWithoutCredit_memosInput_1.CustomersUpsertWithoutCredit_memosInput)
], CustomersUpdateOneRequiredWithoutCredit_memosInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersUpdateOneRequiredWithoutCredit_memosInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersUpdateWithoutCredit_memosInput_1.CustomersUpdateWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersUpdateWithoutCredit_memosInput_1.CustomersUpdateWithoutCredit_memosInput)
], CustomersUpdateOneRequiredWithoutCredit_memosInput.prototype, "update", void 0);
CustomersUpdateOneRequiredWithoutCredit_memosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersUpdateOneRequiredWithoutCredit_memosInput", {
        isAbstract: true
    })
], CustomersUpdateOneRequiredWithoutCredit_memosInput);
exports.CustomersUpdateOneRequiredWithoutCredit_memosInput = CustomersUpdateOneRequiredWithoutCredit_memosInput;
