"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleCreateNestedManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleCreateManyProductsInputEnvelope_1 = require("../inputs/Tax_ruleCreateManyProductsInputEnvelope");
const Tax_ruleCreateOrConnectWithoutProductsInput_1 = require("../inputs/Tax_ruleCreateOrConnectWithoutProductsInput");
const Tax_ruleCreateWithoutProductsInput_1 = require("../inputs/Tax_ruleCreateWithoutProductsInput");
const Tax_ruleWhereUniqueInput_1 = require("../inputs/Tax_ruleWhereUniqueInput");
let Tax_ruleCreateNestedManyWithoutProductsInput = class Tax_ruleCreateNestedManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleCreateWithoutProductsInput_1.Tax_ruleCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleCreateOrConnectWithoutProductsInput_1.Tax_ruleCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCreateManyProductsInputEnvelope_1.Tax_ruleCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleCreateManyProductsInputEnvelope_1.Tax_ruleCreateManyProductsInputEnvelope)
], Tax_ruleCreateNestedManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
Tax_ruleCreateNestedManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleCreateNestedManyWithoutProductsInput", {
        isAbstract: true
    })
], Tax_ruleCreateNestedManyWithoutProductsInput);
exports.Tax_ruleCreateNestedManyWithoutProductsInput = Tax_ruleCreateNestedManyWithoutProductsInput;
