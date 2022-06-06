"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateNestedOneWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateOrConnectWithoutQuotesInput_1 = require("../inputs/CustomersCreateOrConnectWithoutQuotesInput");
const CustomersCreateWithoutQuotesInput_1 = require("../inputs/CustomersCreateWithoutQuotesInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateNestedOneWithoutQuotesInput = class CustomersCreateNestedOneWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutQuotesInput_1.CustomersCreateWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutQuotesInput_1.CustomersCreateWithoutQuotesInput)
], CustomersCreateNestedOneWithoutQuotesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateOrConnectWithoutQuotesInput_1.CustomersCreateOrConnectWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersCreateOrConnectWithoutQuotesInput_1.CustomersCreateOrConnectWithoutQuotesInput)
], CustomersCreateNestedOneWithoutQuotesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateNestedOneWithoutQuotesInput.prototype, "connect", void 0);
CustomersCreateNestedOneWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateNestedOneWithoutQuotesInput", {
        isAbstract: true
    })
], CustomersCreateNestedOneWithoutQuotesInput);
exports.CustomersCreateNestedOneWithoutQuotesInput = CustomersCreateNestedOneWithoutQuotesInput;
