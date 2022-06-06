"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCurrency_symbolsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_symbolsOrderByWithRelationInput_1 = require("../../../inputs/Currency_symbolsOrderByWithRelationInput");
const Currency_symbolsWhereInput_1 = require("../../../inputs/Currency_symbolsWhereInput");
const Currency_symbolsWhereUniqueInput_1 = require("../../../inputs/Currency_symbolsWhereUniqueInput");
let AggregateCurrency_symbolsArgs = class AggregateCurrency_symbolsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereInput_1.Currency_symbolsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereInput_1.Currency_symbolsWhereInput)
], AggregateCurrency_symbolsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Currency_symbolsOrderByWithRelationInput_1.Currency_symbolsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCurrency_symbolsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Currency_symbolsWhereUniqueInput_1.Currency_symbolsWhereUniqueInput)
], AggregateCurrency_symbolsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCurrency_symbolsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCurrency_symbolsArgs.prototype, "skip", void 0);
AggregateCurrency_symbolsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCurrency_symbolsArgs);
exports.AggregateCurrency_symbolsArgs = AggregateCurrency_symbolsArgs;
