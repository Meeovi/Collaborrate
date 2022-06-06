"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesCreateNestedManyWithoutProducts_productsToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateManyProducts_productsToquotesInputEnvelope_1 = require("../inputs/QuotesCreateManyProducts_productsToquotesInputEnvelope");
const QuotesCreateOrConnectWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesCreateOrConnectWithoutProducts_productsToquotesInput");
const QuotesCreateWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesCreateWithoutProducts_productsToquotesInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesCreateNestedManyWithoutProducts_productsToquotesInput = class QuotesCreateNestedManyWithoutProducts_productsToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateWithoutProducts_productsToquotesInput_1.QuotesCreateWithoutProducts_productsToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesCreateNestedManyWithoutProducts_productsToquotesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesCreateOrConnectWithoutProducts_productsToquotesInput_1.QuotesCreateOrConnectWithoutProducts_productsToquotesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesCreateNestedManyWithoutProducts_productsToquotesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateManyProducts_productsToquotesInputEnvelope_1.QuotesCreateManyProducts_productsToquotesInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", QuotesCreateManyProducts_productsToquotesInputEnvelope_1.QuotesCreateManyProducts_productsToquotesInputEnvelope)
], QuotesCreateNestedManyWithoutProducts_productsToquotesInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [QuotesWhereUniqueInput_1.QuotesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], QuotesCreateNestedManyWithoutProducts_productsToquotesInput.prototype, "connect", void 0);
QuotesCreateNestedManyWithoutProducts_productsToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesCreateNestedManyWithoutProducts_productsToquotesInput", {
        isAbstract: true
    })
], QuotesCreateNestedManyWithoutProducts_productsToquotesInput);
exports.QuotesCreateNestedManyWithoutProducts_productsToquotesInput = QuotesCreateNestedManyWithoutProducts_productsToquotesInput;
