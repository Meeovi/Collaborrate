"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateUpdateWithWhereUniqueWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateUpdateWithoutProductsInput_1 = require("../inputs/Tax_rateUpdateWithoutProductsInput");
const Tax_rateWhereUniqueInput_1 = require("../inputs/Tax_rateWhereUniqueInput");
let Tax_rateUpdateWithWhereUniqueWithoutProductsInput = class Tax_rateUpdateWithWhereUniqueWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput)
], Tax_rateUpdateWithWhereUniqueWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateUpdateWithoutProductsInput_1.Tax_rateUpdateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Tax_rateUpdateWithoutProductsInput_1.Tax_rateUpdateWithoutProductsInput)
], Tax_rateUpdateWithWhereUniqueWithoutProductsInput.prototype, "data", void 0);
Tax_rateUpdateWithWhereUniqueWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateUpdateWithWhereUniqueWithoutProductsInput", {
        isAbstract: true
    })
], Tax_rateUpdateWithWhereUniqueWithoutProductsInput);
exports.Tax_rateUpdateWithWhereUniqueWithoutProductsInput = Tax_rateUpdateWithWhereUniqueWithoutProductsInput;
