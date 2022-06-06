"use strict";
var Currency_ratesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency_ratesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DecimalNullableFilter_1 = require("../inputs/DecimalNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let Currency_ratesWhereInput = Currency_ratesWhereInput_1 = class Currency_ratesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_ratesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Currency_ratesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_ratesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Currency_ratesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_ratesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Currency_ratesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], Currency_ratesWhereInput.prototype, "import_service", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DecimalNullableFilter_1.DecimalNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DecimalNullableFilter_1.DecimalNullableFilter)
], Currency_ratesWhereInput.prototype, "usd", void 0);
Currency_ratesWhereInput = Currency_ratesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Currency_ratesWhereInput", {
        isAbstract: true
    })
], Currency_ratesWhereInput);
exports.Currency_ratesWhereInput = Currency_ratesWhereInput;
