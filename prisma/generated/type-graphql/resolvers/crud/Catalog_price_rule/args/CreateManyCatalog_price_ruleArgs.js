"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCatalog_price_ruleArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleCreateManyInput_1 = require("../../../inputs/Catalog_price_ruleCreateManyInput");
let CreateManyCatalog_price_ruleArgs = class CreateManyCatalog_price_ruleArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Catalog_price_ruleCreateManyInput_1.Catalog_price_ruleCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyCatalog_price_ruleArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyCatalog_price_ruleArgs.prototype, "skipDuplicates", void 0);
CreateManyCatalog_price_ruleArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyCatalog_price_ruleArgs);
exports.CreateManyCatalog_price_ruleArgs = CreateManyCatalog_price_ruleArgs;
