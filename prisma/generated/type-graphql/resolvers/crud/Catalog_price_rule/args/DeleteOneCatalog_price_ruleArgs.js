"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCatalog_price_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleWhereUniqueInput_1 = require("../../../inputs/Catalog_price_ruleWhereUniqueInput");
let DeleteOneCatalog_price_ruleArgs = class DeleteOneCatalog_price_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleWhereUniqueInput_1.Catalog_price_ruleWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleWhereUniqueInput_1.Catalog_price_ruleWhereUniqueInput)
], DeleteOneCatalog_price_ruleArgs.prototype, "where", void 0);
DeleteOneCatalog_price_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCatalog_price_ruleArgs);
exports.DeleteOneCatalog_price_ruleArgs = DeleteOneCatalog_price_ruleArgs;
