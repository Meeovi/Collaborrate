"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesCreateOrConnectWithoutProducts_productsToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesCreateWithoutProducts_productsToquotesInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesCreateOrConnectWithoutProducts_productsToquotesInput = class QuotesCreateOrConnectWithoutProducts_productsToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], QuotesCreateOrConnectWithoutProducts_productsToquotesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateWithoutProducts_productsToquotesInput_1.QuotesCreateWithoutProducts_productsToquotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesCreateWithoutProducts_productsToquotesInput_1.QuotesCreateWithoutProducts_productsToquotesInput)
], QuotesCreateOrConnectWithoutProducts_productsToquotesInput.prototype, "create", void 0);
QuotesCreateOrConnectWithoutProducts_productsToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesCreateOrConnectWithoutProducts_productsToquotesInput", {
        isAbstract: true
    })
], QuotesCreateOrConnectWithoutProducts_productsToquotesInput);
exports.QuotesCreateOrConnectWithoutProducts_productsToquotesInput = QuotesCreateOrConnectWithoutProducts_productsToquotesInput;
