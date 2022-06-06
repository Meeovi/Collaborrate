"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateCreateNestedManyWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateCreateManyProductsInputEnvelope_1 = require("../inputs/Tax_rateCreateManyProductsInputEnvelope");
const Tax_rateCreateOrConnectWithoutProductsInput_1 = require("../inputs/Tax_rateCreateOrConnectWithoutProductsInput");
const Tax_rateCreateWithoutProductsInput_1 = require("../inputs/Tax_rateCreateWithoutProductsInput");
const Tax_rateWhereUniqueInput_1 = require("../inputs/Tax_rateWhereUniqueInput");
let Tax_rateCreateNestedManyWithoutProductsInput = class Tax_rateCreateNestedManyWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateCreateWithoutProductsInput_1.Tax_rateCreateWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateCreateNestedManyWithoutProductsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateCreateOrConnectWithoutProductsInput_1.Tax_rateCreateOrConnectWithoutProductsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateCreateNestedManyWithoutProductsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCreateManyProductsInputEnvelope_1.Tax_rateCreateManyProductsInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateCreateManyProductsInputEnvelope_1.Tax_rateCreateManyProductsInputEnvelope)
], Tax_rateCreateNestedManyWithoutProductsInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Tax_rateWhereUniqueInput_1.Tax_rateWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Tax_rateCreateNestedManyWithoutProductsInput.prototype, "connect", void 0);
Tax_rateCreateNestedManyWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateCreateNestedManyWithoutProductsInput", {
        isAbstract: true
    })
], Tax_rateCreateNestedManyWithoutProductsInput);
exports.Tax_rateCreateNestedManyWithoutProductsInput = Tax_rateCreateNestedManyWithoutProductsInput;
