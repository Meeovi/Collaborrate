"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersCreateOrConnectWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomersCreateWithoutQuotesInput_1 = require("../inputs/CustomersCreateWithoutQuotesInput");
const CustomersWhereUniqueInput_1 = require("../inputs/CustomersWhereUniqueInput");
let CustomersCreateOrConnectWithoutQuotesInput = class CustomersCreateOrConnectWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersWhereUniqueInput_1.CustomersWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersWhereUniqueInput_1.CustomersWhereUniqueInput)
], CustomersCreateOrConnectWithoutQuotesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomersCreateWithoutQuotesInput_1.CustomersCreateWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CustomersCreateWithoutQuotesInput_1.CustomersCreateWithoutQuotesInput)
], CustomersCreateOrConnectWithoutQuotesInput.prototype, "create", void 0);
CustomersCreateOrConnectWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomersCreateOrConnectWithoutQuotesInput", {
        isAbstract: true
    })
], CustomersCreateOrConnectWithoutQuotesInput);
exports.CustomersCreateOrConnectWithoutQuotesInput = CustomersCreateOrConnectWithoutQuotesInput;
