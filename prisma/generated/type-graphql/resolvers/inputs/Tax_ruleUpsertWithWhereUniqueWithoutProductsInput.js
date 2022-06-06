"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleUpsertWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleCreateWithoutProductsInput_1 = require("../inputs/Tax_ruleCreateWithoutProductsInput");
const Tax_ruleUpdateWithoutProductsInput_1 = require("../inputs/Tax_ruleUpdateWithoutProductsInput");
const Tax_ruleWhereUniqueInput_1 = require("../inputs/Tax_ruleWhereUniqueInput");
let Tax_ruleUpsertWithWhereUniqueWithoutProductsInput = class Tax_ruleUpsertWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput)
], Tax_ruleUpsertWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleUpdateWithoutProductsInput_1.Tax_ruleUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleUpdateWithoutProductsInput_1.Tax_ruleUpdateWithoutProductsInput)
], Tax_ruleUpsertWithWhereUniqueWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCreateWithoutProductsInput_1.Tax_ruleCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleCreateWithoutProductsInput_1.Tax_ruleCreateWithoutProductsInput)
], Tax_ruleUpsertWithWhereUniqueWithoutProductsInput.prototype, "create", void 0);
Tax_ruleUpsertWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleUpsertWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], Tax_ruleUpsertWithWhereUniqueWithoutProductsInput);
exports.Tax_ruleUpsertWithWhereUniqueWithoutProductsInput = Tax_ruleUpsertWithWhereUniqueWithoutProductsInput;
