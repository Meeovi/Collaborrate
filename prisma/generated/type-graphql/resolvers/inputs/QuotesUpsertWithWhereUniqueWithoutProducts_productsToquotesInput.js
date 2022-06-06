"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesCreateWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesCreateWithoutProducts_productsToquotesInput");
const QuotesUpdateWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesUpdateWithoutProducts_productsToquotesInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput = class QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateWithoutProducts_productsToquotesInput_1.QuotesUpdateWithoutProducts_productsToquotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesUpdateWithoutProducts_productsToquotesInput_1.QuotesUpdateWithoutProducts_productsToquotesInput)
], QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesCreateWithoutProducts_productsToquotesInput_1.QuotesCreateWithoutProducts_productsToquotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesCreateWithoutProducts_productsToquotesInput_1.QuotesCreateWithoutProducts_productsToquotesInput)
], QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput.prototype, "create", void 0);
QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput", {
        isAbstract: true
    })
], QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput);
exports.QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput = QuotesUpsertWithWhereUniqueWithoutProducts_productsToquotesInput;
