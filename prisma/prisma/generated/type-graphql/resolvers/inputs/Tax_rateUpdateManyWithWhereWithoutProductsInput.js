"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateUpdateManyWithWhereWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateScalarWhereInput_1 = require("../inputs/Tax_rateScalarWhereInput");
const Tax_rateUpdateManyMutationInput_1 = require("../inputs/Tax_rateUpdateManyMutationInput");
let Tax_rateUpdateManyWithWhereWithoutProductsInput = class Tax_rateUpdateManyWithWhereWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateScalarWhereInput_1.Tax_rateScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateScalarWhereInput_1.Tax_rateScalarWhereInput)
], Tax_rateUpdateManyWithWhereWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateUpdateManyMutationInput_1.Tax_rateUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateUpdateManyMutationInput_1.Tax_rateUpdateManyMutationInput)
], Tax_rateUpdateManyWithWhereWithoutProductsInput.prototype, "data", void 0);
Tax_rateUpdateManyWithWhereWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateUpdateManyWithWhereWithoutProductsInput", {
        isAbstract: true
    })
], Tax_rateUpdateManyWithWhereWithoutProductsInput);
exports.Tax_rateUpdateManyWithWhereWithoutProductsInput = Tax_rateUpdateManyWithWhereWithoutProductsInput;
