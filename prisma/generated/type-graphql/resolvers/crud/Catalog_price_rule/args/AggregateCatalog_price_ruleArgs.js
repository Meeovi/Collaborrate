"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCatalog_price_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleOrderByWithRelationInput_1 = require("../../../inputs/Catalog_price_ruleOrderByWithRelationInput");
const Catalog_price_ruleWhereInput_1 = require("../../../inputs/Catalog_price_ruleWhereInput");
const Catalog_price_ruleWhereUniqueInput_1 = require("../../../inputs/Catalog_price_ruleWhereUniqueInput");
let AggregateCatalog_price_ruleArgs = class AggregateCatalog_price_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleWhereInput_1.Catalog_price_ruleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleWhereInput_1.Catalog_price_ruleWhereInput)
], AggregateCatalog_price_ruleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Catalog_price_ruleOrderByWithRelationInput_1.Catalog_price_ruleOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCatalog_price_ruleArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleWhereUniqueInput_1.Catalog_price_ruleWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleWhereUniqueInput_1.Catalog_price_ruleWhereUniqueInput)
], AggregateCatalog_price_ruleArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCatalog_price_ruleArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCatalog_price_ruleArgs.prototype, "skip", void 0);
AggregateCatalog_price_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCatalog_price_ruleArgs);
exports.AggregateCatalog_price_ruleArgs = AggregateCatalog_price_ruleArgs;
