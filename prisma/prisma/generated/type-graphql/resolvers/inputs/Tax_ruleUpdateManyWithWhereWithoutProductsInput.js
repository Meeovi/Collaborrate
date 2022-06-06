"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleUpdateManyWithWhereWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleScalarWhereInput_1 = require("../inputs/Tax_ruleScalarWhereInput");
const Tax_ruleUpdateManyMutationInput_1 = require("../inputs/Tax_ruleUpdateManyMutationInput");
let Tax_ruleUpdateManyWithWhereWithoutProductsInput = class Tax_ruleUpdateManyWithWhereWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleScalarWhereInput_1.Tax_ruleScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleScalarWhereInput_1.Tax_ruleScalarWhereInput)
], Tax_ruleUpdateManyWithWhereWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleUpdateManyMutationInput_1.Tax_ruleUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_ruleUpdateManyMutationInput_1.Tax_ruleUpdateManyMutationInput)
], Tax_ruleUpdateManyWithWhereWithoutProductsInput.prototype, "data", void 0);
Tax_ruleUpdateManyWithWhereWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleUpdateManyWithWhereWithoutProductsInput", {
        isAbstract: true
    })
], Tax_ruleUpdateManyWithWhereWithoutProductsInput);
exports.Tax_ruleUpdateManyWithWhereWithoutProductsInput = Tax_ruleUpdateManyWithWhereWithoutProductsInput;
