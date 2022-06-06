"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCatalog_price_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleCreateInput_1 = require("../../../inputs/Catalog_price_ruleCreateInput");
let CreateCatalog_price_ruleArgs = class CreateCatalog_price_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleCreateInput_1.Catalog_price_ruleCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleCreateInput_1.Catalog_price_ruleCreateInput)
], CreateCatalog_price_ruleArgs.prototype, "data", void 0);
CreateCatalog_price_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateCatalog_price_ruleArgs);
exports.CreateCatalog_price_ruleArgs = CreateCatalog_price_ruleArgs;
