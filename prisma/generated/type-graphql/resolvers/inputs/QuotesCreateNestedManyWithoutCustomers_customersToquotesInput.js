"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesCreateNestedManyWithoutCustomers_customersToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateManyCustomers_customersToquotesInputEnvelope_1 = require("../inputs/QuotesCreateManyCustomers_customersToquotesInputEnvelope");
const QuotesCreateOrConnectWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesCreateOrConnectWithoutCustomers_customersToquotesInput");
const QuotesCreateWithoutCustomers_customersToquotesInput_1 = require("../inputs/QuotesCreateWithoutCustomers_customersToquotesInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesCreateNestedManyWithoutCustomers_customersToquotesInput = class QuotesCreateNestedManyWithoutCustomers_customersToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateWithoutCustomers_customersToquotesInput_1.QuotesCreateWithoutCustomers_customersToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesCreateNestedManyWithoutCustomers_customersToquotesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateOrConnectWithoutCustomers_customersToquotesInput_1.QuotesCreateOrConnectWithoutCustomers_customersToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesCreateNestedManyWithoutCustomers_customersToquotesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateManyCustomers_customersToquotesInputEnvelope_1.QuotesCreateManyCustomers_customersToquotesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateManyCustomers_customersToquotesInputEnvelope_1.QuotesCreateManyCustomers_customersToquotesInputEnvelope)
], QuotesCreateNestedManyWithoutCustomers_customersToquotesInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesCreateNestedManyWithoutCustomers_customersToquotesInput.prototype, "connect", void 0);
QuotesCreateNestedManyWithoutCustomers_customersToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesCreateNestedManyWithoutCustomers_customersToquotesInput", {
        isAbstract: true
    })
], QuotesCreateNestedManyWithoutCustomers_customersToquotesInput);
exports.QuotesCreateNestedManyWithoutCustomers_customersToquotesInput = QuotesCreateNestedManyWithoutCustomers_customersToquotesInput;
