"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleCreateWithoutProductsInput_1 = require("../inputs/Tax_ruleCreateWithoutProductsInput");
const Tax_ruleWhereUniqueInput_1 = require("../inputs/Tax_ruleWhereUniqueInput");
let Tax_ruleCreateOrConnectWithoutProductsInput = class Tax_ruleCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput)
], Tax_ruleCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCreateWithoutProductsInput_1.Tax_ruleCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleCreateWithoutProductsInput_1.Tax_ruleCreateWithoutProductsInput)
], Tax_ruleCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
Tax_ruleCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], Tax_ruleCreateOrConnectWithoutProductsInput);
exports.Tax_ruleCreateOrConnectWithoutProductsInput = Tax_ruleCreateOrConnectWithoutProductsInput;
