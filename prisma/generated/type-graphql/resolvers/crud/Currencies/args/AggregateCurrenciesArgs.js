"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCurrenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesOrderByWithRelationInput_1 = require("../../../inputs/CurrenciesOrderByWithRelationInput");
const CurrenciesWhereInput_1 = require("../../../inputs/CurrenciesWhereInput");
const CurrenciesWhereUniqueInput_1 = require("../../../inputs/CurrenciesWhereUniqueInput");
let AggregateCurrenciesArgs = class AggregateCurrenciesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereInput_1.CurrenciesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereInput_1.CurrenciesWhereInput)
], AggregateCurrenciesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesOrderByWithRelationInput_1.CurrenciesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCurrenciesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput)
], AggregateCurrenciesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCurrenciesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCurrenciesArgs.prototype, "skip", void 0);
AggregateCurrenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCurrenciesArgs);
exports.AggregateCurrenciesArgs = AggregateCurrenciesArgs;
