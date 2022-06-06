"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCatalog_price_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleUpdateManyMutationInput_1 = require("../../../inputs/Catalog_price_ruleUpdateManyMutationInput");
const Catalog_price_ruleWhereInput_1 = require("../../../inputs/Catalog_price_ruleWhereInput");
let UpdateManyCatalog_price_ruleArgs = class UpdateManyCatalog_price_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleUpdateManyMutationInput_1.Catalog_price_ruleUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleUpdateManyMutationInput_1.Catalog_price_ruleUpdateManyMutationInput)
], UpdateManyCatalog_price_ruleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleWhereInput_1.Catalog_price_ruleWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleWhereInput_1.Catalog_price_ruleWhereInput)
], UpdateManyCatalog_price_ruleArgs.prototype, "where", void 0);
UpdateManyCatalog_price_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCatalog_price_ruleArgs);
exports.UpdateManyCatalog_price_ruleArgs = UpdateManyCatalog_price_ruleArgs;
