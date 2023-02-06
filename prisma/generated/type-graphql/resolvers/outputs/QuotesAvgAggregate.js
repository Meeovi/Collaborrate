"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let QuotesAvgAggregate = class QuotesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], QuotesAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], QuotesAvgAggregate.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], QuotesAvgAggregate.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], QuotesAvgAggregate.prototype, "order_id", void 0);
QuotesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("QuotesAvgAggregate", {
        isAbstract: true
    })
], QuotesAvgAggregate);
exports.QuotesAvgAggregate = QuotesAvgAggregate;
