"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCurrenciesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CurrenciesOrderByWithRelationInput_1 = require("../../../inputs/CurrenciesOrderByWithRelationInput");
const CurrenciesWhereInput_1 = require("../../../inputs/CurrenciesWhereInput");
const CurrenciesWhereUniqueInput_1 = require("../../../inputs/CurrenciesWhereUniqueInput");
const CurrenciesScalarFieldEnum_1 = require("../../../../enums/CurrenciesScalarFieldEnum");
let FindManyCurrenciesArgs = class FindManyCurrenciesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereInput_1.CurrenciesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereInput_1.CurrenciesWhereInput)
], FindManyCurrenciesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesOrderByWithRelationInput_1.CurrenciesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCurrenciesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CurrenciesWhereUniqueInput_1.CurrenciesWhereUniqueInput)
], FindManyCurrenciesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCurrenciesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCurrenciesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CurrenciesScalarFieldEnum_1.CurrenciesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCurrenciesArgs.prototype, "distinct", void 0);
FindManyCurrenciesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCurrenciesArgs);
exports.FindManyCurrenciesArgs = FindManyCurrenciesArgs;
