"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateCreateManyProductsInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateCreateManyProductsInput_1 = require("../inputs/Tax_rateCreateManyProductsInput");
let Tax_rateCreateManyProductsInputEnvelope = class Tax_rateCreateManyProductsInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateCreateManyProductsInput_1.Tax_rateCreateManyProductsInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateCreateManyProductsInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Tax_rateCreateManyProductsInputEnvelope.prototype, "skipDuplicates", void 0);
Tax_rateCreateManyProductsInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateCreateManyProductsInputEnvelope", {
        isAbstract: true
    })
], Tax_rateCreateManyProductsInputEnvelope);
exports.Tax_rateCreateManyProductsInputEnvelope = Tax_rateCreateManyProductsInputEnvelope;
