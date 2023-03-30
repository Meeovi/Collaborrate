"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCurrenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesOrderByWithRelationInput_1 = require("../../../inputs/CurrenciesOrderByWithRelationInput");
const CurrenciesWhereInput_1 = require("../../../inputs/CurrenciesWhereInput");
const CurrenciesWhereUniqueInput_1 = require("../../../inputs/CurrenciesWhereUniqueInput");
const CurrenciesScalarFieldEnum_1 = require("../../../../enums/CurrenciesScalarFieldEnum");
let FindFirstCurrenciesArgs = class FindFirstCurrenciesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereInput_1.CurrenciesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereInput_1.CurrenciesWhereInput)
], FindFirstCurrenciesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesOrderByWithRelationInput_1.CurrenciesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCurrenciesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput)
], FindFirstCurrenciesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCurrenciesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCurrenciesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesScalarFieldEnum_1.CurrenciesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCurrenciesArgs.prototype, "distinct", void 0);
FindFirstCurrenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCurrenciesArgs);
exports.FindFirstCurrenciesArgs = FindFirstCurrenciesArgs;
