"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCatalog_price_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleWhereInput_1 = require("../../../inputs/Catalog_price_ruleWhereInput");
let DeleteManyCatalog_price_ruleArgs = class DeleteManyCatalog_price_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleWhereInput_1.Catalog_price_ruleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleWhereInput_1.Catalog_price_ruleWhereInput)
], DeleteManyCatalog_price_ruleArgs.prototype, "where", void 0);
DeleteManyCatalog_price_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCatalog_price_ruleArgs);
exports.DeleteManyCatalog_price_ruleArgs = DeleteManyCatalog_price_ruleArgs;
