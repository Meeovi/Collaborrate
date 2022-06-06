"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateCreateWithoutProductsInput_1 = require("../inputs/Tax_rateCreateWithoutProductsInput");
const Tax_rateWhereUniqueInput_1 = require("../inputs/Tax_rateWhereUniqueInput");
let Tax_rateCreateOrConnectWithoutProductsInput = class Tax_rateCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput)
], Tax_rateCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCreateWithoutProductsInput_1.Tax_rateCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateCreateWithoutProductsInput_1.Tax_rateCreateWithoutProductsInput)
], Tax_rateCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
Tax_rateCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], Tax_rateCreateOrConnectWithoutProductsInput);
exports.Tax_rateCreateOrConnectWithoutProductsInput = Tax_rateCreateOrConnectWithoutProductsInput;
