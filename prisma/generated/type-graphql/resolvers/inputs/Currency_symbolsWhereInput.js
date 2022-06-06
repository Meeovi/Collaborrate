"use strict";
var Currency_symbolsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_symbolsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let Currency_symbolsWhereInput = Currency_symbolsWhereInput_1 = class Currency_symbolsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_symbolsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Currency_symbolsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_symbolsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Currency_symbolsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_symbolsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Currency_symbolsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], Currency_symbolsWhereInput.prototype, "symbol", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Currency_symbolsWhereInput.prototype, "use_standard", void 0);
Currency_symbolsWhereInput = Currency_symbolsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_symbolsWhereInput", {
        isAbstract: true
    })
], Currency_symbolsWhereInput);
exports.Currency_symbolsWhereInput = Currency_symbolsWhereInput;
