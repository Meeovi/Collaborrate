"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Tax_rateAvgAggregate = class Tax_rateAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_rateAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_rateAvgAggregate.prototype, "prod_id", void 0);
Tax_rateAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Tax_rateAvgAggregate", {
        isAbstract: true
    })
], Tax_rateAvgAggregate);
exports.Tax_rateAvgAggregate = Tax_rateAvgAggregate;
