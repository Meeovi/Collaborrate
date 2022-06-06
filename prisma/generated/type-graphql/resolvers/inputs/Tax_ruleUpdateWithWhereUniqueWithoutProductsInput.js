"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleUpdateWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleUpdateWithoutProductsInput_1 = require("../inputs/Tax_ruleUpdateWithoutProductsInput");
const Tax_ruleWhereUniqueInput_1 = require("../inputs/Tax_ruleWhereUniqueInput");
let Tax_ruleUpdateWithWhereUniqueWithoutProductsInput = class Tax_ruleUpdateWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleWhereUniqueInput_1.Tax_ruleWhereUniqueInput)
], Tax_ruleUpdateWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleUpdateWithoutProductsInput_1.Tax_ruleUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleUpdateWithoutProductsInput_1.Tax_ruleUpdateWithoutProductsInput)
], Tax_ruleUpdateWithWhereUniqueWithoutProductsInput.prototype, "data", void 0);
Tax_ruleUpdateWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleUpdateWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], Tax_ruleUpdateWithWhereUniqueWithoutProductsInput);
exports.Tax_ruleUpdateWithWhereUniqueWithoutProductsInput = Tax_ruleUpdateWithWhereUniqueWithoutProductsInput;
