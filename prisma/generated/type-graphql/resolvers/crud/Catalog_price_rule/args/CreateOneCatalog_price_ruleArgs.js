"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCatalog_price_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleCreateInput_1 = require("../../../inputs/Catalog_price_ruleCreateInput");
let CreateOneCatalog_price_ruleArgs = class CreateOneCatalog_price_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleCreateInput_1.Catalog_price_ruleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleCreateInput_1.Catalog_price_ruleCreateInput)
], CreateOneCatalog_price_ruleArgs.prototype, "data", void 0);
CreateOneCatalog_price_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCatalog_price_ruleArgs);
exports.CreateOneCatalog_price_ruleArgs = CreateOneCatalog_price_ruleArgs;
