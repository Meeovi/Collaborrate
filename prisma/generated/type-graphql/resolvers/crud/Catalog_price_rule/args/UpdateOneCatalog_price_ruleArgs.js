"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCatalog_price_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleUpdateInput_1 = require("../../../inputs/Catalog_price_ruleUpdateInput");
const Catalog_price_ruleWhereUniqueInput_1 = require("../../../inputs/Catalog_price_ruleWhereUniqueInput");
let UpdateOneCatalog_price_ruleArgs = class UpdateOneCatalog_price_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleUpdateInput_1.Catalog_price_ruleUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleUpdateInput_1.Catalog_price_ruleUpdateInput)
], UpdateOneCatalog_price_ruleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleWhereUniqueInput_1.Catalog_price_ruleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleWhereUniqueInput_1.Catalog_price_ruleWhereUniqueInput)
], UpdateOneCatalog_price_ruleArgs.prototype, "where", void 0);
UpdateOneCatalog_price_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCatalog_price_ruleArgs);
exports.UpdateOneCatalog_price_ruleArgs = UpdateOneCatalog_price_ruleArgs;
