"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCatalog_price_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleCreateInput_1 = require("../../../inputs/Catalog_price_ruleCreateInput");
const Catalog_price_ruleUpdateInput_1 = require("../../../inputs/Catalog_price_ruleUpdateInput");
const Catalog_price_ruleWhereUniqueInput_1 = require("../../../inputs/Catalog_price_ruleWhereUniqueInput");
let UpsertOneCatalog_price_ruleArgs = class UpsertOneCatalog_price_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleWhereUniqueInput_1.Catalog_price_ruleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleWhereUniqueInput_1.Catalog_price_ruleWhereUniqueInput)
], UpsertOneCatalog_price_ruleArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleCreateInput_1.Catalog_price_ruleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleCreateInput_1.Catalog_price_ruleCreateInput)
], UpsertOneCatalog_price_ruleArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleUpdateInput_1.Catalog_price_ruleUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleUpdateInput_1.Catalog_price_ruleUpdateInput)
], UpsertOneCatalog_price_ruleArgs.prototype, "update", void 0);
UpsertOneCatalog_price_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCatalog_price_ruleArgs);
exports.UpsertOneCatalog_price_ruleArgs = UpsertOneCatalog_price_ruleArgs;
