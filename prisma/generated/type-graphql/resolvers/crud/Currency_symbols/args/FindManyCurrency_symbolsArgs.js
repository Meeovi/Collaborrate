"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsOrderByWithRelationAndSearchRelevanceInput_1 = require("../../../inputs/Currency_symbolsOrderByWithRelationAndSearchRelevanceInput");
const Currency_symbolsWhereInput_1 = require("../../../inputs/Currency_symbolsWhereInput");
const Currency_symbolsWhereUniqueInput_1 = require("../../../inputs/Currency_symbolsWhereUniqueInput");
const Currency_symbolsScalarFieldEnum_1 = require("../../../../enums/Currency_symbolsScalarFieldEnum");
let FindManyCurrency_symbolsArgs = class FindManyCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereInput_1.Currency_symbolsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereInput_1.Currency_symbolsWhereInput)
], FindManyCurrency_symbolsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_symbolsOrderByWithRelationAndSearchRelevanceInput_1.Currency_symbolsOrderByWithRelationAndSearchRelevanceInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCurrency_symbolsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput)
], FindManyCurrency_symbolsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCurrency_symbolsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCurrency_symbolsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_symbolsScalarFieldEnum_1.Currency_symbolsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCurrency_symbolsArgs.prototype, "distinct", void 0);
FindManyCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCurrency_symbolsArgs);
exports.FindManyCurrency_symbolsArgs = FindManyCurrency_symbolsArgs;
