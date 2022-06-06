"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleCreateManyProductsInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleCreateManyProductsInput_1 = require("../inputs/Tax_ruleCreateManyProductsInput");
let Tax_ruleCreateManyProductsInputEnvelope = class Tax_ruleCreateManyProductsInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_ruleCreateManyProductsInput_1.Tax_ruleCreateManyProductsInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_ruleCreateManyProductsInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Tax_ruleCreateManyProductsInputEnvelope.prototype, "skipDuplicates", void 0);
Tax_ruleCreateManyProductsInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleCreateManyProductsInputEnvelope", {
        isAbstract: true
    })
], Tax_ruleCreateManyProductsInputEnvelope);
exports.Tax_ruleCreateManyProductsInputEnvelope = Tax_ruleCreateManyProductsInputEnvelope;
