"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_price_ruleWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Catalog_price_ruleWhereUniqueInput = class Catalog_price_ruleWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Catalog_price_ruleWhereUniqueInput.prototype, "id", void 0);
Catalog_price_ruleWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Catalog_price_ruleWhereUniqueInput", {
        isAbstract: true
    })
], Catalog_price_ruleWhereUniqueInput);
exports.Catalog_price_ruleWhereUniqueInput = Catalog_price_ruleWhereUniqueInput;
