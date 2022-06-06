"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCatalog_price_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleOrderByWithRelationInput_1 = require("../../../inputs/Catalog_price_ruleOrderByWithRelationInput");
const Catalog_price_ruleWhereInput_1 = require("../../../inputs/Catalog_price_ruleWhereInput");
const Catalog_price_ruleWhereUniqueInput_1 = require("../../../inputs/Catalog_price_ruleWhereUniqueInput");
const Catalog_price_ruleScalarFieldEnum_1 = require("../../../../enums/Catalog_price_ruleScalarFieldEnum");
let FindManyCatalog_price_ruleArgs = class FindManyCatalog_price_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleWhereInput_1.Catalog_price_ruleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleWhereInput_1.Catalog_price_ruleWhereInput)
], FindManyCatalog_price_ruleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Catalog_price_ruleOrderByWithRelationInput_1.Catalog_price_ruleOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCatalog_price_ruleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleWhereUniqueInput_1.Catalog_price_ruleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleWhereUniqueInput_1.Catalog_price_ruleWhereUniqueInput)
], FindManyCatalog_price_ruleArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCatalog_price_ruleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCatalog_price_ruleArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Catalog_price_ruleScalarFieldEnum_1.Catalog_price_ruleScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCatalog_price_ruleArgs.prototype, "distinct", void 0);
FindManyCatalog_price_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCatalog_price_ruleArgs);
exports.FindManyCatalog_price_ruleArgs = FindManyCatalog_price_ruleArgs;
