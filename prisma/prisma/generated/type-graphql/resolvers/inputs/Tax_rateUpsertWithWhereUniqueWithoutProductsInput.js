"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateUpsertWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateCreateWithoutProductsInput_1 = require("../inputs/Tax_rateCreateWithoutProductsInput");
const Tax_rateUpdateWithoutProductsInput_1 = require("../inputs/Tax_rateUpdateWithoutProductsInput");
const Tax_rateWhereUniqueInput_1 = require("../inputs/Tax_rateWhereUniqueInput");
let Tax_rateUpsertWithWhereUniqueWithoutProductsInput = class Tax_rateUpsertWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput)
], Tax_rateUpsertWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateUpdateWithoutProductsInput_1.Tax_rateUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateUpdateWithoutProductsInput_1.Tax_rateUpdateWithoutProductsInput)
], Tax_rateUpsertWithWhereUniqueWithoutProductsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCreateWithoutProductsInput_1.Tax_rateCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateCreateWithoutProductsInput_1.Tax_rateCreateWithoutProductsInput)
], Tax_rateUpsertWithWhereUniqueWithoutProductsInput.prototype, "create", void 0);
Tax_rateUpsertWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateUpsertWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], Tax_rateUpsertWithWhereUniqueWithoutProductsInput);
exports.Tax_rateUpsertWithWhereUniqueWithoutProductsInput = Tax_rateUpsertWithWhereUniqueWithoutProductsInput;
