"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const QuotesUpdateWithoutProducts_productsToquotesInput_1 = require("../inputs/QuotesUpdateWithoutProducts_productsToquotesInput");
const QuotesWhereUniqueInput_1 = require("../inputs/QuotesWhereUniqueInput");
let QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput = class QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesWhereUniqueInput_1.QuotesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesWhereUniqueInput_1.QuotesWhereUniqueInput)
], QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => QuotesUpdateWithoutProducts_productsToquotesInput_1.QuotesUpdateWithoutProducts_productsToquotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", QuotesUpdateWithoutProducts_productsToquotesInput_1.QuotesUpdateWithoutProducts_productsToquotesInput)
], QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput.prototype, "data", void 0);
QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput", {
        isAbstract: true
    })
], QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput);
exports.QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput = QuotesUpdateWithWhereUniqueWithoutProducts_productsToquotesInput;
